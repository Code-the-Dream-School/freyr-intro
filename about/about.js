const PowerButton = document.getElementById('Circle')
const Buttons = document.querySelectorAll('.Hidden')
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


//  function renderCopyRight(){
//     const today = new Date()
//     const thisyear = today.getFullYear()
//     const copyright = document.createElement('p');
 
//     copyright.innerHTML = `${thisyear}`
//     footer.appendChild(copyright)    
 
//  }
 
function AboutMeAnimation() {
    const aboutMe = document.getElementsByName('Animation1')[0];
    const text = aboutMe.innerText;
    console.log(text);
    aboutMe.innerText = "";
 
    function animateText(index) {
       if (index < text.length) {
          if (text[index] === ' ') {
             setTimeout(function() {
                aboutMe.innerText += ' ';
                console.log("it found the space: ", aboutMe.innerText)
                animateText(index + 1);
             }, 700);
          } else {
             aboutMe.innerText += text[index];
             setTimeout(function() {
                animateText(index + 1);
             }, 100); 
          }
       }
    }
 
    animateText(0);
 }
 window.addEventListener('DOMContentLoaded', function() {
   if (window.location.href.endsWith('about/')) {
       console.log("About page loaded!");
       
   }
});

 AboutMeAnimation()
//  renderCopyRight()
 PowerButton.addEventListener('click',ButtonToggleVisibility)
