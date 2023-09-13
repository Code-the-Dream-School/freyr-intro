const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "Tetiana " + thisYear;
footer.appendChild(copyright);

const skills = [
  "<b>Node.js</b> - designed to build scalable network applications",
  "<b>JavaScript</b> - a scripting language used to develop web pages",
  "<b>Java</b> - a high-level, general-purpose, object-oriented, and secure programming language",
  "<b>SQL</b> - a programming language for storing and processing information in a relational database ",
  "<b>Cypress</b> - a next generation front end testing tool built for the modern web",
  "<b>Selenium</b> - an open-source, automated testing tool used to test web applications across various browsers",
  "<b>Postman</b> - an API(application programming interface) development tool which helps to build, test and modify APIs",
  "<b>ReadyAPI</b> - API testing solution to create, run, and analyze complex validation of REST, SOAP, & GraphQL APIs, JMS, JDBC, and other web services.",
  "<b>GitHub</b> - a platform for hosting code that allows for version control and collaboration.",
  "<b>HTML</b> - a markup language for the web that defines the structure of web pages",
  "<b>CSS</b> - describes how HTML elements are to be displayed on screen, paper, or in other media.",
];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message");
messageForm[0].addEventListener("submit", handleSubmit, true);
function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;
  console.log(name + " ," + email + " ," + message);
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href= "${email} " mailto:"${email}">${name} </a> <span>${message} </span>`;

  const removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.setAttribute("type", "button");
  removeButton.value = "remove";
  newMessage.appendChild(removeButton);
  messageList.append(newMessage);
  removeButton.addEventListener("click", (e) => {
    const entry = removeButton.parentNode.parentNode;
    entry.removeChild(newMessage);
  });

  messageForm[0].reset();
}

//lesson-6-1.
//const githubRequest = new XMLHttpRequest();
// githubRequest.open("GET", "https://api.github.com/users/tetianaNEC/repos");
// githubRequest.send();

// githubRequest.addEventListener("load", function (event) {
//   if (githubRequest.status === 200) {
//     let repositories = JSON.parse(githubRequest.responseText);
//     console.log(repositories);
//   }

//   let projectSection = document.getElementById("projects");

//   let projectList = projectSection.querySelector("ul");

//   for (let i = 0; i < repositories.length; i++) {
//     let repository = repositories[i];

//     let projectLink = document.createElement("a");
//     projectLink.href = repository.html_url;
//     projectLink.textContent = repository.name;

//     let project = document.createElement("li");

//     project.appendChild(projectLink);

//     projectList.appendChild(project);
//   }
// });

//lesson-6-2.

fetch("https://api.github.com/users/tetianaNEC/repos")
  .then(function (response) {
    if (response.ok) {
      return response.json();
    }
  })
  .then(function (repositories) {
    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      let repository = repositories[i];
      let projectLink = document.createElement("a");
      projectLink.href = repository.html_url;
      projectLink.textContent = repository.name;
      let project = document.createElement("li");
      project.appendChild(projectLink);
      projectList.appendChild(project);
    }
  })

  .catch((error) => {
    console.error(error);
  });
