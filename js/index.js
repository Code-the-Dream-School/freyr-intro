const messageForm = document.querySelector('form[name="leave_message"]');



messageForm.addEventListener('submit', function(event){
	event.preventDefault();
	const formData = new FormData(event.target); //retrive input data from the html file

	const usersName = formData.get('usersName');
	const usersEmail = formData.get('usersEmail');
	const usersMessage = formData.get('usersMessage');

	console.log('Name', usersName);
	console.log('Email', usersEmail);
	console.log('Message', usersMessage);
	
	const messageSection = document.getElementById('messages');
	const messageList = messageSection.querySelector('ul');
	
	const newMessage = document.createElement('li');
	newMessage.innerHTML =`
		
		<a href='mailto:${usersEmail}'>${usersName}</a>
		<span>${usersMessage}</span>
	`;
	const removeButton = document.createElement('button');
	removeButton.innerText = 'Remove';
	removeButton.type = 'button';
	removeButton.addEventListener('click', function(){
		const entry = removeButton.parentNode;
		entry.remove();
	});
	
	newMessage.appendChild(removeButton);
	messageList.appendChild(newMessage);

	messageForm.reset();

});



const skills = ["Ear-training","Practical Technique","Aural-training","Music Analysis", "Historical Studies in Classical Music"];

const skillsSlection = document.getElementById("skills");

const skillsList = skillsSlection.querySelector("ul");

for (let i = 0; i < skills.length; i++){
	console.log(skills[i]); //print out each skill from the skills list
	const skill = document.createElement("li"); // create an list of element named skill
	skill.textContent = skills[i]; // append the name of each skill to the each skill element
	skillsList.appendChild(skill); // append each skill element (with the name of each skill) to the list 'skillsList'
}

const today = new Date();
console.log(today);

const thisYear = today.getFullYear();
console.log(thisYear);

const footer = document.querySelector("footer");
console.log(footer);

const copyright = document.createElement("p");

copyright.innerHTML = "Chris Tang" + " " +  thisYear;

footer.appendChild(copyright);
