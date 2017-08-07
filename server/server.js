const express = require('express');
const bodyParser = require('body-parser');

const {mongoode} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let TodoItem = new Todo({
        title: req.body.title
    });
    
    TodoItem.save().then(
        doc => res
            .send(`Todo added: ${doc}`),
        err => res
            .status(400)
            .send(`There was an err: ${err}`)
    );
});

app.get('/', (req, res) => {
    res.send('hello!');
});

app.listen(3000, () => {
    console.log('App started!');
})