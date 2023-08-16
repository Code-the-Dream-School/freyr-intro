// opt-1. set scroll-margin-top for sections

// const header = document.querySelector('header');
// const headerNav = document.querySelector('#headerNav');
// headerNav.addEventListener('click', (e) => {
//     const link = e.target;
//     if (link.tagName === 'A' && link.hash) {
//         const section = document.querySelector(link.hash);
//         section.style.scrollMarginTop = header.offsetHeight + 'px';
//     }
// });


// opt-2. prevent default behavior and use scrollTo
// const header = document.querySelector('header');
// const headerNav = document.querySelector('#headerNav');
// headerNav.addEventListener('click', (e) => {
//     e.preventDefault();
//     const linkID = e.target.hash || e.target.closest('a').hash ;
//     console.log(linkID)
//     if (linkID) {
//         const section = document.querySelector(linkID);
//         const sectionOffset = section.offsetTop;
//         const headerHeight = header.clientHeight;
//         document.documentElement.scrollTo({
//             top: sectionOffset - headerHeight,
//             behavior: 'smooth'
//         });
//     }
// });


// 1. create copyright element in footer

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer .copyright');

const copyright = document.createElement('p');
copyright.innerHTML =   `<div>&copy; ${thisYear} Irina Postnova.</div>
                        <div>For educational purposes.</div>`;
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
const editButtonImgSrc = 'media/img/icons/btn_edit.png';
const removeButtonImgSrc = 'media/img/icons/btn_delete.png';
const saveButtonImgSrc = 'media/img/icons/btn_save.png';


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
        <img src="${editButtonImgSrc}" alt="edit button">
    `;
    editButton.type = "button";
    
    const removeButton = document.createElement('button');
    removeButton.name = "delete";
    removeButton.classList.add('message_btn', 'message_delete');
    removeButton.innerHTML = `
        <img src="${removeButtonImgSrc}" alt="delete button">
    `;
    removeButton.type = "button";

    messageText.append(editButton);
    messageText.append(removeButton);
    newMessage.append(messageImage);
    newMessage.append(messageText);
    messageList.appendChild(newMessage);

    messageForm.reset();
});

// 4. add edit, save, remove for message list
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
                <img src="${saveButtonImgSrc}" alt="save button">
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
                <img src="${editButtonImgSrc}" alt="save button">
            `;
        },

        delete: () => {
            li.remove();
        }
    }
    nameActions[action]();
});


// 5. API - fetch projects from GitHub with XMLHttpRequest (Lesson 6.1)

document.addEventListener('DOMContentLoaded', () => {
    const githubUser = 'pstnv';
    const reposUrl = `https://api.github.com/users/${githubUser}/repos`;
    const projectSection = document.querySelector('#projects');
    const projectList = projectSection.querySelector('ul');
    
    const githubRequest = new XMLHttpRequest();
    githubRequest.addEventListener('load', () => {
        if (githubRequest.status !== 200) {
            return;
        }
        const response = githubRequest.responseText;
        const repositories = JSON.parse(response);
        // console.log(repositories);
        repositories.forEach(repo => {
            const projectItem = createProjectItem(repo);
            projectList.append(projectItem);
        });
    });
    githubRequest.addEventListener('error', (e) => {
        const rejectMessageItem = createRejectMessage();
        projectList.append(rejectMessageItem);
    });

    githubRequest.open('GET', reposUrl);
    githubRequest.send();
});

function createProjectItem(project) {
    let { html_url: url, name } = project;
    ['app-', 'html-', 'js-'].forEach(prefix => {
        if (name.startsWith(prefix)) {
            name = name.replace(prefix, '');
        }
    });
    name = name[0].toUpperCase() + name.slice(1);
    name = name
            .split('-')
            .join(' ');
    const projectItem = document.createElement('li');
    projectItem.classList.add('projects_card');
    projectItem.innerHTML = `
        <a href="${url}" target="_blank"> ${name} </a>            
    `;
    return projectItem;
}

function createRejectMessage() {
    rejectMessageItem = document.createElement('li');
    rejectMessageItem.classList.add('projects_card');
    rejectMessageItem.innerText = 'Try again later...';
    return rejectMessageItem;
}