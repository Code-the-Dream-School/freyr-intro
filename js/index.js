//footer
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerText = "Oleksandra Nykytenko " + thisYear;
footer.appendChild(copyright);

//skills
let skills = ["JavaScript", "HTML", "CSS", "GitHub"];
//let skillsSection = document.querySelector("#skills");
let skillsSection= document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (i = 0; i < skills.length; i++) {
   let skill=document.createElement("li");
skill.innerText=skills[i];
skillsList.appendChild(skill);
}

const messageForm=document.getElementById("leave_message");
messageForm.addEventListener('submit',  (event)=> {
event.preventDefault();
const nameValue=event.target.name.value;
const emailValue=event.target.email.value;
const messageValue=event.target.message.value;
console.log(nameValue);
console.log(emailValue);
console.log(messageValue);
const messageSection=document.getElementById("messages");
const messageList= messageSection.querySelector('ul');
const newMessage=document.createElement('li');
newMessage.innerHTML=`<a href="mailto:${emailValue}">${nameValue}</a> <span> ${messageValue} </span>`;
console.log(newMessage)
messageForm.reset()
const removeButton=document.createElement('button');
removeButton.innerText='remove';
console.log(removeButton);
removeButton.type="button";
removeButton.addEventListener('click',  (remove)=>{
    const entry=removeButton.parentNode;
    entry.remove();
})
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
})
