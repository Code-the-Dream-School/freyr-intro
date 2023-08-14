

const today = new Date();

const thisYear = today.getFullYear();

const myName = "Tristan White";

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `${myName} ${thisYear}`;

footer.appendChild(copyright);

const skills = [
  "welding and construction, specifically, mig welding",
  "Service Industry, specifically, bartending",
];

const skillsSection = document.querySelector("#skills");

const skillsList = skillsSection.querySelector("ul");

for (i = 0; i < skills.length; i += 1) {
  //I understand using a for loop to iterate through the items in the array

  let skill = document.createElement("li"); // creating the actual list items bullet points in the element represented by a variable named skill

  skill.innerText = skills[i]; //inner text dictates what goes at the list item bullet points
  // note: I couldnt find this in my notes , and the instructions were pretty confusing, i hope this is right
  // I did notice on the element tab of the dev tools , that the <li> items did not get put inside the <ul> tags. is that normal?

  skillsList.appendChild(skill); // this appends the items from the skill variable to the skillsSection. note: the instructions said skillList, but that seem to do nothing.
}

//const messageForm = document.getElementsByName('leave_message')[0];
const messageForm = document.querySelector('form[name="leave_message"]') 

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
 
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;
    console.log(usersName,usersEmail,usersMessage);
    
    const messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href=mailto:${usersEmail}> ${usersName} </a>` + "wrote:" + `<span> ${usersMessage}</span>`

    messageList.appendChild(newMessage);
    let removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type='button';

    newMessage.appendChild(removeButton);
    removeButton.addEventListener('click', (e) => {
      let entry = removeButton.parentNode;
      entry.remove();

    })

    messageForm.reset();
});
