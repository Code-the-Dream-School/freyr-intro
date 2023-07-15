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
    newMessage.messageText = userMessage;

    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";

    const editButton = document.createElement('button');
    editButton.innerText = "edit";
    editButton.type = "button";


    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageSection.show();

    form.reset();
});

messageList.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
        return;
    }
    const button = e.target;
    const listButtons = messageList.querySelectorAll('button');
    const li = button.parentNode;
    const messageText = li.messageText;
    const action = button.textContent;

    const disableButton = (btn) => {
        if (btn.parentNode !== li) {
            btn.disabled = true;
        }
    };
    const enableButton = (btn) => btn.disabled = false;
    const switchButtons = (buttons, switcher) => {
        buttons.forEach(button => switcher(button));
    }

    const nameActions = {
        edit: () => {
            switchButtons(listButtons, disableButton);
            const span = li.querySelector('span');
            const input = document.createElement('input');
            input.type = "text";
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent = 'save';
        },
        save: () => {
            const input = li.querySelector('input');
            const span = document.createElement('span');
            const editedMessage = input.value.trim();

            if (editedMessage === '') {
                const isConfirmedDeleting = confirm('Delete message?');
                if (isConfirmedDeleting) {
                    nameActions['remove']();
                } else {
                    input.value = messageText;
                }
                return;
            }

            switchButtons(listButtons, enableButton);
            span.textContent = editedMessage || messageText;
            li.insertBefore(span, input);
            li.removeChild(input);
            li.messageText = span.textContent;
            button.textContent = 'edit';            
        },
        remove: () => {
            li.remove();
            switchButtons(listButtons, enableButton);
            updateMessageSection();
        }
    }
    nameActions[action]();
});