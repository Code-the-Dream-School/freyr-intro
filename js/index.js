const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `&copy; Ron Javellana ${thisYear}`;
footer.appendChild(copyright);

const skills = ["HTML", "CSS", "Ruby", "Javascript", "SQL", "Linux", "Postman"];
const skillsList = document.querySelector('#skills .skill_list');

for (let i = 0; i < skills.length; i += 1) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

const projectList  = document.querySelector('#projects ul');
const messageForm = document.querySelector("[name=leave_message]");
const messagesHeader = document.querySelector("#messages");

messagesHeader.style.display = "none";

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let listSize = document.querySelector('#messages ul').childElementCount;
    let userName = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;
    
    console.log(userName, email, message);
    
    let messageList = document.querySelector('#messages ul');
    let newMessage = document.createElement('li');
    
    newMessage.innerHTML = `<a href="mailto:${email}">${userName}</a><span> wrote: ${message} </span>`;
    
    let removeButton = document.createElement("button");
    let editButton = document.createElement("button");
    
    removeButton.innerText = "remove";
    editButton.innerText = "edit";
    
    removeButton.setAttribute("type", "button");
    editButton.setAttribute("type", "button");
    removeButton.classList.add("message-buttons");
    editButton.classList.add("message-buttons");
    
    removeButton.addEventListener("click", (event) => {
        let entry = removeButton.parentNode;
        entry.remove();
        
        if (listSize === 0) {
            messagesHeader.style.display = "none";
        } else {
            messagesHeader.style.display = "";
        }
    });
    
    editButton.addEventListener("click", (event) => {
        let span = editButton.previousSibling;
        let editText = span.innerText;
        let newText = prompt("Edit message: ", editText.slice(7, editText.length - 1));
        span.innerText = " wrote: " + newText + " ";
    });
    
    messagesHeader.style.display = "";
    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});

fetch('https://api.github.com/users/Ronapj1991/repos')
    .then(handleErrors)
    .then( response => response.json() )
    .then( repositories => {
        for (let i = 0; i < repositories.length; i += 1) {
            let project = document.createElement("li");
            project.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a>`;
            projectList.appendChild(project);
        }
    })
    .catch(error => {
        let project = document.createElement("p");
        project.innerHTML = `<i class="fa-duotone fa-spinner fa-spin fa"></i> ${error}`;
        projectList.appendChild(project);
    });

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.status);
}
    return response;
}