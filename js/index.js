let githubRequest = new XMLHttpRequest;
githubRequest.open('GET', 'https://api.github.com/users/NatalyBMota/repos');
githubRequest.setRequestHeader('X-GitHub-Api-Version', '2022-11-28');
githubRequest.send();
githubRequest.onload = function() {
  let repositories = JSON.parse(githubRequest.responseText);
  console.log(repositories);
  let projectSection = document.getElementById('projects');
  let projectList = projectSection.querySelector('ul');
  for (let i=0; i < repositories.length; i++) {
    let project = document.createElement('li');
    let repositoryURL = repositories[i].html_url;
    let repositoryName = repositories[i].name;
    let repositoryDateOfCreation = new Date(repositories[i].created_at);
    const monthSpelledOut = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let creationDate = repositoryDateOfCreation.getDate();
    let creationMonth = repositoryDateOfCreation.getMonth();
    let creationYear = repositoryDateOfCreation.getFullYear();
    
    let subList = document.createElement("ul");
    //subList.classList.add('subListOfInnerList');
    subList.className = 'subListOfInnerList';
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    //project.innerHTML = '<a href=' + repositoryURL + '>' + repositoryName + '</a>';
    project.innerHTML = `<a href='${repositoryURL}' target='_blank'>${repositoryName}</a><span class="hideable">:</span> `;
    /*
    project.innerHTML += `${repositories[i].description}`;
    */
    let descriptionStrong = document.createElement('strong');
    descriptionStrong.innerText = 'Description: ';
    //li1.innerHTML = `<strong>Description:</strong> ${repositories[i].description}`;
    li1.appendChild(descriptionStrong);
    let descriptionTextNode = document.createTextNode(`${repositories[i].description}`);
    li1.appendChild(descriptionTextNode);
    li2.innerHTML = `<strong>Date of Creation:</strong> `;
    li2.innerHTML += `${monthSpelledOut[creationMonth]} ${creationDate}, ${creationYear}`;
    //li2.innerHTML = `<strong>Date of Creation:</strong> ${repositoryDateOfCreation}`;
    subList.appendChild(li1);
    subList.appendChild(li2);
    project.appendChild(subList);
    projectList.appendChild(project);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let skills = [
    "Wireframing",
    "Prototyping",
    "Hand-coding HTML 4.0",
    "Hand-coding XHTML",
    "Some HTML 5",
    "Hand-Coding CSS",
    "Familiarity with CSS Grid",
    "Learning CSS Flex-box",
    "W3C Validation",
    "Some JavaScript",
    "Basic Debugging",
    "Basic DOM Manipulation",
    "Intermediate ActionScript",
    "Learning Git",
    "Learning GitBash",
    "Learning Git with GitHub",
    "Quality Testing",
    "Introductory User Research",
    "Usability Testing",
    "Section 508 Compliance",
    "Website Accessibility",
    "Cross-Browser Compatibility",
    "Exposure to C#",
    "Exposure to Python",
    "Exposure to Java",
    "Familiarity with JDBC",
    "Exposure to PHP",
    "Exposure to Server-Side Scripting",
    "Exposure to MySQL database",
    "Exposure to MariaDB",
    "Exposure to phpMyAdmin",
    "Exposure to HeidiSQL",
    "Exposure to WAMP and LAMP",
    "Intermediate SQL",
    "Learning VS Code",
    "Familiarity with Development Platforms",
    "Familiarity with Code Editors",
    "Familiarity with CodePen and Replit",
    "Familiarity with IDEs",
    "Familiarity with PyCharm",
    "Familiarity with IntelliJ IDEA",
    "Familiarity with the Windows CLIs",
    "Familiarity with MSDOS",
    "Familiarity with PowerShell",
    "Familiarity with the Linux terminal",
    "Some Knowledge of Linux Commands",
    "Embedding Video and Audio",
    "Windows Workstation Administration",
    "Windows OS Maintenance",
    "Windows XP, 7, 10, and 11",
    "Mac OS X",
    "Fedora Linux",
    "Ubuntu Linux",
    "Installing Some Operating Systems",
    "Installing OSs for Dual-Booting",
    "Installing OSs Within Oracle VM",
    "Performing Basic Computer Troubleshooting and Maintenance on Workstations",
    "Organizational Abilities",
    "Problem Solving Abilities",
    "Service Orientations",
    "Growth Mindset",
    "Desire to Learn",
    "Aptitude for Acquiring Technical Skills",
    "Microsoft Office 365",
    "MS Office 2010, 2013 and 2016",
    "Knowledge of Many Computer Applications",
    "Some Knowledge of Cybersecurity",
    "Knowledge of Antivirus Software",
    "Knowledge of Anti-Malware Software",
    "Knowledge of Anti-Spyware Software",
    "Knowledge of Firewall Software",
    "Digital Scheduling Skills",
    "Microsoft Outlook Calendar",
    "Gmail Calendar",
    "Near-Native English Skills",
    "Highly Fluent English",
    "Bi-Lingual",
    "Native Portuguese Skills",
    "Beginning Level Spanish",
    "Written Communication Skills",
    "Verbal Communication Skills",
    "Effective Communication Skills",
    "Documentation Writing",
    "Developing Personas for Use Cases",
    "Technical Writing",
    "Information Architecture",
  ];
  let skillsSection = document.getElementById("skills");
  let skillsList = skillsSection.querySelector("ul");
  let messageSection = document.getElementById("messages");
  messageSection.style.display = "none";

  for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    let skillWrapperDiv = document.createElement("div");
    skill.innerText = `${skills[i]}`;
    skillWrapperDiv.appendChild(skill);
    skillsList.appendChild(skillWrapperDiv);
  }

  function placeCopyrightNotice() {
    let today = new Date();
    var thisYear = today.getFullYear();
    // footer = document.querySelector('footer');
    let copyrightSection = document.getElementById("copyright");
    let copyrightNotice = document.createElement("p");
    copyrightNotice.innerHTML = `&copy; Nataly Mota ${thisYear}`;
    // footer.appendChild(copyrightNotice);
    copyrightSection.appendChild(copyrightNotice);
  }
  placeCopyrightNotice();

  let messageForm = document.querySelector("form[name='leave_message']");
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    messageSection.removeAttribute("style");
    /*
        The above line of code right now has the same effect as the line of code below. It makes the message section visible once again. However, if more styles were added to the messageSection element, the line of code below would not remove them, in order to make the display of this element as visible one more time.
        messageSection.style.display = '';
    */

    function getValueOfFormField(formFieldName) {
      let fieldName = event.target[formFieldName];
      let fieldValue = fieldName.value;
      return fieldValue;
    }

    function getValueOfFormFieldAndTrimIt(formFieldName) {
      let formFieldData = getValueOfFormField(formFieldName);
      formFieldData = formFieldData.trim();
      return formFieldData;
    }

    let name = getValueOfFormFieldAndTrimIt("usersName");
    let email = getValueOfFormFieldAndTrimIt("usersEmail");
    let message = getValueOfFormFieldAndTrimIt("usersMessage");

    let createSpanWithMessage = (userMessage) => `<span>${userMessage}</span>`;

    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    //newMessage.innerHTML = `<strong><a href='mailto:${email}'>${name}</a> wrote:</strong><span>${message}</span>`;
    newMessage.innerHTML = `<strong><a href='mailto:${email}'>${name}</a> wrote:</strong> ${createSpanWithMessage(
      message
    )}`;

    function createButton(buttonText) {
      let typeOfButton = document.createElement("button");
      typeOfButton.innerText = buttonText;
      typeOfButton.type = "button";
      return typeOfButton;
    }

    function createButtonAndAppendIt(buttonText) {
      let typeOfButton = createButton(buttonText);
      newMessage.appendChild(typeOfButton);
      return typeOfButton;
    }

    let editButton = createButtonAndAppendIt("Edit");
    editButton.id = "edit-btn";
    let saveButton = createButton("Save");
    saveButton.id = "save-btn";
    let removeButton = createButtonAndAppendIt("Remove");
    removeButton.id = "remove-btn";
    /*
            The above code is the same as the following code, in a refactored form:

            let editButton = document.createElement('button');
            editButton.innerText = "edit";
            editButton.type = "button";
            newMessage.appendChild(editButton);

            let removeButton = document.createElement('button');
            removeButton.innerText = "remove";
            removeButton.type = "button";
            newMessage.appendChild(removeButton);
        */

    //editButton.style.margin = '0 .4rem 0 3rem';

    messageList.appendChild(newMessage);

    removeButton.addEventListener("click", () => {
      let entry = removeButton.parentNode;
      /*
          The variable entry is a list item (li), which is the element that is 
          the parent of the editButton. 
          It's parent is the unordered list (ul), which is stored in the 
          variable messageList.
          The ul's parent is the section element with the id of messages.
      */
      let numOfListItems = messageList.childElementCount;
      entry.remove();
      if (numOfListItems === 1) {
        messageSection.style.display = "none";
      }
    });

    editButton.addEventListener("click", () => {
      saveButton.style.display = "";
      let messageContainerSpan = newMessage.getElementsByTagName("span")[0];
      let messageText = messageContainerSpan.textContent;
      messageContainerSpan.textContent = "";

      let editInputField = document.createElement("input");
      editInputField.type = "text";
      editInputField.id = "editInputField";
      editInputField.value = messageText;
      newMessage.insertBefore(editInputField, editButton);

      newMessage.insertBefore(saveButton, removeButton);
      editButton.style.display = "none";
      //editButton.remove();
    });

    saveButton.addEventListener("click", () => {
      editButton.style.display = "";
      let messageContainerSpan = newMessage.getElementsByTagName("span")[0];
      let editInputField = document.getElementById("editInputField");
      let messageText = editInputField.value;
      // console.log(messageContainerSpan);
      messageContainerSpan.innerHTML = createSpanWithMessage(messageText);

      editInputField.remove();

      //let editButton = createButton('edit');
      newMessage.insertBefore(editButton, removeButton);
      saveButton.style.display = "none";
      //saveButton.remove();
    });
    messageForm.reset();
  });
});
