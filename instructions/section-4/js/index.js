//Date

let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector('footer');

let copyright = document.createElement('p');

copyright.innerHTML = 'Your Name ' + thisYear;

footer.appendChild(copyright);

//Skills

let skills = ["HTML", "PYTHON", "JAVASCRIPT","CSS"];

let skillsSection = document.getElementById('skills');

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill= document.createElement('li');

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}

//Massages

let messageForm = document.forms.leave_message;

messageForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let userName = event.target.usersName.value;
    let userEmail = event.target.usersEmail.value;
    let userMessage = event.target.usersMessage.value;

    console.log('Name:', userName);
    console.log('Email:', userEmail);
    console.log('Message:', userMessage);

    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');

    let newMessage = document.createElement('li');
    newMessage.innerHTML = `
        <a href="mailto:${userEmail}">${userName}</a>
        <span>${userMessage}</span>
    `;

    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', function () {
        let entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});