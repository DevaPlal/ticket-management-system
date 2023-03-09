const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const Destinatination = require("./models/destination");

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res) => {
  res.send("hai");
});


app.get('/destinations', (req, res) => {
  const longitude = Number(req.query.longitude);
  const latitude = Number(req.query.latitude);
  const range = Number(req.query.range);
  //db.collection('destinations').find({
    Destination.find({
    location: {
      $nearSphere: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude]
        },
        $maxDistance: range 
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

app.post("/destinations", async (req,res) => {
  
  //const { name , location , description } = req.body;

  //console.log(name,location,description);
  const name = "Destination 1";
  const  type  = "Point";
  const longitude = -122.4085;
  const latitude = 37.7901;
  //const { coordinates } = location;
  //const [longitude,latitude] = coordinates;

  try{
    const destination = await Destination.create({
      name, 
      location: {type: type, coordinates: [longitude,latitude]},
      description: description
    });

    res.status(201).json({ destination: destination._id});
  }
  catch(err){
    res.status(400).json({ errors: err });
  }
});


app.get("/destinations/:id",(req,res) => {

  const id = String(req.params.id);

  Destination.findById(id)
    .then((result) => {
      res.status(200).json({ destination: result});
    })
    .catch((err) => {
      res.status(400).json({ errors: err });
    });
});
//app.post("/parking-slots",(req,res) => {

//  const {name,longitude,latitude} = req.body;
//});




app.get('/parking-slots', (req, res) => {
  const longitude = Number(req.query.longitude);
  const latitude = Number(req.query.latitude);
  const range = Number(req.query.range);
  //db.collection('destinations').find({
    Parking.find({
    location: {
      $nearSphere: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude]
        },
        $maxDistance: range 
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
