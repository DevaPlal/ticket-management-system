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
    required: [true, "Please provide a description"]
  },
  venue: {
    type: String,
    required: [true, "Please specify a venue"],
  },
  date: {
    type: Date,
    required: [true, "Please specify a date for the event"]
  },
  status: {
    type: String,
    required: true
  },
  totalSeats: {
    type: Number,
    required: [true, "Please provide the number of seats"]
  },
  availableSeats: {
    type: Number,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Creater by can't be null"],
  },
},
  { timestamps: true });

const Event = mongoose.model("Event",eventSchema);

module.exports = Event;
