var today = new Date();
var thisYear = today.getFullYear(); 
var footer = document.querySelector ("footer");
var copyright = document.createElement("p");
var myName = "Shu Hu";
copyright.innerHTML ="@"+ myName +" "+ thisYear;
footer.appendChild(copyright);
var skills = ["Javascript","Project Management","Copywriting","Eventplanning"];
var skillsSection = document.querySelector("#skills"); 
var skillsList = skillsSection.querySelector("ul")
for (let i = 0; i < skills.length; i++){
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForms = document.getElementsByName("leave_message")
const messageForm = messageForms[0]; 
messageForm.addEventListener('submit', function(e) {

    e.preventDefault();
  
    const name = e.target.elements["usersName"].value;
    const email = e.target.elements["usersEmail"].value;
    const userMessage = e.target.elements["usersMessage"].value;

    console.log("submitted");
    console.log("Name:",name);
    console.log("Email Address:",email);
    console.log("userMessage:", userMessage);


    const messageSection = document.getElementById("message");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    const innerHTML =`<a href="mailto:${email}">${name}</a><span>${userMessage}</span>`
    newMessage.innerHTML = innerHTML;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type ="button";
    removeButton.classList.add('red-background');
    removeButton.addEventListener('click', function(e){
      const entry = this.parentNode;
      entry.remove();

   
      



        });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

this.reset();
})





