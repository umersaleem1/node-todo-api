const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    //delete Many
    // db.collection('Todos').deleteMany({text: 'Learn Coredata'}).then((result) => {
    //     console.log(result)
    // }, (error) => {
    //     console.log(error);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Learn Coredata'}).then((result) => {
    //     console.log(result);
    // });

    //find and delete one
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Umer Saleem'}).then((result) => {
    //     console.log(result);
    // });


    // db.close();
});