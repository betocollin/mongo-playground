const mongoose = require('mongoose');

const User = mongoose.model('Users', {
    email : {
        type: String,
        minlength: 3,
        required: true,
        trim: true
    }
});

module.exports = {User};