let today = new Date(); 
let thisYear = new Date().getFullYear(); 
let footer = document.querySelector("footer"); 
let copyright =  document.createElement("p"); 
copyright.innerHTML = "&copy; Yeni " + thisYear; 
footer.appendChild(copyright); 

let skills = ['Problem Solver', 'Team player', 'Great communicator', 
'Strong work ethic']; 
let skillsSection = document.getElementById("skills"); 
let skillsList = skillsSection.querySelector("ul"); 
for (let i = 0; i < skills.length; i += 1){
    let skill = document.createElement("li"); 
    skill.innerText = skills[i]; 
    skillsList.appendChild(skill); 
}
const messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage); 
    const messageSection =  document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul"); 
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `   
        <a href= "mailto:${usersEmail}">${usersName}</a>
        <span>${usersMessage}</span>
    ` 
    const removeButton= document.createElement("button");
    removeButton.innerText = "remove"
    removeButton.type = "button" 
    removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode
    entry.remove();    
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();  
} );   

