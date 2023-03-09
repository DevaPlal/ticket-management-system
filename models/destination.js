const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  name: String,
  address: String,
  location: {
    type: {
      type: String,
      enum:['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  description: String
},
  { timestamps: true });

const Destination = mongoose.model("Destination",destinationSchema);

module.exports = Destination;
