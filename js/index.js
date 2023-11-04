today = new Date();
thisYear = today.getFullYear();

footer = document.querySelector("footer");
copyright = document.createElement("p");
copyright.innerHTML = "Thane Chaves " + thisYear;
footer.appendChild(copyright);

skills = ["strong writing and reading comprehension", "animal handling", "dog grooming", "swimming and swim instruction", "receptionist skills", "interpersonal skills", "childcare and development including specializing in children with special needs", "basic first aid training"];

skillsSection = document.getElementById("skills");
skillsList = skillsSection.querySelector("ul");

for (let i = 0; i <= skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
};