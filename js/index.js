let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `${Yourname} + thisYear`;
footer.appendChild(copyright);

let skills = ['Verbal communication', 
  'Friendly', 
  'Active Listener', 
  'Fast Learner', 
  'Work well under stress']
let skillSelection = document.getElementById('skills');
let skillList = skillSelection.querySelectorAll('ul');
for(let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li');
  skill.innerText = skills[i];
  skillList.appendChild(skill);
}