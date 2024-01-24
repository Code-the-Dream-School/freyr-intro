const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Anne Bushey ${thisYear}`;
footer.appendChild(copyright);
const skills = ['basic JavaScript','basic HTML','basic CSS'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for(let el of skills){
    const skill = document.createElement('li');
    skill.textContent = el;
    skillsList.appendChild(skill);
}
const messageSection = document.getElementById('messages');
const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;
    //console.log(usersName, usersEmail, usersMessage);
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<span id="sender"><a href="mailto:${usersEmail}">${usersName}</a> sent: </span><span id="messagecontent">${usersMessage}</span>`
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'remove';
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
        if (messageList.childElementCount < 1){
            messageSection.style.display = 'none';
            console.log(messageList.length);
        };
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageSection.style.display = 'block';
    messageForm.reset();
})
fetch('https://api.github.com/users/violet-periwinkle/repos')
    .then(response => response.json())
    .then(data => {
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul');
        for (let i = 0; i < data.length; i++) {
            const project = document.createElement('li');
            project.innerHTML = `<a href = '${data[i].html_url}'>${data[i].name}</a>`;
            projectList.appendChild(project);
        }
    });
const age = document.getElementById('age');
if(today.getMonth() < 1 || (today.getMonth() === 1 && today.getDate() < 17)){
    age.textContent = thisYear - 2000;
}else{
    age.textContent = thisYear - 1999;
}