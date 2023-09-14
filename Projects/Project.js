const PowerButton = document.getElementById('Circle')
const ROBLOXHEADER = document.getElementById("ROBLOX")
// const UnityHeader = document.getElementById("Unity")
const GitHubHeader = document.getElementById("ProjectGitHeader")
console.log("This is", GitHubHeader)
const WebsiteHeader = document.getElementById("WebsiteHeader")
console.log("This is", WebsiteHeader)
const Programheader = document.getElementById("ProgramHeader")
console.log("this is,",Programheader)
const Games = document.getElementById("GamesButton")
console.log("This is", Games)
const RobloxTab = document.getElementById("RobloxTab")
console.log("This is", RobloxTab)
var githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/canilo1/repos");
console.log(githubRequest)
var repositories; // Declare the repositories variable in a higher scope

var githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/canilo1/repos");

// Set up an event listener for the 'load' event
githubRequest.addEventListener('load', function (event) {
  // Check if the request was successful (status code 200)
  if (githubRequest.status === 200) {
    // Parse the response and store it in the 'repositories' variable
    repositories = JSON.parse(this.responseText);
    
    // Log the value of 'repositories' in the console
    console.log("repo:", repositories);

    // Now you can access the 'repositories' variable outside this function
 
    var projectSection = document.getElementById("GithubProjects");
    console.log("This is the project section", projectSection)
    const projectList = projectSection.querySelector("ul");
    
    console.log("This is the project: ", projectList)
    for (let i = 0; i < repositories.length; i++) {
      console.log("This is i", i, "This is the current repository", repositories[i], "Finally, this is the repositories length", repositories.length);
      console.log(repositories[i].name)
      var project = document.createElement("li")
        project.innerText = repositories[i].name
        projectList.appendChild(project)
    }
   
  } else {
    // Handle any errors or non-200 status codes here
    console.error('Error: Request failed with status', githubRequest.status);
  }
});

githubRequest.send();

function ButtonToggleVisibility() {
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
function ToggleRoblox(){
    console.log("they clicked4")
    console.log("Clicked it!")
    const ROBLOX = document.getElementById("ROBLOX")
    console.log("This is roblox", ROBLOX)
    ROBLOX.style.opacity = 1 
    console.log("Roblox's opacity is: ",  ROBLOX.style.opacity)
    const Website = document.getElementById('WebsiteInterface')
    Website.style.opacity = 0
    const Programs = document.getElementById("ProgramsInterface")
    Programs.style.opacity = 0
}
function ToggleWebsite() {
    console.log("Clicked Website!");
    // Hide other sections
    const ROBLOX = document.getElementById("ROBLOX");
    ROBLOX.style.opacity = 0
    const Programs = document.getElementById("ProgramsInterface");
    Programs.style.opacity = 0
    // Show the Website section
    const Website = document.getElementById('WebsiteInterface');
    Website.style.opacity = 1
}

function ToggleProject(){
    console.log("they clicked2")
    const ROBLOX = document.getElementById("ROBLOX")
    ROBLOX.style.opacity = 0
    const Website = document.getElementById('WebsiteInterface')
    Website.style.opacity = 0
    const Programs = document.getElementById("ProgramsInterface")
    Programs.style.opacity = 0
}
function ToggleProjectGit(){
    console.log("they clicked!")
    const ROBLOX = document.getElementById("ROBLOX")
    ROBLOX.style.opacity = 0
    const Website = document.getElementById('WebsiteInterface')
    Website.style.opacity = 0
    const Programs = document.getElementById("ProgramsInterface")
    Programs.style.opacity = 0
    
}
function ToggleProgramheader(){
    console.log("they clicked5")
    const ROBLOX = document.getElementById("ROBLOX")
    ROBLOX.style.opacity = 0
    const Website = document.getElementById('WebsiteInterface')
    Website.style.opacity = 0
    const Programs = document.getElementById("ProgramsInterface")
   Programs.style.opacity = 1 
}
function GameClicker(){
    console.log("it clicked!")
    const ToggleUi = document.getElementById("Games")
    console.log("This is the games tab", ToggleUi)
    ToggleUi.classList.toggle("Hidden")
}
function RobloxToggle(){

}
function UnityToggle(){

}
RobloxTab.addEventListener("click",ToggleRoblox)
Games.addEventListener("click",GameClicker)
WebsiteHeader.addEventListener("click",ToggleWebsite)
Programheader.addEventListener("click",ToggleProgramheader)