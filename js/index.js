const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "Tetiana " + thisYear;
footer.appendChild(copyright);

const skills = [
  "Node.js",
  "JavaScript",
  "Cypress",
  "Selenium",
  "Postman",
  "JAVA",
  "GitHub",
  "HTML",
  "CSS",
];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (var i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message");
messageForm[0].addEventListener("submit", Callback, true);
function Callback(event) {
  event.preventDefault();
  let name = event.target.usersName.value;
  let email = event.target.usersEmail.value;
  let message = event.target.usersMessage.value;
  console.log(name + " ," + email + " ," + message);
  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href= "${email} " mailto:"${email}">${name} </a> <span>${message} </span>`;

  let removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.value = "remove";
  newMessage.appendChild(removeButton);
  messageList.append(newMessage);
  removeButton.addEventListener("click", (e) => {
    let entry = removeButton.parentNode.parentNode;
    entry.removeChild(newMessage);
  });

  messageForm[0].reset();
}
