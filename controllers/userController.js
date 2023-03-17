const User = require("../models/user");
const Booking = require("../models/booking");

const index = async (req,res) => {

    const id = String(req.params.id);

    const user = await User.findById(id);

    res.render("user/index",{title:"User Profile",user:user});
};


const ticketBookings = async (req,res) => {

    const id = String(req.params.id);

    const bookings = await Booking.find({ user: id });

    res.render("user/bookings",{title:"Bookings",bookings});

};

module.exports = {
    index,
    ticketBookings
};