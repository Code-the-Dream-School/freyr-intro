 
 // Copyright Name and year display

 const today = new Date();
 const thisYear = today.getFullYear();

 const footer = document.querySelector('#footer');
 
 const copyright = document.createElement('p');
 
 copyright.innerHTML = ` &copy;Aysa ${thisYear} `;

 footer.appendChild(copyright);




// Skills array

 const skills = [
    "HTML",
    "JavaScript",
    "UX Design",
    "CSS"

 ];

 const skillsSection = document.getElementById('skills');
 const skillsList = skillsSection.querySelector('ul');

for (let i = o; i < skills.length; i ++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);

};