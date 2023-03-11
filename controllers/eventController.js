const Event = require("../models/event");

const eventIndex = (req,res) => {
    res.status(200).json({ status : "ok" });
};

const eventShow = (req,res) => {
    res.status(200).json({ status : "ok" });
};


module.exports = {
    eventIndex,
    eventShow
};