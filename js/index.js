var today = new Date();
var thisYear = today.getFullYear();

var footer = document.querySelector("footer");

var copyright = document.createElement("P");

copyright.innerHTML = "Roman" + thisYear;

document.body.appendChild(copyright);

var skills = ["JavaScript", "Html", "Css", "Git"];

var skillsSection = document.getElementById("skills");

//skills section to find the <ul> element
var skillsList = skillsSection.querySelector("ul");

//loop to iterate over the skills array
for (var i = 0; i < skills.length; i++) {
  //creating a new list item li element
  var skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}




