const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(express.static(`${__dirname}/public/`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
})

app.post('/getMessage', (req, res) => {
    console.log(req.body);
    res.send({hello: 'hi'});
})