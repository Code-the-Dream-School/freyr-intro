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

var GitHubPromise = fetch("https://api.github.com/users/canilo1/repos");
GitHubPromise
  .then(function(Response){
    var GithubStatus = Response.status
    if(GithubStatus == 200){
      console.log("This is the status", Response.status)
      return Response.json();
    }else{
      console.error('Error: Request failed with status', GithubStatus);
    }
  })

  .then(function(RepositoryData){
    console.log("This is the repo data",RepositoryData)
    console.log("Repos.status",RepositoryData.status)
    // return RepositoryData
          // Log the value of 'repositories' in the console
          // Now you can access the 'repositories' variable outside this function
          var projectSection = document.getElementById("GithubProjects");
          console.log("This is the project section", projectSection)
          const projectList = projectSection.querySelector("ul");
          console.log("This is the project: ", projectList)
          for (let i = 0; i < RepositoryData.length; i++) {
            console.log("This is i", i, "This is the current repository", RepositoryData[i], "Finally, this is the repositories length", RepositoryData.length);
            console.log(RepositoryData[i].name)
            var project = document.createElement("li")
              project.innerText = RepositoryData[i].name
              projectList.appendChild(project)
          }
         
        });
// console.log(githubRequest)

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
    ROBLOX.classList.toggle("Hidden")
    console.log("Roblox's opacity is: ",  ROBLOX.style.opacity)
    const Website = document.getElementById('WebsiteInterface')
Website.classList.add("Hidden")
    const Programs = document.getElementById("ProgramsInterface")
    Programs.classList.add("Hidden")
}
function ToggleWebsite() {
    console.log("Clicked Website!");
    // Hide other sections
    const ROBLOX = document.getElementById("ROBLOX");
    ROBLOX.classList.add("Hidden")
    const Programs = document.getElementById("ProgramsInterface");
    Programs.classList.add("Hidden")
    // Show the Website section
    const Website = document.getElementById('WebsiteInterface');
    Website.classList.toggle("Hidden")
}

function ToggleProject(){
    console.log("they clicked2")
    const ROBLOX = document.getElementById("ROBLOX")
    ROBLOX.classList.add("Hidden")
    const Website = document.getElementById('WebsiteInterface')
  Website.classList.add("Hidden")
    const Programs = document.getElementById("ProgramsInterface")
    Programs.classList.toggle("Hidden")}


function ToggleProgramheader(){
    console.log("they clicked5")
    const ROBLOX = document.getElementById("ROBLOX")
    ROBLOX.classList.add("Hidden")
    const Website = document.getElementById('WebsiteInterface')
    Website.classList.add("Hidden")
    const Programs = document.getElementById("ProgramsInterface")
   Programs.classList.toggle("Hidden") 
}
function GameClicker(){
    console.log("it clicked!")
    const ToggleUi = document.getElementById("Games")
    console.log("This is the games tab", ToggleUi)
    ToggleUi.classList.toggle("Hidden")
    const ROBLOX = document.getElementById("ROBLOX")
    ROBLOX.classList.add("Hidden")
    
}
function RobloxToggle(){

}
function UnityToggle(){

}

RobloxTab.addEventListener("click",ToggleRoblox)
Games.addEventListener("click",GameClicker)
WebsiteHeader.addEventListener("click",ToggleWebsite)
Programheader.addEventListener("click",ToggleProgramheader)