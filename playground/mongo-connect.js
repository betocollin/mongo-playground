const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if(error) return console.log('error connecting to db');
    console.log('connected!! uhuu!');

    db.collection('Todos')
        .insertOne({
            title: 'do something',
            completed: false
        }, (err, res) => {
            if(err) return console.log('some error happened');
            console.log(res.ops);
        });

    db.collection('Users')
        .insertOne({
            name: 'Beto',
            age: 31,
            location: 'Dublin'
        }, (err, res) => {
            if(err) return console.log('some error happened');
            console.log(res.ops);
        });

    db.close();
});