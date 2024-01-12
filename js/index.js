  (() => {
    // CHALLENGE 1. Insert Copyright Text in Footer
    // --------------------------------------------------------------
    const renderCopyright = () => {
      const today = new Date()
      const thisYear = today.getFullYear()

      // DOM selection
      const copyright = document.querySelector('#copyright')

      // DOM manipulation (modify)
      copyright.innerHTML = `&copy; Nicoleta Nastase ${thisYear}`
    }

  //challenge 2. create List of Skills
  let skills = ['Verbal communication', 
    'Friendly', 
    'Active Listener', 
    'Fast Learner', 
    'Work well under stress']
  //let skillSelection = document.getElementById('skills');
  //let skillList = skillSelection.querySelector('ul');
  const skillSelection =document.querySelector('#skills');
  const skillList = skillSelection.querySelector('ul');
  for(let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.classList.add('tag');
    skill.innerText = skills[i];
    skillList.appendChild(skill);
  }



  // CHALLENGE 3. Register Message Form
  const messageForm  = document.querySelector('form[name="leave_message"]');

  messageForm.addEventListener ('submit', (e) => {
    e.preventDefault();
    const now = new Date();
    const name = e.target.name.value;
    const email =  e.target.email.value;
    const message =  e.target.message.value;
    //console.log(name, email, message);
   messageForm.reset();
  
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul'); 
    if (messageSection.style.display === 'none') {
      messageSection.style.display = 'block'
       }
    const newMessage = document.createElement('li');
    newMessage.classList.add('list__item');
    newMessage.innerHTML = ` <div> 
    <span class="strong">${message}</span>
    <p>${now.toLocaleString()} from <a class="link" href="mailto:${
    email}">${name}</a> &nbsp;</p>
  </div>`


  
    


    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = "button";
    removeButton.classList.add('button', 'button--danger');
    removeButton.addEventListener ('click', (e) => {
    //const entry = removeButton.parentNode;
    const entry = e.target.parentNode;
    const list = entry.parentNode;
    entry.remove();
   
    })
    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)
    //messageList.prepend(newMessage)
    e.target.reset()
  
  })
  
 
  // Challenge 4. create the XMLHttpRequest
   
  var githubRequest = new XMLHttpRequest();
  githubRequest.open('GET', 'https://api.github.com/users/nicole3891/repos');
  githubRequest.send();
  githubRequest.addEventListener("load", function () {
   
    var repositories = JSON.parse(this.response);
    console.log(this.response)
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');
    //projectList.classList.add('link')
       
for (let i = 0; i < repositories.length; i ++) {
  const project = document.createElement('li');
  var a = document.createElement('a');
  a.href = repositories[i].html_url;
  a.textContent = repositories[i].name;
  a.classList.add('link');
  a.classList.add('link--no-color');
  
  project.appendChild(a)
  //project.innerHTML = a;
  projectList.appendChild(project);
 }

    
});

  
  
    document.addEventListener('DOMContentLoaded', () => {
      renderCopyright();
      //renderSkillsList()
      //messageForm()
      //projectsWithXHR()
    });
}) ();
