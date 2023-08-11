// Creating Skills list
var skills = ["JavaScript", "HTML", "CSS", "DOM"]; // technical skills
const skillsSection = document.getElementById('skills'); // selecting the section with id skills
const skillsList = skillsSection.querySelector('ul');

// Creating an array of skils
for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
};


// Email form handeling
const messageForm = document.getElementsByName('leaveMessege')[0];
messageForm.addEventListener('submit', (event) =>{
    event.preventDefault(); 
   // grabing data from the form
    const usersName = event.target.userName.value;
    const usersEmail = event.target.userEmail.value;
    const userMessage = event.target.userMessage.value;

    console.log(usersName, usersEmail, userMessage);

    // Selection for the Messages List
    const messageSection = document.getElementById('message');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    
    // Output on the page the user's message
    newMessage.innerHTML =`<a href="mailto:${usersEmail}">${usersName}: </a> wrote:  <span>${userMessage}</span> `
    
    // Remove button creation and handling
    const removeButton = document.createElement('button')
    removeButton.innerHTML = 'remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', (event) => {
        //messageList.removeChild(newMessage);
        const entry = removeButton.parentNode;
        entry.remove(); 
     });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();
});


// Adding copyright in the footer
const today = new Date();
const thisYear = today.getFullYear();

const containerF = document.querySelector('#containerF');
const footerContent = document.createElement('p');
const textC = `<small>&#169; Anna Gerhardt ${thisYear}</small>`;
footerContent.innerHTML = textC;
containerF.appendChild(footerContent);
