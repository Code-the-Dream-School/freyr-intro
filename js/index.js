const skills = ["Ear-training","Practical Technique","Aural-training","Music Analysis", "Historical Studies in Classical Music"];

const skillsSlection = document.getElementById("skills");

const skillsList = skillsSlection.querySelector("ul");

for (let i = 0; i < skills.length; i++){
	console.log(skills[i]);
	const skill = document.createElement("li");
	skill.textContent = skills[i];
	skillsList.appendChild(skill);
}

const today = new Date();
console.log(today);

const thisYear = today.getFullYear();
console.log(thisYear);

const footer = document.querySelector("footer");
console.log(footer);

const copyright = document.createElement("p");

copyright.innerHTML = "Chris Tang" + " " +  thisYear;

footer.appendChild(copyright);
