//copyright vars
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector(".footer-child");
const copyright = document.createElement("p");
const arrow = document.querySelector("#top-arrow");

arrow.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//container.addEventListener("click", function (event) {
//var clicked = event.target.id;
//   if (clicked == "button" || "About") {
//     alert("Welcome to my page!");
//   } else if (clicked == "button" || "Experience") {
//     alert("None lol");
//   } else if (clicked == "button" || "button") {
//     alert("Follow for follow?");
//   }
// });

//copyright logo
const logoCopyright = document.createElement("p");
logoCopyright.innerHTML = "&#128526";
logoCopyright.style.display = "inline";
footer.appendChild(logoCopyright);

copyright.innerHTML = "Cristian Moran" + "- " + thisYear;
copyright.style.display = "inline";
footer.appendChild(copyright);

//this is a variable refering to the buttonContainer
var container = document.querySelector("nav button");

//skills section
const skills = [
  "JavaScript",
  "HTML5",
  "Java",
  "CSS",
  "Photoshop",
  "Canva",
  "Bilingual in English & Spanish",
  "Communication",
  "Collaboration",
  "Creativity",
  "Growth Mindset",
];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
//messagesform
const messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usersNameInput = event.target.usersMessage.value;
  const emailInput = event.target.email.value;
  const usersMessageInput = event.target.usersName.value;
  console.log(usersNameInput);
  console.log(emailInput);
  console.log(usersMessageInput);

  //messagesection
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
    <a href="mailto:${emailInput}">${usersNameInput}</a>
    <span>${usersMessageInput}</span>
  `;

  //remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "Delete";
  removeButton.type = "button";
  removeButton.classList.add("delete-button");

  removeButton.addEventListener("click", function (event) {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

//Using the Fetch API, create a "GET" request to the same GitHub API url as before
fetch("https://api.github.com/users/CristianMoran1/repos", {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (repositories) {
    // Display repositories in list
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;

      project.addEventListener("click", function () {
        window.open(repositories[i].html_url, "_blank");
      });
      projectList.appendChild(project);
    }
  })
  .catch(function (error) {
    console.error("Fetch error:", error);
  });
