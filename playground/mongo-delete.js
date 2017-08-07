const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
    if (err) return console.log('Error', err);

    db.collection('Todos')
        .deleteOne({title:'eat'})
        .then(res => {
            console.log(res.result);
        });

    db.close();

});