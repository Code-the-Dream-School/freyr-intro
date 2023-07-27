const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('div');
paragraph.innerHTML = '<p>Hey I\'m red!</p>';
paragraph.style.color ='red';