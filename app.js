const http = require('http');
const express = require('express');
const app = module.exports.app = express();
const bodyParser = require('body-parser');
const server = http.createServer(app);
const io = require('socket.io').listen(server);  
const port = 3000;

server.listen(port); 

app.use(express.static(`${__dirname}/public/`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.post('/getMessage', (req, res) => {
    console.log(req.body);
    res.send({hello: 'hi'});
});

io.on('connection', (socket) => {
    socket.emit('welcome', {mess: 'Hello my friend'});
})