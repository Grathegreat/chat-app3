const socket = io();
let currentUsername = '';
let selectedPhoto = null;

function joinChat() {
    const username = document.getElementById('username').value;
    if (username) {
        currentUsername = username;
        socket.emit('join', username);
        document.getElementById('login').classList.add('hidden');
        document.getElementById('chat').classList.remove('hidden');
    }
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message) {
        socket.emit('chat message', message);
        messageInput.value = '';
    }

    if (selectedPhoto) {
        const reader = new FileReader();
        reader.onload = function (e) {
            socket.emit('chat photo', e.target.result);
            selectedPhoto = null;
            document.getElementById('photo-input').value = ''; // Clear the file input
        };
        reader.readAsDataURL(selectedPhoto);
    }
}

function addPhoto() {
    document.getElementById('photo-input').click();
}

document.getElementById('photo-input').addEventListener('change', (event) => {
    selectedPhoto = event.target.files[0];
});

socket.on('chat message', ({ username, msg }) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (username === currentUsername) {
        messageDiv.classList.add('user-message');
    } else {
        messageDiv.classList.add('other-message');
    }
    messageDiv.innerHTML = `<span>${username}:</span> ${msg}`;
    document.getElementById('messages').appendChild(messageDiv);
});

socket.on('chat photo', ({ username, img }) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    if (username === currentUsername) {
        messageDiv.classList.add('user-message');
    } else {
        messageDiv.classList.add('other-message');
    }
    messageDiv.innerHTML = `<span>${username}:</span> <img src="${img}">`;
    document.getElementById('messages').appendChild(messageDiv);
});

socket.on('notification', (msg) => {
    const notificationDiv = document.createElement('div');
    notificationDiv.classList.add('message', 'notification-message');
    notificationDiv.innerHTML = `<span>System:</span> ${msg}`;
    document.getElementById('messages').appendChild(notificationDiv);
});
