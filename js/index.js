//QUERIES
const footer = document.getElementById('footer');
const messageForm = document.getElementsByName('leave_message')[0]
const SkillsSection = document.getElementById('skills')
const SkillsList = SkillsSection.querySelector('ul')
const messageSection = document.getElementById('messages')
const messageList =  messageSection.querySelector('ul')


//RENDER FUNCTIONS
function renderCopyRight(){
   const today = new Date()
   const thisyear = today.getFullYear()
   const copyright = document.createElement('p');

   copyright.innerHTML = `${thisyear}`
   footer.appendChild(copyright)    

}

function renderSkills(){
   const Skills = ["game Development","Website Developer"]

   for(let i = 0; i<Skills.length; i++){
      const skill = document.createElement('li')
      skill.innerText = Skills[i]
      SkillsList.appendChild(skill)
   }
}


//EVENT HANDLERS

function deleteMessage(event){
   let removebutton = event.target
   let message = removebutton.parentNode

   // don't remove only the button, but remove the entire message
   message.remove()
   
}

function submit(event){
   //prevent it from refreshing the whole page 
   event.preventDefault()

   const Name = event.target.usersName.value
   const Email = event.target.usersEmail.value
   const usersMessage = event.target.usersMessage.value
   const newMessage = document.createElement('li')
   newMessage.innerHTML = `<a href = "mailto:${Email}"> ${Name}</a> <span>${Email} ${usersMessage}</span> `
   //clear all inputs
   event.target.reset()
   
   //REMOVE BUTTON FOR MESSAGES
   const removebutton = document.createElement('button')
         console.log(removebutton)
   removebutton.innerHTML = "remove"
   removebutton.setAttribute("type","button")
   
   

   console.log("RemoveButton",removebutton)
   console.log("Messages",messages)
   //TODO can't access null messages, it's inside the handler
   newMessage.appendChild(removebutton)
   removebutton.addEventListener("click",deleteMessage)
   messageList.appendChild(newMessage)
}


//LOADINGPAGE
renderCopyRight()
renderSkills()
messageForm.addEventListener("submit",submit)



// //REMOVE BUTTON FOR MESSAGES
// const removebutton = document.createElement('button')

// removebutton.innerHTML = "remove"
// removebutton.setAttribute("type","button"
// )
// const messages = document.getElementById("Inbox")

// console.log("RemoveButton",removebutton)
// console.log("Messages",messages)
// //TODO can't access null messages, it's inside the handler
// messages.appendChild(removebutton)
// removebutton.addEventListener("click",entry)
