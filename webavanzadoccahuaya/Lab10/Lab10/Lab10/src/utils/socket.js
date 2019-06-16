import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

const receiveMessage = cb => {
    socket.on('message', line => cb(line));
};

const emmitMessage = line => {
    socket.emit('message', line);
};

export { receiveMessage, emmitMessage };