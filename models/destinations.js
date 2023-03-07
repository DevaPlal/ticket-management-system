const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const destinationSchema = new Schema({});

const Destination = mongoose.model("Destination",desinationSchema);

module.exports = Destination;
