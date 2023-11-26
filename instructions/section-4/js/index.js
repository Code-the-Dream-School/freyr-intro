let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector('footer');

let copyright = document.createElement('p');

copyright.innerHTML = 'Your Name ' + thisYear;

footer.appendChild(copyright);

let skills = ["HTML", "PYTHON", "JAVASCRIPT","CSS"];

let skillsSection = document.getElementById('skills');

let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill= document.createElement('li');

    skill.innerText = skills[i];

    skillsList.appendChild(skill);
}