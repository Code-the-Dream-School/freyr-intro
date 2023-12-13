const today = new Date('December 12, 2023, 5:05:00');

var thisYear = today.getFullYear();
const footer = document.querySelector("#footer");
var copyright = document.createElement("p");

const copyright = document.getElementById(thisYear).innerHTML;
footer.appendChild(copyright);

const skills = [ "Java", "Python", "Javascript", "HTML", "CSS", "Microsoft Excel Level 3", "Access Level 1", "Powerpoint", "Microsoft Azure", "Tableau", "Linux"];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
