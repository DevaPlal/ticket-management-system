const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User cannot be empty"],
  },
  userName: {
    type: String,
    requiired: [true, "Please provide a username"]
  },
  address: {
    type: String,
    required: [true, "Please provide an address"]
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: [true, "Event cannot be empty"],
  },
  count: {
    type: Number,
    required: [true,"Please provide a count"]
  },
  seatNumbers: {
    type: [Number],
    required: [true, "Please specify the seat numbers"]
  },
  status: {
    type: String,
    required: [true]
  },
  total: {
    type: Number,
    required: [true,"Please provide the total amount"]
  }

},
  { timestamps: true });

const Booking = mongoose.model("booking",bookingSchema);

module.exports = Booking;
