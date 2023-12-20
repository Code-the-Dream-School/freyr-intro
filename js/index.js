let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `Nicoleta Nastase &copy ${thisYear}`;
footer.appendChild(copyright);

//let experience = ['Massage Therepist - Self Employed',
//'May 2007 to January 2015',
//'Spa Therapist and health club assistant - Holliday Inn',
//'January 2015 to September 2015',
//'Massage Therapist - Le Masseur Personnel',
//'September 2015 to February 2018']
//let experienceSelection = document.getElementById('experience');
//let experienceList = experienceSelection.querySelector('ol');
//for(let y = 0; y < experience.length; y++) {
  //let experience = document.createElement('li');
  //experience.innerText = experience[y];
  //experienceList.appendChild(experience);
//}

let skills = ['Verbal communication', 
  'Friendly', 
  'Active Listener', 
  'Fast Learner', 
  'Work well under stress']
let skillSelection = document.getElementById('skills');
let skillList = skillSelection.querySelector('ul');
for(let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li');
  skill.innerText = skills[i];
  skillList.appendChild(skill);
}

const messageForm  = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener ('submit', (e) => {
  e.preventDefault();
  const name = e.target.usersName.value;
  const email =  e.target.usersEmail.value;
  const message =  e.target.usersMessage.value;
  console.log(name, email, message);
  messageForm.reset();

  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul'); 
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
  <span >${message}</span>`
  

  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = "button";
  removeButton.addEventListener ('click', (e) => {
    const entry = removeButton.parentNode;
    entry.remove();
 
  })
  newMessage.appendChild(removeButton)
  messageList.appendChild(newMessage)
})