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
    required: [true, "Please provide a description"],  
  },
  venue: {
    type: String,
    required: [true, "Please specify a venue"],
  },
  date: {
    type: Date,
    required: [true, "Please specify a date for the event"]
  },
  isActive: {
    type: String,
    required: [true, "Please provide a status"]
  },
  amount: {
    type: Number,
    required: [true, "Please provide an amount"]
  },
  totalSeats: {
    type: Number,
    required: [true, "Please provide the number of seats"]
  },
  availableSeats: {
    type: Number,
    required: [true, "Please provide the number of available seats"]
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
