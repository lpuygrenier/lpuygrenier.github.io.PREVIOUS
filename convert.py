import markdown as md
from os import walk

from deep_translator import GoogleTranslator

translator = GoogleTranslator(source='en', target='fr')

# retrieve all filnames of given path directory into an array of strings
def listDir(path) :
	return next(walk(path), (None, None, []))[2]

# format string into one line and add \ to "
def format(data, variableName) :
    data = data.replace('\n', ' ').replace('\r', '').replace('"', '\\"')
    return f'let {variableName} = "{data}";\n'

# write string to file
def write(destFile, buffer) :
	destFile.write(buffer)

def read(file) :
	return file.read()

#convert markdown buffer to html
def toHtml(buffer) :
	return md.markdown(buffer)

#translate english buffer to french
def toFrench(buffer) :
	return translator.translate(buffer)

with open("js/markdown_content.js", "w", encoding="utf-8") as markdown_content: #open desination file
	for filename in listDir("data/markdown") :
		with open("data/markdown/" + filename) as enFile :
			data = read(enFile)
			# write engliah part
			write(markdown_content, format(toHtml(data), filename[:-3])) 
	        # write french part
			write(markdown_content, format(toHtml(toFrench(data)), f'fr_{filename[3:-3]}'))


