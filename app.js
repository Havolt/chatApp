
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const port = 3000;

http.listen(3000, () => {
    console.log(`listening on port ${port}`);
})


app.use(express.static(`${__dirname}/public/`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.post('/getMessage', (req, res) => {
    console.log(req.body);
    res.send({hello: 'lololol'});

});



