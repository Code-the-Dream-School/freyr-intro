// 1. create copyright element in footer

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer .copyright');

const copyright = document.createElement('p');
copyright.innerHTML = `&copy; ${thisYear} Irina Postnova. <br> For educational purposes.`;
footer.appendChild(copyright);


// 2. create skills list

const skills = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'GSAP'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// 3. add feedback
const messageForm = document.forms["leave_message"];
const messageSection = document.querySelector('#messages');
const messageList = messageSection.querySelector('.messages_list');
const imageSrc = 'media/img/icons/message.png';
const editButtonImgSRc = 'media/img/icons/btn_edit.png';
const removeButtonImgSRc = 'media/img/icons/btn_delete.png';
const saveButtonImgSRc = 'media/img/icons/btn_save.png';


messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = messageForm.usersName.value;
    const userEmail = messageForm.usersEmail.value;
    const userMessage = messageForm.usersMessage.value;


    const newMessage = document.createElement('li');
    newMessage.classList.add('message_item');

    const messageImage = document.createElement('img');
    messageImage.classList.add('message_icon');
    messageImage.alt = 'user logo';
    messageImage.src = imageSrc;

    const messageText = document.createElement('div');
    messageText.classList.add('message_info');
    messageText.innerHTML = `
        <a class="message_link" href="mailto:${userEmail}"> <span>${userName}</span> wrote: </a>                        
        <span>${userMessage}</span>
        `;
    
    const editButton = document.createElement('button');
    editButton.name = "edit";
    editButton.classList.add('message_btn', 'message_edit');
    editButton.innerHTML = `
        <img src="${editButtonImgSRc}" alt="edit button">
    `;
    editButton.type = "button";
    
    const removeButton = document.createElement('button');
    removeButton.name = "delete";
    removeButton.classList.add('message_btn', 'message_delete');
    removeButton.innerHTML = `
        <img src="${removeButtonImgSRc}" alt="delete button">
    `;
    removeButton.type = "button";

    messageText.append(editButton);
    messageText.append(removeButton);
    newMessage.append(messageImage);
    newMessage.append(messageText);
    messageList.appendChild(newMessage);

    messageForm.reset();
});

messageList.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.parentNode.tagName !== 'BUTTON') {
        return;
    }
    const button = e.target.parentNode;
    const li = button.closest('li');
    const action = button.name;


    const nameActions = {
        edit: () => {
            const div = li.querySelector('.message_info');
            const span = div.querySelector(':scope > span');
            const input = document.createElement('textarea');
            input.type = "text";
            input.style.height = span.offsetHeight + 'px';
            input.value = span.textContent;
            div.insertBefore(input, span);
            div.removeChild(span);  
            button.name = "save";
            button.innerHTML = `
                <img src="${saveButtonImgSRc}" alt="save button">
            `;
        },
        save: () => {
            const div = li.querySelector('.message_info');
            const input = div.querySelector('textarea');
            const span = document.createElement('span');
            const editedMessage = input.value.trim();

            if (editedMessage === '') {
                nameActions['delete']();
                return;
            }
            
            span.textContent = editedMessage;
            div.insertBefore(span, input);
            div.removeChild(input);
            button.name = 'edit';
            button.innerHTML = `
                <img src="${editButtonImgSRc}" alt="save button">
            `;
        },

        delete: () => {
            li.remove();
        }
    }
    nameActions[action]();
});


/*

        edit: () => {
            const div = li.querySelector('.message_info');
            const span = div.querySelector(':scope > span');
            const input = document.createElement('input');
            input.type = "text";
            input.value = span.textContent;
            div.insertBefore(input, span);
            div.removeChild(span);  
            button.name = "save";
            button.querySelector('img').src = saveButtonImgSRc;
            button.querySelector('img').alt = "save button";
        },
        save: () => {
            const div = li.querySelector('.message_info');
            const input = div.querySelector('input');
            const span = document.createElement('span');
            const editedMessage = input.value.trim();

            if (editedMessage === '') {
                nameActions['delete']();
                return;
            }
            
            span.textContent = editedMessage;
            div.insertBefore(span, input);
            div.removeChild(input);
            button.name = 'edit';
            button.querySelector('img').src = editButtonImgSRc;
            button.querySelector('img').alt = "edit button";
        },

        */