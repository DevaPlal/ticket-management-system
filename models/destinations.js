const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  name: String,
  location: {
    type: String,
    coordinates: [Number]
  }
},{ timestamps: true });

const Destination = mongoose.model("Destination",destinationSchema);

module.exports = Destination;
