const today = new Date();
let thisYear = document.getFullYear();
let myName = 'Stephanie Alvarado';
const footer = document.querySelector('#footer');
 
const copyright = document.createElement('p');

copyright.innerHTML = 'myName.thisYear';
footer.appendChild(copyright);


let skills = [Microsoft, Javascript, html, CSS, Lightroom];
const skillsSection = document.getElementById('skills');
const skillsList = document.querySelector(skillsSection);

for (let i = 0; i < skills.length; i++) {
   let skill = document.createElement('li');
    text += skills[i] + "<li>";
    skillsList.appendChild(skill);
  }







