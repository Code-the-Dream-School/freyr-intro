const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');

copyright.innerHTML = `Ron Javellana ${thisYear}`;
footer.appendChild(copyright)

const skills = ["HTML", "CSS", "Ruby", "Javascript", "SQL", "Linux", "Postman"];
const skillsList = document.querySelector('#skills').lastElementChild;

for (let i = 0; i < skills.length; i += 1) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}