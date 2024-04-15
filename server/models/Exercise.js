const mongoose = require('mongoose');
const { Schema } = require('mongoose');

//Schema is a constructor function from mongoose

const exerciseSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },

  date: {
    type: Date,
    required: true,
  },
  // we can use quantity for reps or  days a week?
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  // category can be for body part?
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

//export it to reuse it, we named it 'Event' it will be used in user as Event also

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;
