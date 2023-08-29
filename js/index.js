const today = new Date();
let thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `Freydjne Gelin ${thisYear}`;
footer.appendChild(copyright);

let skills = [
    "Project Management", 
    "CRM Management",
    "Teleform verifier Processing",
    "Excellent Time Management skills",
    "Excellent written and verbal communication skills and interpersonal skills",
    "Data Entry"
    ];
    
    let sLen = skills.length;
    const skillsSection = document.querySelector('skills');

    const skillsList = skillsSection.querySelector('ul');

    for (let i = 0; i < sLen; i++) {
    let skill = skillsSection.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
    }

    


