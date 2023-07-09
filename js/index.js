const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} Irina Postnova`;
footer.appendChild(copyright);


const skills = ['HTML', 'CSS', 'JavaScript'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}


const messageForm = document.querySelector('form[name="leave_message"]');
const messageSection = document.querySelector('#messages');
const messageList = messageSection.querySelector('ul');

messageSection.hide = function () {
    this.style.display = 'none';
};
messageSection.show = function () {
    this.style.display = '';
};

Object.defineProperty(messageList, "hasNoMessages", {
    get: function () {
        return this.childElementCount === 0
    }
});

function updateMessageSection() {
    if (messageList.hasNoMessages) {
        messageSection.hide();
    }
};
updateMessageSection();


messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;

    const userName = form.usersName.value;
    const useEmail = form.usersEmail.value;
    const userMessage = form.usersMessage.value;

    // console.log(userName);
    // console.log(useEmail);
    // console.log(userMessage);

    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
        <a href="mailto:${useEmail}" target="_blank">${userName}</a>
        wrote: <span> ${userMessage}</span>
    `;

    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageSection.show();

    form.reset();
});

messageList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        const li = button.parentNode;
        const action = button.textContent;

        const nameActions = {
            remove: () => {
                li.remove();
                updateMessageSection();
            }
        }
        nameActions[action]();
    }
});