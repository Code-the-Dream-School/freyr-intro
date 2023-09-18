const today = new Date('2023-08-21');
let thisYear = today.getFullYear();
const footer = document.querySelector("footer");
 
const copyright = document.createElement("p");
copyright.innerHTML = "Stephanie Alvarado" + ' ' + thisYear;
footer.appendChild(copyright);

// Skills Section 
let skills = ['Microsoft Office', 'Javascript', 'html', 'CSS', 'Lightroom'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
   let skill = document.createElement('li');
   skill.innerText = (skills[i]);
    skillsList.appendChild(skill);
    console.log(skills);
  } 
  
// Leave a Message
  let messageForm = document.getElementsByName("leave_message");

  document.addEventListener("submit", myFunction);
  
  function myFunction(event) {

    event.preventDefault();
    let usersName = event.target.usersName;
    let usersEmail = event.target.usersEmail;
    let usersMessage = event.target.usersMessage;
    console.log(event);


    let messageSection = document.getElementById('#messages');
    let messageList = messageSection.querySelector(".<ul>");
    let newMessage = document.createElement('li');
    newMessage.innerHTML = '<a>' + usersEmail + '<span>' + usersMessage;

    let removeButton = document.createElement('<button>');
    removeButton.innerText = "Remove";
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener("click", function2);

    function function2(){
      let entry = removeButton.parentNode;
      entry.removeChild();
      removeButton.appendChild(newMessage);
      newMessage.appendChild(messageList);
    }
    document.getElementById("submit").reset();
  }

  // 6.1
//let githubRequest= new XMLHttpRequest();
//githubRequest.open('GET', "https://api.github.com/users/{StephAlvarado}/repos");
//githubRequest.send();

// did I add the correct link to open?

//githubRequest.addEventListener('load', (event) =>{
//let repositories = JSON.parse(githubRequest.response);
//console.log(repositories);
//});

//don't know ig I'm doing JSON.parse correctly



//question about parse and event listener 



// Fetch Data 6.2
fetch('https://api.github.com/users/StephAlvarado/repos')
  .then(response => {
    if(response.ok){
      return response.json();
    } else{
      throw new Error('Failed data Fetch from GitHub Api');
    }
  })

 .then(repositories => {
  console.log(repositories);

  //const repositories = JSON.parse(this.response);
  const projectSection = document.getElementById('projects');
  const projectlist = projectSection.querySelector("ul");
  

  for (let i = 0; i < repositories.length; i++) {
    let GitRepository = repositories[i];
    let LinkProject = document.createElement('a');
    LinkProject.href = GitRepository.html_url;
    LinkProject.textContent = GitRepository.name;

    let project = document.createElement('li');
    project.appendChild(LinkProject);
    projectlist.appendChild(project);
   }
  })
 

   .catch(error => {
    console.error("Error fetching data:", error);
});


  

