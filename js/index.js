let today = new Date()
    let thisYear = today.getFullYear()
console.log(today)
let footer = document.querySelector('footer')
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

let messageForm = document.getElementById("leave_message")
messageForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const userName = event.target.querySelector('[name="usersName"]').value;
    const userEmail = event.target.querySelector('[name="usersEmail"]').value;
    const usersMessage = event.target.querySelector('[name="usersMessage"]').value;
    console.log(userName)
    console.log(userEmail)
    console.log(usersMessage)

    const messageSection = document.getElementById("messages")
    const messageList = messageSection.querySelector('ul')
    const newMessage = document.createElement('li')
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a><span>${usersMessage}</span>`;

    let removeButton = document.createElement('button')
    removeButton.innerText = "remove"
    removeButton.type = "button"
    removeButton.addEventListener('click', (event) => {
        let entry = event.target.parentNode;
        entry.remove();
    });
    
    newMessage.appendChild(removeButton);
    messageList.append(newMessage);

    event.target.reset()
})