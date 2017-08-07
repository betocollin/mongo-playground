const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
    if (err) return console.log('Error', err);

    db.collection('Todos')
        .find()
        .toArray()
        .then(docs => {
            console.log(docs);
        }, 
        err => {
            if (err) console.log('err', err)
        });

    db.close();

});