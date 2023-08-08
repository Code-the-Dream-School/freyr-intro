const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = '© JUAN PABLO BERGALLO MARTINEZ ' + thisYear;

footer.appendChild(copyright);

//  skills 

const skills = [
    "HTML",
    "CSS",
    "JavaScript",   
  ];
  
  const skillsSection = document.getElementById("skills");
  
  const skillsList = skillsSection.querySelector("ul");
  
  for (let i = 0; i < skills.length; i++) {
  
    const skill = document.createElement("li");
  
    skill.innerText = skills[i];
  
    skillsList.appendChild(skill);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // ... Previous code ...
  
    const messageForm = document.forms.leave_message;
  
    messageForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const userName = event.target.usersName.value;
      const userEmail = event.target.usersEmail.value;
      const userMessage = event.target.usersMessage.value;
  
      // Clear the form fields after submission
      event.target.reset();
  
      // Display messages 
      const messageSection = document.getElementById("messages");
      const messageList = messageSection.querySelector("ul");
  
      const newMessage = document.createElement("li");
      newMessage.innerHTML = `
        <a href="mailto:${userEmail}">${userName}</a>: 
        <span>${userMessage}</span>
      `;
  
      const removeButton = document.createElement("button");
      removeButton.innerText = "remove";
      removeButton.type = "button";
  
      removeButton.addEventListener("click", function () {
        const entry = removeButton.parentNode;
        entry.remove();
      });
  
      newMessage.appendChild(removeButton);
      messageList.appendChild(newMessage);
    });
  });