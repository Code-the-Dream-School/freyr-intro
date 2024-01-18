   
      // CHALLENGE 1. Insert Copyright Text in Footer
      // --------------------------------------------------------------
      
        const today = new Date()
        const thisYear = today.getFullYear()

        // DOM selection
        const copyright = document.querySelector('#copyright')

        // DOM manipulation (modify)
        copyright.innerHTML = `&copy; Nicoleta Nastase ${thisYear}`
      

    //Challenge 2. create List of Skills
    let skills = ['Verbal communication', 
      'Friendly', 
      'Active Listener', 
      'Fast Learner', 
      'Work well under stress']
    
    const skillSelection =document.querySelector('#skills');
    const skillList = skillSelection.querySelector('ul');
    for(let i = 0; i < skills.length; i++) {
      let skill = document.createElement('li');
      skill.classList.add('tag');
      skill.innerText = skills[i];
      skillList.appendChild(skill);
    }



    // CHALLENGE 3. Register Message Form
    const messageForm  = document.querySelector('form[name="leave_message"]');

    messageForm.addEventListener ('submit', (e) => {
      e.preventDefault();
    // capture curent timestamp  
      const now = new Date();

      const name = e.target.name.value;
      const email =  e.target.email.value;
      const message =  e.target.message.value;
      //console.log(name, email, message);
    messageForm.reset();
    
      const messageSection = document.getElementById('messages');
      const messageList = messageSection.querySelector('ul'); 

    // if hidden, show the messages section  
      if (messageSection.style.display === 'none') {
        messageSection.style.display = 'block'
        }
    // Create new message

      const newMessage = document.createElement('li');
      newMessage.classList.add('list__item');
      newMessage.innerHTML = ` <div> 
      <span class="strong">${message}</span>
      <p>${now.toLocaleString()} from <a class="link" href="mailto:${
      email}">${name}</a> &nbsp;</p>
    </div>`

    //Create edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'edit';
    editButton.type = "button";
    editButton.classList.add('button', 'button--minimal');
    editButton.addEventListener('click', (e) => {
      const button = e.target;
      const entry = button.parentNode;

      if (button.innerText === 'edit') {
        const message = entry.querySelector('span');
        const input = document.createElement('input');
        input.type = 'text';
        input.value = message.innerText;
        input.classList.add('field__input');

        message.after(input)
        message.remove()

        button.innerText = 'save'
      } else {
        const input = entry.querySelector('input');
        const message = document.createElement('span');
        message.innerText = input.value;
        message.classList.add('strong');

        input.after(message)
        input.remove()

        button.innerText = 'edit'

      }
    })

    newMessage.appendChild(editButton)

    // Create remove button

      const removeButton = document.createElement('button');
      removeButton.innerText = 'remove';
      removeButton.type = "button";
      removeButton.classList.add('button', 'button--danger');
      removeButton.addEventListener ('click', (e) => {
      const entry = e.target.parentNode;
      const list = entry.parentNode;

    //If there are no messages hide the message section
     if(list.children.length <= 1) {
      messageSection.style.display = 'none';
     } 

     //remove entry from the list
      entry.remove();
    
      })
      newMessage.appendChild(removeButton)
    //add new message to the list  
      messageList.appendChild(newMessage)
    // reset form
      e.target.reset()
    
    })
    
  
    // Challenge 4. create the XMLHttpRequest
    
    

  // Challange 5. FETCH API
    
        fetch('https://api.github.com/users/nicole3891/repos')
        .then((res) => res.json())
        .then((data) => {
          
          const projectSection = document.getElementById('projects');
          const projectList = projectSection.querySelector('ul')

          for (let repository of data) {
            const project = document.createElement('li');
            var a = document.createElement('a');
            project.innerHTML = `<a class="link link--no-decor" href="${repository.html_url}">${repository.name}</a>`
              projectList.appendChild(project)
          }
        })


