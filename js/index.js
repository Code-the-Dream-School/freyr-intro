const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Anne Bushey ${thisYear}`;
footer.appendChild(copyright);
const skills = ['basic JavaScript','basic HTML','basic CSS'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for(let el of skills){
    const skill = document.createElement('li');
    skill.textContent = el;
    skillsList.appendChild(skill);
}