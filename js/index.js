let today = new Date();
let thisYear = today.getFullYear();
console.log(thisYear);

const footer = document.querySelector("footer");

const myName = "Krista Zaloudek";

const copyright = document.createElement("p");

copyright.innerHTML = `${myName} &copy ${thisYear}`;

footer.appendChild(copyright);

let skills = [
  "html",
  "javascript",
  "business analysis",
  "user acceptance testing",
  "manual testing",
];

let skillsSection = document.getElementById("skills");

let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
