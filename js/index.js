let today = new Date(); 
let thisYear = new Date().getFullYear(); 
let footer = document.querySelector("footer"); 
let copyright =  document.createElement("p"); 
copyright.innerHTML = "Yeni " + thisYear; 
footer.appendChild(copyright); 
let skills = ['Problem Solver', 'Team player', 'Great communicator', 
'Strong work ethic']; 
let skillsSection = document.getElementById("skills"); 
let skillsList = skillsSection.querySelector("ul"); 
for (let i = 0; i < skills.length; i += 1){
    let skill = document.createElement("li"); 
    skill.innerText = skills[i]; 
    skillsList.appendChild(skill); 
}