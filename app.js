const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


const app = express();

const PORT = 3000;

const dbURI = `mongodb+srv://${process.env.DBUser}:${process.env.DBPass}@cluster0.430qrv7.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(dbURI)
  .then((result) => {
  app.listen(PORT,() => {
    console.log(`listening on http://localhost:${PORT}`);
  });
})
  .catch((err) => {
    console.log(err);
  });


app.get("/",(req,res) => {
  res.send("hai");
});


app.get('/destinations', (req, res) => {
  const longitude = Number(req.query.longitude);
  const latitude = Number(req.query.latitude);

  //db.collection('destinations').find({
    Destinations.find({
    location: {
      $nearSphere: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude]
        },
        $maxDistance: 500 
      }
    }
  }).toArray((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching destinations!');
    } else {
      res.json(result);
    }
  });
});


app.post("/parking-slots",(req,res) => {

  const {name,longitude,latitude} = req.body;
});


app.get("/destinations/:id",(req,res) => {

});



app.get('/parking-slots', (req, res) => {
  const longitude = Number(req.query.longitude);
  const latitude = Number(req.query.latitude);

  //db.collection('destinations').find({
    Destinations.find({
    location: {
      $nearSphere: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude]
        },
        $maxDistance: 500 
      }
    }
  }).toArray((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching parking slots!');
    } else {
      res.json(result);
    }
  });
});


app.get("/parking-slots/:id",(req,res) => {

});

app.get("/events",(req,res) => {

});