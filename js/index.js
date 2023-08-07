let today = new Date();
let thisYear = today.getFullYear();
console.log(thisYear);

const footer = document.querySelector("footer");

const myName = "Krista Zaloudek";

const copyright = document.createElement("p");

copyright.innerHTML = `${myName} &copy ${thisYear}`;

footer.appendChild(copyright);

let skills = [
  "html",
  "javascript",
  "business analysis",
  "user acceptance testing",
  "manual testing",
];

let skillsSection = document.getElementById("skills");

let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.getElementById("messageForm");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = e.target.usersName.value;
  let userEmail = e.target.usersEmail.value;
  let userMessage = e.target.usersMessage.value;
  let messageSection = document.getElementById("messages");

  //let messageList = messageSection.getElementsByTagName("ul");
  let messageList = document.getElementById("messageList");

  let newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="${userEmail}" mailto:"${userEmail}">${userName}</a> wrote: <span>${userMessage}</span>`;

  let removeButton = document.createElement("input");
  //removeButton.type = "button";
  removeButton.setAttribute("type", "button");

  removeButton.value = "remove";
  removeButton.style.width = "60px";
  removeButton.style.color = "black";

  newMessage.appendChild(removeButton);

  messageList.append(newMessage);

  removeButton.addEventListener("click", (e) => {
    let entry = removeButton.parentNode.parentNode;
    entry.removeChild(newMessage);
  });

  e.target.reset();
});
