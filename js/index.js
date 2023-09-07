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


// 5. API - fetch projects from GitHub
const contentUrl = 'https://raw.githubusercontent.com';
const githubUser = 'pstnv';
const branch = 'main';
const projectSection = document.querySelector('#projects');
const projectList = projectSection.querySelector('ul');
// this alternate list is in index.html and display:none (it's for case if Promise returns reject)
const staticList = document.querySelector('.staticList');


// universal function both for 1st fetch(repositories) and 2nd fetch(images)
async function fetchData(url, method) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response[method]();
            return data;
        }
    } catch (error) {
        console.log('Error: ' + error.message);
        showStaticList();
    }
}


async function fetchProjects(reposUrl) {
    // 1st fetch - for all repos
    const repositories = await fetchData(reposUrl, 'json');
    const projects = repositories.map(async (repo) => {
        const { html_url: url, name } = repo;
        // 2nd fetch - for each repo fetch README.md file
        const markupText = await fetchData(`${contentUrl}/${githubUser}/${name}/${branch}/README.md`, 'text');
        // if README.md doesn't exists return
        if (!markupText) {
            return;
        }
        // looking for image in README.md text
        let imageSrc = await markupText
            .trim()
            .split('"')
            .find(string => /png|jpg|jpeg/.test(string));
        // if no image found or image path has spaces return
        if (!imageSrc || imageSrc.includes(' ')) {
            return;
        }
        // return short information for each project (only we'll be using)
        return {
            url,
            name,
            src: imageSrc
        }
    });
    return Promise.all(projects);
}

document.addEventListener('DOMContentLoaded', () => {
    // const reposUrl = `https://api.github.com/users/${githubUser}/repos`; // default link
    const reposUrl = `https://api.github.com/users/${githubUser}/repos?sort=pushed`; // extra options: sort=push,created,updated & per_page=50(default 30)

    fetchProjects(reposUrl)        
        .then(projects => {
            // filter results
            // 1st filter - filter out all undefined
            // 2st filter (optional) - filter out all projects with images located out of Github (only my preference)
            const projectsFiltered = projects
                .filter(project => project)
                .filter(project => project["src"].startsWith('src'));
            return projectsFiltered;
        })
        .then(projectsFiltered => {
            // shorten array of projects to 6
            const totalProjects = 6;
            if (projectsFiltered.length > totalProjects) {
                const projectsSliced = projectsFiltered.slice(0, totalProjects);
                return projectsSliced;
            }
            return projectsFiltered;
        })
        .then(projectsFiltered => {
            // display projects
            projectsFiltered.forEach(project => {
                const { url, name, src } = project;
                let path = '';
                if (src.startsWith('http')) {
                    path = src;
                } else {
                    path = `${contentUrl}/${githubUser}/${name}/${branch}/${src}`;
                }
                const projectItem = createProjectItem(url, name, path);
                projectList.append(projectItem);
            })
        })
        .catch((error) => {
            if (error) {
                showStaticList();
            }
        });
});

// function create li with project information
function createProjectItem(url, alt, src) {
    const projectItem = document.createElement('li');
    projectItem.classList.add('projects_card');
    projectItem.innerHTML = `
        <a href="${url}" target="_blank">
            <img src="${src}" alt="Project ${alt.split('-').join(' ')}">
        </a>            
    `;
    return projectItem;
}

function showStaticList() {
    // hide api list
    projectList.style.display = 'none';
    // show static list of projects (from index.html)
    staticList.style.display = 'flex';
}