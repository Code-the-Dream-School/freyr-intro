var today = new Date();
var thisYear = today.getFullYear();

var footer = document.querySelector("footer");

var copyright = document.createElement("P");

copyright.innerHTML = "\u00A9Roman Zerihun " + thisYear;

document.body.appendChild(copyright);

var skills = ["JavaScript", "Html", "Css", "Git"];

var skillsSection = document.getElementById("skills");

//skills section to find the <ul> element
var skillsList = skillsSection.querySelector("ul");

//loop to iterate over the skills array
for (var i = 0; i < skills.length; i++) {
  //creating a new list item li element
  var skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

/////////////////assingment-4-3////////////////
const messageForm = document.getElementsByName("leave_message")[0];
const messageList = document.querySelector("#messages ul");
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var username = document.getElementsByName("usersName")[0].value;
  console.log(username);
  var usersEmail = document.getElementsByName("usersEmail")[0].value;
  console.log(usersEmail);
  var usersMessage = document.getElementsByName("usersMessage")[0].value;
  console.log(usersMessage);
  /////// adding to the message section
  const listItem = document.createElement("li");
  listItem.innerHTML = `<strong>${username}:</strong> ${usersMessage}`;

  messageList.appendChild(listItem);

  document.getElementsByName("usersName")[0].value = "";
  document.getElementsByName("usersEmail")[0].value = "";
  document.getElementsByName("usersMessage")[0].value = "";
});
