 
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

// for (let i = 0; i < skills.length; i ++) {
//     const skill = document.createElement('li');
//     skill.textContent = skills[i];
//     skillsList.appendChild(skill);

// };

for (let i = 0; i < skills.length; i++) {
  const skill = skills[i];
  const span = document.createElement('span');
  span.textContent = skill;
  const listItem = document.createElement('li');
  listItem.appendChild(span);
  skillsList.appendChild(listItem);
  span.classList.add('skillSpan');
}





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

        let listSize = document.querySelector('#messages ul').childElementCount;
        if (listSize === 0) {
          messagesHeader.style.display = "none";
        } else {
          messagesHeader.style.display = "";
        } 
        
    });

   
   

    messageForm.reset();
});





let githubRequest = new XMLHttpRequest();

githubRequest.open('GET', 'https://api.github.com/users/leipei92/repos');
githubRequest.send();

// githubRequest.addEventListener('load', function (e) {

//   if (githubRequest.status === 200) {
//      let repositories = JSON.parse(githubRequest.responseText);
//      console.log(repositories); //check for repos printing

//   }

// let projectSection = document.getElementById('projects');
// let projectList = projectSection.querySelector('ul');
// for ( let i= 0; i < repositories.length; i ++ ) {

//     let repository = repositories[i];
//     let projectLink= document.createElement('a');

//     projectLink.href = repository.html_url;
//     projectLink.textContent = repository.name;

//     let project = document.createElement('li');

//     projectList.appendChild(project);

// }

// });



githubRequest.addEventListener('load', function (e) {

  if (githubRequest.status === 200) {
     let repositories = JSON.parse(githubRequest.responseText);
     console.log(repositories); // check for repos printing

     let projectSection = document.getElementById('projects');
     let projectList = projectSection.querySelector('ul');
     for (let i = 0; i < repositories.length; i++) {

         let repository = repositories[i];
         let projectLink = document.createElement('a');

         projectLink.href = repository.html_url;
         projectLink.textContent = repository.name;

         let project = document.createElement('li');
         project.appendChild(projectLink); // Append the link to the list item

         projectList.appendChild(project);
     }
  }
});






