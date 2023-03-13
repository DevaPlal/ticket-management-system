const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name:{
    type: String,
    required: true,
    unique: [true,"Event already registered"],
  },
  description: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true
  },
  totalSeats: {
    type: Number,
    required: true
  },
  availableSeats: {
    type: Number,
    required: true
  }
},
  { timestamps: true });

const Event = mongoose.model("Event",eventSchema);

module.exports = Event;
