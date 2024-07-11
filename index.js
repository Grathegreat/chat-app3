const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const Filter = require('bad-words');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('join', (username) => {
        socket.username = username;
        socket.broadcast.emit('notification', `${username} has joined the chat`);
    });

    socket.on('chat message', (msg) => {
        const filter = new Filter();
        if (filter.isProfane(msg)) {
            socket.emit('notification', 'Profanity is not allowed');
            socket.disconnect(true);
        } else {
            io.emit('chat message', { username: socket.username, msg });
        }
    });

    socket.on('disconnect', () => {
        io.emit('notification', `${socket.username} has left the chat`);
    });
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});