const today = new Date();
const thisYear = today.getFullYear();
const skills = [
  {
    title: "Full-Stack Development:",
    description: "Proficient in both frontend and backend development.",
  },
  {
    title: "Frontend Frameworks:",
    description:
      "Skilled in building interactive user interfaces using modern frameworks.",
  },
  {
    title: "Backend Technologies:",
    description:
      "Experienced in developing scalable and efficient server-side solutions.",
  },
  {
    title: "Responsive Web Design:",
    description: "Ensuring seamless functionality across devices.",
  },
  {
    title: "Version Control:",
    description: "Experienced in using Git for collaborative development.",
  },
  {
    title: "Database Management:",
    description: "Familiar with working with various databases.",
  },
  {
    title: "Web Performance Optimization:",
    description: "Implementing strategies for enhanced site speed.",
  },
  {
    title: "UI/UX Principles:",
    description: "Applying design principles for intuitive user experiences.",
  },
  {
    title: "Problem-Solving:",
    description:
      "Adept at breaking down complex challenges into manageable solutions.",
  },
];

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
const author = document.querySelector(`meta[name="author"]`).content;
const skillsSelection = document.getElementById("skills");
const skillsList = skillsSelection.querySelector("ul");

copyright.textContent = `${author} © ${thisYear}`;
copyright.style["font-style"] = "italic";
footer.appendChild(copyright);

for (const item of skills) {
  const skill = document.createElement("li");
  const skillDescription = document.createElement("span");
  skillDescription.textContent = ` ${item["description"]}`;
  skill.textContent = item["title"];
  skill.style["font-weight"] = "bold";
  skillDescription.style["font-weight"] = "normal";

  skillsList.appendChild(skill).appendChild(skillDescription);
}
