const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const parkingslotSchema = new Schema({ 

    parkingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parking",
        require: [true, "Parking id cannott be empty"],
    },
    slotNo: {
        type: Number,
        required: [true,"Slot number cannot be empty"],
    },
    date: {
        type: Date,
        required: [true, "Please specify a date"]
    },
    duration: {
        type: Number,
        required: [true,"Please specify a duration"]
    },
    belongsTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true,"Cannot book slot without login"],
    },

},{ timestamps: true });


const Parkingslot = mongoose.model("Parkingslot",parkingslotSchema);

module.exports = Parkingslot;