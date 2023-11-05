today = new Date();
thisYear = today.getFullYear();

footer = document.querySelector("footer");
copyright = document.createElement("p");
copyright.innerHTML = "Thane Chaves " + thisYear;
footer.appendChild(copyright);

skills = ["strong writing and reading comprehension", "animal handling", "dog grooming", "swimming and swim instruction", "receptionist skills", "interpersonal skills", "childcare and development including specializing in children with special needs", "basic first aid training"];

skillsSection = document.getElementById("skills");
skillsList = skillsSection.querySelector("ul");

for (let i = 0; i <= skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
};

messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener("submit", function () {
  event.preventDefault();

  name = event.target.usersName.value;
  email = event.target.usersEmail.value;
  message = event.target.usersMessage.value;

  console.log(name + " " + email + " " + message);

  messageSection = document.getElementById("messages");
  if (messageSection.querySelector("ul").innerHTML.trim() == "") {
    messageHeader = document.createElement("h2");
    messageHeader.innerHTML = "Messages";
    messageSection.prepend(messageHeader);
  };
  messageList = messageSection.querySelector("ul");
  newMessage = document.createElement("li");
  
  mailLink = document.createElement("a");
  mailLink.innerHTML = name;
  mailLink.href = `mailto:${email}`;

  messageDisplay = document.createElement("span");
  messageDisplay.innerHTML = message;

  newMessage.appendChild(mailLink);
  newMessage.appendChild(messageDisplay);

  editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.type = "button";

  editButton.addEventListener("click", function () {
    self = this;
    currentMessage = self.parentNode.querySelector("span").textContent;
    editedMessage = prompt("Please edit your message:", `${currentMessage}`);
    if (editedMessage == null) {
      editedMessage = currentMessage;
    };
    self.parentNode.querySelector("span").innerHTML = editedMessage;
  });
  
  removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function () {
    self = this;
    entry = self.parentNode;
    entry.remove();
    if (messageSection.querySelector("ul").innerHTML.trim() == "") {
      messageHeader.remove();
    };
  });

  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});
