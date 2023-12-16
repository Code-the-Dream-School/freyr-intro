document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const cube = document.querySelector('.cube');

    
    menu.addEventListener('mouseenter', function () {
        cube.style.display = 'flex';
    });

    menu.addEventListener('mouseleave', function () {
        cube.style.display = 'none';
    });

    const messageForm = document.getElementById('leave_message');
    const messagesList = document.getElementById('messages');

    messageForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        console.log(usersName, usersEmail, usersMessage);

        messageForm.reset();

        const newMessage = document.createElement('li');
        newMessage.innerHTML = `
            <a href="mailto:${usersEmail}">${usersName}</a>
            <span>${usersMessage}</span>
        `;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.type = 'button';

        removeButton.addEventListener('click', function () {
            const entry = removeButton.parentNode;
            entry.remove();
        });

        newMessage.appendChild(removeButton);
        messagesList.appendChild(newMessage);
    });
});
