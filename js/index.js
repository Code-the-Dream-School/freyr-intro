let today = new Date()
    let thisYear = today.getFullYear()
console.log(today)
let footer = document. querySelector('footer')
let copyright = document.createElement('p')
copyright.innerHTML = `Your name ${thisYear}`
footer.appendChild(copyright)

let skills = [ 'HTML','CSS', 'JavaScript','frameworks', 'React']

let skillsSection = document.getElementById('skills')
let skillsList = skillsSection.querySelector('ul')
for ( let i = 0; i < skills.length; i++){
    let skill = document.createElement('li')
     skill.innerText = skills[i]
     skillsList.appendChild(skill)
}