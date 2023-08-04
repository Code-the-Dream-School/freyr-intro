// index.js

//Task 1 by steps - insert Copyright text in footer

// 1- Create a new date object
const today = new Date();

// 2- Retrieve the current year
const thisYear = today.getFullYear();

// 3- Select the <footer> element from the DOM
const footer = document.querySelector('footer');

// 4- Create a new paragraph (p) element
const copyright = document.createElement('p');

// 5- Set the inner HTML of the copyright element
copyright.innerHTML = 'Marcelo Villamar ' + thisYear;

// 6- Append the copyright element to the footer
footer.appendChild(copyright);

//Task 2 by steps - Create List of Skills

// 1- List of technical skills using array
const skills = [
    'JavaScript',
    'HTML',
    'CSS',
    'Powershell',
    'Networking (TCP/IP)',
    'SQL',
    'Microsoft System Administration',
    'Cisco & Juniper',
    'Firewalls'
];

// 2- Using "DOM Selection", select the #skills section by id and store it in a variable named 
// skillsSection hint: querySelector or getElementById method
const skillsSection = document.querySelector('#skills');

// 3- Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> 
// element and store it in a variable named skillsList
const skillsList = skillsSection.querySelector('ul');

// 4- Create a for loop to iterate over your skills Array, starting at index 0
for (let i = 0; i < skills.length; i++) {

// 5- Inside the loop, create a new list item (li) element and store it in a variable named skill
// hint: createElement method   
    let skill = skills[i];
    const skillElement = document.createElement('li');

// 6- Set the inner text of the skill element to the current skill
// hint: access the Array element using bracket notation
    skillElement.innerText = skills[i];

// 7- On the next line, append the skill element to the skillsList element 
// hint: appendChild method
    skillsList.appendChild(skillElement);
}




