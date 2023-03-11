const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parkingSchema = new Schema({ });


const Parking = mongoose.model("Parking",parkingSchema);

module.exports = Parking;