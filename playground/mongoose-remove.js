const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo')
const {user} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove('5b9f7cb880f4d5eb10cb796b').then((todo) => {
//   console.log(todo);  
// });

Todo.findOneAndDelete({_id: '5b9f7dda80f4d5eb10cb79f1'}).then((todo) => {
    console.log(todo);
});