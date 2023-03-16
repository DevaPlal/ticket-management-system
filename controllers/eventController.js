const Event = require("../models/event");
const User = require("../models/user");
const Booking = require("../models/booking");
const stripe = require("stripe")(process.env.STRIPE_SK);


const eventIndex = async (req,res) => {

    try{
        const events = await Event.find();
        res.render("event/index",{title:"Events",events:events});
    }
    catch(err){
        console.log(err);
    }
};

const eventShow = async (req,res) => {
  
    const id = String(req.params.id);
    try{
        const event = await Event.findById(id);
        res.render("event/show",{title:"Event",event:event});
    }
    catch(err){
        console.log(err);
    }
    

};

const eventCheckoutGet = async (req,res) => {
      
    const id  = String(req.params.id);

    console.log(id);
    try{
        const event = await Event.findById(String(id));
        
        res.render("event/checkout",{title:"Checkout",event:event});
    }
    catch(err){
        console.log(err);
    }  
};


const eventCheckoutPost = async (req,res) => {

    const { user , userName , event , count , total ,address,seatNumbers, status } = req.body;
    try{
        const booking = await Booking.create({
            user,userName,event,address,count,seatNumbers,total,status
            
        });

        const evnt = await Event.findById(event);
        let name = evnt.name;
        let description = evnt.description;
        let venue = evnt.venue;
        let totalSeats = evnt.totalSeats;
        let date = evnt.date;
        let amount = evnt.amount;
        let isActive = evnt.isActive;
        let createdBy = evnt.createdBy;
        let availableSeats = evnt.availableSeats - count;

        console.log(name,description,date,venue,totalSeats,availableSeats,isActive,createdBy);
        evnt.overwrite({name,description,date,venue,totalSeats,availableSeats,amount,isActive,createdBy});

        await evnt.save();

       res.status(201).json({booking: booking._id});
    }
    catch(err){
        console.log(err);
    }
};

const eventCreateGet = (req,res) => {

    res.render("event/create",{title:"Register event"});
};

const eventCreatePost = async (req,res) => {

    const { name , description , venue , date ,amount, totalSeats,availableSeats,isActive, createdBy } = req.body;
    try{
        const event = await Event.create({
            name,
            description,
            venue,
            date,
            amount,
            isActive,
            totalSeats,
            availableSeats,
            createdBy
        });
       res.status(201).json({event: event._id});
    }
    catch(err){
        console.log(err);
    }

};




const eventUpdateGet =  (req,res) => {
    res.render("event/update",{title:"Update event"});
};

const eventUpdatePost = async (req,res) => {};
const eventDelete = async (req,res) => {};



module.exports = {

    eventIndex,
    eventCreateGet,
    eventCreatePost,
    eventShow,
    eventCheckoutGet,
     eventCheckoutPost,
    eventUpdateGet,
    eventUpdatePost,
    eventDelete
};