const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = 'Tetiana ' + thisYear;
footer.appendChild(copyright);

const skills = ['Node.js', 'JavaScript', 'Cypress', 'Selenium', 'Postman', 'JAVA', 'GitHub', 'HTML', 'CSS' ];
const skillsSection = document.querySelector('[id=skills]');
const skillsList = skillsSection.querySelector('ul');
for (var i = 0; i < skills.length; i++ ){
const skill = document.createElement('li');
skill.innerHTML = skills[i];
skillsList.appendChild(skill);
}