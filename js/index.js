const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = 'Gilbert Pascascio, ' + thisYear;

footer.appendChild(copyright);

let skills = ['JavaScript', 'HTML', 'CSS'];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
let skill = document.createElement('li');
skill.innerHTML = skills[i];
skillsList.appendChild(skill);

}