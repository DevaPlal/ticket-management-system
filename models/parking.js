const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parkingSchema = new Schema({ 

    address: {
        type: String,
        required: true,
        unique: true
    },
    totalslots: {
        type: Number,
        required: true,
    },
    avilableslots: {
        type: Number,
        required: true
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

},{ timestamps: true });


const Parking = mongoose.model("Parking",parkingSchema);

module.exports = Parking;