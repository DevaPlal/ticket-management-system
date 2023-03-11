const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  name:{
    type: String,
    required: [true, "Please enter a name"],
  } ,
  address: {
    type: String,
    require: [true ,"Please enter an address"],
    unique: [true],
  },
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
  description: { 
    type: String
   },
},
  { timestamps: true });

const Destination = mongoose.model("Destination",destinationSchema);

module.exports = Destination;
