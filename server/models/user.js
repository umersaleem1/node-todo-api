var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }
});

module.exports = {User};


// var user = new User({
//     email: 'mumersaleem@yahoo.com'
// });

// user.save().then((doc) => {
//     console.log('User saved', doc);
// }, (err) => {
//     console.log(err);
// });