var today = new Date();
var thisYear = today.getFullYear();

var footer = document.querySelector("footer");

var copyright = document.createElement("P");

copyright.innerHTML = "Roman" + thisYear;

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
// Using "DOM Selection", select the "leave_message" form by name attribute and store it in a variable named messageForm
//  Add an event listener to the messageForm element that handles the "submit" event
// hint: addEventListener method
//  Inside the callback function for your event listener, create a new variable for each of the three form fields and retrieve the value from the event
// hint: event.target is the form, event.target.usersName is the first input element
//  Inside the callback function for your event listener, add a console.log statement to log the three variables you created in the previous step
//  Save and refresh your browser
//  Fill out the HTML form in your browser and hit "Submit"

// const messageForm = document.forms.leave_message;

// messageForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const usersName = messageForm.usersName.value;
//   console.log(usersName);
//   const usersEmail = messageForm.usersEmail.value;

//   const usersMessage = messageForm.usersMessage.value;
// });

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
