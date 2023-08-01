// Creating Skills list
var skills = ["JavaScript", "HTML", "CSS", "DOM"]; // technical skills
const skillsSection = document.getElementById('skills'); // selecting the section with id skills
const skillsList = skillsSection.querySelector('ul');

// creating an array of skils
for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
};


// Adding copyright in the footer
const today = new Date();
const thisYear = today.getFullYear();

const containerF = document.querySelector('#containerF');
const footerContent = document.createElement('p');
const textC = `<small>&#169; Anna Gerhardt ${thisYear}</small>`;
footerContent.innerHTML = textC;
containerF.appendChild(footerContent);

