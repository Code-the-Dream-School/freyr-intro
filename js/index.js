document.addEventListener('DOMContentLoaded', () => {
    let skills = [
        "Wireframing", 
        "Prototyping", 
        "Hand-coding HTML 4.0", 
        "Hand-coding XHTML transitional and strict", 
        "Some HTML 5",
        "Hand-Coding CSS 2.0 and 1.0",
        "Familiarity with CSS Grid and Flexbox",
        "W3C Source-Code Validation",
        "Some JavaScript",
        "Basic Debugging",
        "Basic DOM (Document Object Model) Manipulation",
        "Intermediate ActionScript",
        "Introductory Skills in Version Control with Git",
        "Introductory Skills in Git Usage from the CLI, with GitBash",
        "Introductory Skills in Integration of Git with and GitHub",
        "Quality Testing Website Projects",
        "Exposure to User Research and Testing",
        "Section 508 Accessibility Compliance",
        "Cross-Browser Compatibility",
        "Exposure to C# at a Beginner’s Level",
        "Exposure to Python at a Beginner’s Level",
        "Exposure to Java at a Beginner’s Level",
        "Basic Familiarity with JDBC",
        "Exposure to PHP Server-Side Scripting at a Beginner’s Level",
        "Exposure to MySQL database, MariaDB, phpMyAdmin, HeidiSQL, WAMP and LAMP (Linux, Apache, MySQL and PHP)",
        "Intermediate Knowledge of Cross-Platform SQL",
        "Introductory Skills in Using Microsoft Visual Studio (VS) Code",
        "Strong Familiarity with Development Platforms and Code Editors such as CodePen, Replit and Notepad++; as well as with Integrated Development Environments (IDEs) Such as PyCharm,  and IntelliJ IDEA",
        "Familiarity with the Windows CLIs (MSDOS and PowerShell), and with the Linux terminal, as well as some knowledge of commands for use within them",
        "Experience with Changing Ink Toner on Inkjets and Cartridge in Laser Printers, Printer Alignment and Calibration",
        "Experience Embedding Video and Audio",
        "Windows XP, 7 and 10 Workstation Administration and Some Maintenance",
        "Setting Up OS Installations for Dual-Booting or for Use Withing Oracle Virtual Machine (VM)",
        "Performing Basic Computer Troubleshooting and Maintenance on Workstations",
        "Organizational Abilities",
        "Problem Solving Abilities",
        "Service Orientations",
        "Growth Mindset", 
        "Desire to Learn and Aptitude for Acquiring Technical Skills",
        "Microsoft Office 365, 2010, 2013 and 2016 Usage",
        "Knowledge of Many Computer Applications that Run on Windows, Mac and Linux",
        "Reasonable Knowledge of Cybersecurity Measures for Preventing and Remediating System Intrusion and Infections",
        "Scheduling with Microsoft Outlook Calendar and Gmail Calendar",
        "Near-native and Highly Fluent English",
        "Bi-Lingual Communication in English and Portuguese",
        "Beginning Level Spanish",
        "Effective Written and Verbal Communication Skills",
        "Documentation Writing", 
        "Developing Personas for Use Cases", 
        "Technical Writing for Information Architecture"
    ];
    let skillsSection = document.getElementById('skills');
    let skillsList = skillsSection.querySelector('ul');
    let messageSection = document.getElementById('messages');
    messageSection.style.display = 'none';
    
    for (let i=0; i < skills.length; i++) {
        let skill = document.createElement('li');
        let skillWrapperDiv = document.createElement('div');
        skill.innerText = `${skills[i]}`;
        skillWrapperDiv.appendChild(skill);
        skillsList.appendChild(skillWrapperDiv);
    }

    function placeCopyrightNotice() {
        let today = new Date();
        var thisYear = today.getFullYear();
        let footer = document.querySelector('footer');
        let copyright = document.createElement('p');
        copyright.innerHTML = `&copy; Nataly Mota ${thisYear}`;
        footer.appendChild(copyright);
    }
    placeCopyrightNotice();
    

    let messageForm = document.querySelector("form[name='leave_message']");
    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        messageSection.removeAttribute('style');
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

        let name = getValueOfFormFieldAndTrimIt('usersName');
        let email = getValueOfFormFieldAndTrimIt('usersEmail');
        let message = getValueOfFormFieldAndTrimIt('usersMessage');
        
        /*
            The code above does the same thing as the code below:
            let name = getValueOfFormField('usersName');
            name = name.trim();

            let email = getValueOfFormField('usersEmail');
            email = email.trim();

            let message = getValueOfFormField('usersMessage');
            message = message.trim();
        */

        /*
            A previous, simpler version of the code above, that did not have all of the same functionality, but which had some of it, looked like the code below:

            let name = event.target.usersName.value;
            let email = event.target.usersEmail.value;
            let message = event.target.usersMessage.value;
        */
        console.log(`name: ${name} \nemail: ${email} \nmessage: ${message}`);
        let messageList = messageSection.querySelector('ul');
        let newMessage = document.createElement('li');
        newMessage.innerHTML = `<strong><a href='mailto:${email}'>${name}</a> wrote:</strong> <span>${message}</span> `;

        function createButton(buttonText) {
            let typeOfButton = document.createElement('button');
            typeOfButton.innerText = buttonText;
            typeOfButton.type = "button";
            return typeOfButton;
        }
        
        function createButtonAndAppendIt(buttonText) {
            let typeOfButton = createButton(buttonText);
            newMessage.appendChild(typeOfButton);
            return typeOfButton;
        }

        let editButton = createButtonAndAppendIt('edit');
        let removeButton = createButtonAndAppendIt('remove');
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

        editButton.style.margin = '0 .4rem 0 1rem';

        messageList.appendChild(newMessage);

        removeButton.addEventListener('click', () => {
            let entry = removeButton.parentNode;
            /* 
                The variable entry is a list item (li), which is the element that is the parent of the editButton. 
                It's parent is the unordered list (ul), which is stored in the variable messageList.
                The ul's parent is the section element with the id of messages.
            */
            let numOfListItems = messageList.childElementCount;
            console.log(numOfListItems);
            entry.remove();
            if (numOfListItems === 1) {
                messageSection.style.display = 'none';
            } 
        });

        

        editButton.addEventListener('click', () => {
            let messageContainerSpan = newMessage.getElementsByTagName('span')[0];
            // console.log(messageContainerSpan);
            let messageText = messageContainerSpan.textContent;
            // messageContainerSpan.style.visibility = 'hidden';
            messageContainerSpan.textContent = '';
            let editInputField = document.createElement('input');
            editInputField.type = 'text';
            editInputField.value = messageText;
            newMessage.insertBefore(editInputField, editButton);
            //messageContainerSpan.appendChild(editInputField);

            let saveButton = createButton('save');
            newMessage.insertBefore(saveButton, removeButton);
            editButton.remove();
        });
        messageForm.reset();
    });
});