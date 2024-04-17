const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
    exerciseTitle: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },

    exerciseAuthor: {
        type: String,
        required: true,
        trim: true,
    },
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
