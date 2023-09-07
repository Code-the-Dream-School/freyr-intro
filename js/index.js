//QUERIES
// const footer = document.getElementById('footer');
// console.log("THIS IS FOTOER",footer)
// const messageForm = document.getElementsByName('leave_message')[0]
// const SkillsSection = document.getElementById('skills')
// const SkillsList = SkillsSection.querySelector('ul')
// const messageSection = document.getElementById('messages')
// const messageList =  messageSection.querySelector('ul')
const PowerButton = document.getElementById('Circle')
const Buttons = document.querySelectorAll('.Hidden')
console.log(Buttons)
//RENDER FUNCTIONS
// function renderCopyRight(){
//    const today = new Date()
//    const thisyear = today.getFullYear()
//    const copyright = document.createElement('p')
//    console.log("this is copyright: ", copyright)
//    copyright.innerHTML = `${thisyear}`
//    footer.appendChild(copyright)    

// }

// function renderSkills(){
//    const Skills = ["game Development","Website Developer"]

//    for(let i = 0; i<Skills.length; i++){
//       const skill = document.createElement('li')
//       skill.innerText = Skills[i]
//       SkillsList.appendChild(skill)
//    }
// }
// function AboutMeAnimation() {
//    const aboutMe = document.getElementsByName('Animation1')[0];
//    const text = aboutMe.innerText;
//    console.log(text);
//    aboutMe.innerText = "";

//    function animateText(index) {
//       if (index < text.length) {
//          if (text[index] === ' ') {
//             setTimeout(function() {
//                aboutMe.innerText += ' ';
//                console.log("it found the space: ", aboutMe.innerText)
//                animateText(index + 1);
//             }, 700);
//          } else {
//             aboutMe.innerText += text[index];
//             setTimeout(function() {
//                animateText(index + 1);
//             }, 100); 
//          }
//       }
//    }

//    animateText(0);
// }

// Call the animation function



//EVENT HANDLERS

// function deleteMessage(event){
//    let removebutton = event.target
//    let message = removebutton.parentNode

//    // don't remove only the button, but remove the entire message
//    message.remove()
   
// }
// function submit(event){
//    //prevent it from refreshing the whole page 
//    event.preventDefault()

//    const Name = event.target.usersName.value
//    const Email = event.target.usersEmail.value
//    const usersMessage = event.target.usersMessage.value
//    const newMessage = document.createElement('li')
//    newMessage.innerHTML = `<a href = "mailto:${Email}"> ${Name}</a> <span>${Email} ${usersMessage}</span> `
//    //clear all inputs
//    event.target.reset()
   
//    //REMOVE BUTTON FOR MESSAGES
//    const removebutton = document.createElement('button')
//          console.log(removebutton)
//    removebutton.innerHTML = "remove"
//    removebutton.setAttribute("type","button")
   
   

//    console.log("RemoveButton",removebutton)
//    console.log("Messages",messages)
//    //TODO can't access null messages, it's inside the handler
//    newMessage.appendChild(removebutton)
//    removebutton.addEventListener("click",deleteMessage)
//    messageList.appendChild(newMessage)
// }
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
// messageForm.addEventListener("submit",submit)
PowerButton.addEventListener('click',ButtonToggleVisibility)





