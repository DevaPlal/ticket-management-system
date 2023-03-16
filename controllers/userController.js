const User = require("../models/user");


const index = (req,res) => {

    const id = String(req.params.id);

    const user = User.findById(id);

    res.render("user/index",{title:"User Profile",user});
};


const ticketBookings = (req,res) => {

};