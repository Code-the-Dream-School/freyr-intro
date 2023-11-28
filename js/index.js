var today = new Date();
var thisYear = today.getFullYear(); 
var footer = document.querySelector ("footer");
var copyright = document.createElement("p");
var myName = "Shu Hu";
copyright.innerHTML ="@"+ myName +" "+ thisYear;
footer.appendChild(copyright);
var skills = ["Javascript","Project Management","Copywriting","Eventplanning"];
var skillsSection = document.querySelector("#skills"); 
var skillsList = skillsSection.querySelector("ul")
for (let i = 0; i < skills.length; i++){
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}