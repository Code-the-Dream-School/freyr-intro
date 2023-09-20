//QUERIES
const footer = document.getElementById('footer');
console.log("THIS IS FOTOER",footer)
const messageForm = document.getElementsByName('leave_message')[0]
console.log("This is the messageForm,",document.getElementsByName('leave_message')[0])
const SubmitButton = document.getElementById("Submit")
console.log("This is the submit Button",SubmitButton)
const messageSection = document.getElementById('messages')
const messageList =  messageSection.querySelector('ul')
const PowerButton = document.getElementById('Circle')
const Buttons = document.querySelectorAll('.Hidden')
let Messageid = 1
function deleteMessage(event){
   let removebutton = event.target
   let message = removebutton.parentNode

   // don't remove only the button, but remove the entire message
   message.remove()
   
}

function submit(event){
   console.log("I submitted it!")
   //prevent it from refreshing the whole page 
   event.preventDefault()

   const Name = event.target.usersName.value
   const Email = event.target.usersEmail.value
   const usersMessage = event.target.usersMessage.value
   console.log("This is the Name", Name,"This is the email", Email,"This is the usersMessage", usersMessage)
   const newMessage = document.createElement('li')
   newMessage.innerHTML = `Name: ${Name} Email: ${Email} Message: ${usersMessage}</span> `
   //clear all inputs

   
   //REMOVE BUTTON FOR MESSAGES
   const removebutton = document.createElement('button')
         console.log("This is the remove button: ",removebutton)
   removebutton.innerHTML = "remove"
   removebutton.setAttribute("type","button")
   console.log("RemoveButton",removebutton)
   console.log("Messages",messages)
   //TODO can't access null messages, it's inside the handler
   newMessage.appendChild(removebutton)
   removebutton.addEventListener("click",deleteMessage)
   newMessage.setAttribute("id",`message_${Messageid++}`)
   
   newMessage.setAttribute("class","newMesseges")
   messageList.appendChild(newMessage)
   event.target.reset()
}

function ButtonToggleVisibility() {
   console.log("it clicked");
   // Select all elements with the class "Hidden"
   const Home = document.getElementById("Home")
   Home.classList.toggle("Hidden")
   const Projects = document.getElementById("Projects")
   Projects.classList.toggle("Hidden")
   const Contact = document.getElementById('Contact')
   Contact.classList.toggle("Hidden")
   const About = document.getElementById("AboutMe")
   About.classList.toggle("Hidden")
}

window.addEventListener('DOMContentLoaded', function() {
   if (window.location.href.endsWith('about/')) {
       console.log("About page loaded!");
       
   }
});
//LOADINGPAGE
// renderCopyRight()
// renderSkills()
// AboutMeAnimation()
messageForm.addEventListener("submit",submit)
PowerButton.addEventListener('click',ButtonToggleVisibility)





