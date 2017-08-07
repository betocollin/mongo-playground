const mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
    title : {
        type: String,
        required: true,
        minlength: 2
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: 0
    }
});

module.exports = {Todo};