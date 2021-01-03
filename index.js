var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('note', (note) => {
    console.log('note: ' + note);
    socket.broadcast.emit('note', note)
  });
});

http.listen(4001, () => {
  console.log('listening on *:4001');
});