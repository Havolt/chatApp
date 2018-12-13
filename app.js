const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

app.use(express.static(`${__dirname}/public`));

http.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('got message')
        io.emit('chat message', msg);
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
});

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
})