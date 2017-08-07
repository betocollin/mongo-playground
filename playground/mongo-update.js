const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
    if (err) return console.log('Error', err);

    db.collection('Todos')
        .findOneAndUpdate({
            _id: new ObjectID("5988bfa2600a543342a84d9e")
        }, {
            $set : {
                completed: true
            }
        }, {
            returnOriginal: false
        })
        .then(res => console.log(res));

    db.close();

});