let today = new Date()
let thisyear = today.getFullYear()
const footer = document.getElementById('footer');
 console.log(footer)
// const copyright = document.createElement("p");
// // console.log("this is the copyright",copyright)
// copyright.innerHTML = ` Oksana Feterovskaya &copy ${thisyear}`;
console.log("This is the footer",footer)
const copyright = document.createElement('p');
 console.log("This is the",copyright)
            copyright.innerHTML = `${thisyear}`
            footer.appendChild(copyright)    
     let Skills = ["game Development","Website Developer"]
    let SkillsSection = document.getElementById('skills')
    let SkillsList = SkillsSection.querySelector('ul')
    for(let i = 0; i<Skills.length; i++){
       let skill = document.createElement('li')
         skill.innerText = Skills[i]
        SkillsList.appendChild(skill)
     }