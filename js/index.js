const today = new Date('2023-08-21');
let thisYear = document.getFullYear();
const footer = document.querySelector(".<footer>");
 
const copyright = document.createElement("p");
copyright.innerHTML = "Stephanie Alvarado" + thisYear;
document.footer.appendChild(copyright);


let skills = [Microsoft, Javascript, html, CSS, Lightroom];
const skillsSection = document.getElementById('skills');
const skillsList = document.skillsSection.querySelector('.<ul>');

for (let i = 0; i < skills.length; i++) {
   let skill = document.createElement('li');
   document.innerText += skills[i] + "<li>";
    skillsList.appendChild(skill);
    
  }







