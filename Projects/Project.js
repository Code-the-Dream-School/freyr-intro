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
 PowerButton.addEventListener('click',ButtonToggleVisibility)
