const PowerButton = document.getElementById('Circle')
const Buttons = document.querySelectorAll('.Hidden')
const GamesTab = document.getElementById("GameDevelopmentExp")
const DataTab = document.getElementById("DataHead")
const LanguageTab = document.getElementById("ProgrammingLanguages")
const WebTab = document.getElementById("WebDevelopment")
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
//  
function ToggleGame(){
      const GameList = document.getElementById("GameList")
      GameList.classList.toggle("Hidden")  
      const DataSkills = document.getElementById('DataSkills')
      DataSkills.classList.add("Hidden")
      const Coding_Languages = document.getElementById("Coding_Languages")
      Coding_Languages.classList.add("Hidden")
      const WebSkills = document.getElementById("WebSkills")
      WebSkills.classList.add("Hidden")
}
function ToggleData(){
  const DataSkills = document.getElementById('DataSkills')
    DataSkills.classList.toggle("Hidden")
    const GameList = document.getElementById("GameList")
   GameList.classList.add("Hidden")
    const Coding_Languages = document.getElementById("Coding_Languages")
    Coding_Languages.classList.add("Hidden")
    const WebSkills = document.getElementById("WebSkills")
    WebSkills.classList.add("Hidden")

}
function ToggleLanguage(){
 const Coding_Languages = document.getElementById("Coding_Languages")
   Coding_Languages.classList.toggle("Hidden")
   const GameList = document.getElementById("GameList")
   GameList.classList.add("Hidden")
   const WebSkills = document.getElementById("WebSkills")
   WebSkills.classList.add("Hidden")
   const DataSkills = document.getElementById('DataSkills')
      DataSkills.classList.add("Hidden")

}
function ToggleWeb(){
const WebSkills = document.getElementById("WebSkills")
   WebSkills.classList.toggle("Hidden")
   const Coding_Languages = document.getElementById("Coding_Languages")
   Coding_Languages.classList.add("Hidden")
   const DataSkills = document.getElementById('DataSkills')
   DataSkills.classList.add("Hidden")
   const GameList = document.getElementById("GameList")
   GameList.classList.add("Hidden")


}
function ExperienceColor(){
 
}

 AboutMeAnimation()
//  renderCopyRight()
 PowerButton.addEventListener('click',ButtonToggleVisibility)
 GamesTab.addEventListener('click',ToggleGame)
 DataTab.addEventListener('click',ToggleData)
 LanguageTab.addEventListener('click',ToggleLanguage)
 WebTab.addEventListener('click',ToggleWeb)
