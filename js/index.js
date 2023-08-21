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
  
    const messageForm = document.forms.leave_message;
  
    messageForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const userNameInput = event.target.usersName;
      const userEmailInput = event.target.usersEmail;
      const userMessageInput = event.target.usersMessage;
  
      const userName = userNameInput.value;
      const userEmail = userEmailInput.value;
      const userMessage = userMessageInput.value;
  
      console.log("Name:", userName);
      console.log("Email:", userEmail);
      console.log("Message:", userMessage);
  
      // Clear the form fields after submission
      messageForm.reset();
  
      // Display messages in a list
      const messageSection = document.getElementById("messages");
      const messageList = messageSection.querySelector("ul");
  
      const newMessage = document.createElement("li");
      // ... Your existing code ...
  
      const editButton = document.createElement("button");
      editButton.innerText = "edit";
      editButton.type = "button";
  
      editButton.addEventListener("click", function () {
        const messageSpan = newMessage.querySelector("span");
        const editedMessage = prompt("Edit the message:", userMessage);
        if (editedMessage !== null) {
          messageSpan.textContent = editedMessage;
        }
      });
  
      const removeButton = document.createElement("button");
      removeButton.innerText = "remove";
      removeButton.type = "button";
  
      removeButton.addEventListener("click", function () {
        const entry = removeButton.parentNode;
        entry.remove();
        messageSection.style.display = messageList.children.length > 0 ? "block" : "none";
      });
  
      newMessage.appendChild(editButton);
      newMessage.appendChild(removeButton);
      messageList.appendChild(newMessage);
  
      messageSection.style.display = messageList.children.length > 0 ? "block" : "none";
    });
  });