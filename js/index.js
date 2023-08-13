 
 // Copyright Name and year display

 const today = new Date();
 const thisYear = today.getFullYear();

 const footer = document.querySelector('footer');
 
 const copyright = document.createElement('p');
 
 copyright.innerHTML = ` &copy;Aysa ${thisYear} `;

 footer.appendChild(copyright);




// Skills array

 const skills = [
    "HTML",
    "JavaScript",
    "UX Design",
    "CSS"

 ];

 const skillsSection = document.getElementById('skills');
 
 const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i ++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);

};



const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usersName = e.target.usersName.value;
    console.log(usersName);
    const usersEmail = e.target.usersEmail.value;
    console.log(usersEmail);
    const usersMessage= e.target.usersMessage.value;
    console.log(usersMessage);

    const messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML =  `<a href=mailto: ${usersEmail}> ${usersName}</a>
                         <span >${usersMessage}</span>`

    messageList.appendChild(newMessage);
                         
    let removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.type = 'button';

    newMessage.appendChild(removeButton);
    removeButton.addEventListener('click', (e) => {
    
        let entry = removeButton.parentNode;
        entry.remove();

        if (messageList.value) {
            messageSection.style.display = 'Messages';
         } else {
            messageSection.style.display = 'none';
         }
        
    });

   
   

    messageForm.reset();
});

