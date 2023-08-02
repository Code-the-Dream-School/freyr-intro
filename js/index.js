//footer
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerText = "Oleksandra Nykytenko " + thisYear;
footer.appendChild(copyright);

//skills
let skills = ["JavaScript", "HTML", "CSS", "GitHub"];
//let skillsSection = document.querySelector("#skills");
let skillsSection= document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (i = 0; i < skills.length; i++) {
   let skill=document.createElement("li");
skill.innerText=skills[i];
skillsList.appendChild(skill);
}
