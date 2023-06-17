// input text of the CLI
const cmd_input = document.getElementById("cmd_input");
let language = "en";

function change_language(l) {
  if (l == "fr")
    language = "fr";
  if (l == "en")
    language = "en";
}

function clear_commands() {
  let cmds = document.getElementsByClassName("command");
  while(cmds.length > 0)
    cmds[0].parentNode.removeChild(cmds[0]); 
}

function updateScroll(){
  var element = document.getElementById("terminal");
  element.scrollTop = element.scrollHeight;
}

function append_content_to_inner_html(htmlContainer, content) {
  htmlContainer.innerHTML += content;
}

function enter_command(cmd) {
  //print past command
  let command = document.createElement("div");
  command.setAttribute("class", "command");
  
  //display past cmd
  command.innerHTML += user + cmd;
  
  //add br
  command.innerHTML += "<br>";
  
  // exception for non content commands
  // clear
  if (cmd == "clear") 
    clear_commands();

  else {
    let content = from_cmd_name_to_cmd_content(cmd);
    append_content_to_inner_html(command, content);

    //display whole div 
    cli.insertAdjacentElement('beforebegin', command);
  }

  force_cmd_input_selection();
  updateScroll();
}

function from_cmd_name_to_cmd_content(cmd_name){

  if (language == "en"){
    switch (cmd_name) {
      case 'experiences':
        return en_experiences;
      case 'projects':
        return en_projects;
      case 'languages':
        return en_languages;
      case 'skills':
        return en_skills;
      case 'formation':
        return en_formation;
      case 'contact':
        return en_contact;
      case 'about':
        return en_about;
      case 'contact':
        return en_contact;
      case 'help':
        return en_help;
      case 'career':
        return en_career;
      case 'softskills':
        return en_softskills;
      case 'home':
        return en_home;
      default:
        return en_cmd_not_found;
    }
  }
  else {
    switch (cmd_name) {
      case 'experiences':
        return fr_experiences;
      case 'projects':
        return fr_projects;
      case 'languages':
        return fr_languages;
      case 'skills':
        return fr_skills;
      case 'formation':
        return fr_formation;
      case 'contact':
        return fr_contact;
      case 'about':
        return fr_about;
      case 'contact':
        return fr_contact;
      case 'help':
        return fr_help;
      case 'career':
        return fr_career;
      case 'softskills':
        return fr_softskills;
      case 'home':
        return fr_home;
      default:
        return fr_cmd_not_found;
    }
  }
}

function force_cmd_input_selection() {
  if (!isMobileDevice()) {
    cmd_input.focus(); 
    cmd_input.select(); 
  }
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Main 
force_cmd_input_selection();

const cli = document.getElementById("cli");

cmd_input.addEventListener("keypress", (event)=> {
  if (event.keyCode === 13) { // key code of the keybord key
    event.preventDefault();
    enter_command(cmd_input.value);
    cmd_input.value = '';
  }
});

enter_command("home");