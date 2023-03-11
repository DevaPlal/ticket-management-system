const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// const Destination = require("./models/destination");
const destinationRoutes = require("./routes/destinationRoutes");
const parkingRoutes = require("./routes/parkingRoutes");

const app = express();

const PORT = 3000;

// const dbURI = `mongodb+srv://${process.env.DBUser}:${process.env.DBPass}@cluster0.430qrv7.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(process.env.DBURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
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
  res.status(200).json({ status : "ok" });
});

app.use(destinationRoutes);
app.use(parkingRoutes);








// app.get('/destinations', async (req, res) => { 

//   const longitude = Number(req.body.longitude);
//   const latitude = Number(req.body.latitude);
//   const range = Number(req.body.range);

//   console.log(longitude,latitude,range);
//   try{

//    const nearDestinations = await Destination.find({
//           location: {
//             $nearSphere: {
//               $geometry: {
//                 type: "Point",
//                 coordinates: [longitude, latitude]
//               },
//               $maxDistance: range
//             }
//           }
//         });

//         res.status(200).json(nearDestinations);

//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({"message":"Internal server error  "});
//   }
// });


// app.post("/destinations", async (req,res) => {

//   const { name , address , description , type  , longitude , latitude } = req.body;

//   try{
//     const destination = await Destination.create({
//       name, 
//       address,
//       location: {type: type, coordinates: [longitude,latitude]},
//       description: description
//     });

//     res.status(201).json({ destination: destination._id});
//   }
//   catch(err){
//     res.status(400).json({ errors: err });
//   }
// });


// app.get("/destinations/:id",(req,res) => {

//   const id = String(req.params.id);

//   Destination.findById(id)
//     .then((result) => {
//       res.status(200).json({ destination: result});
//     })
//     .catch((err) => {
//       res.status(400).json({ errors: err });
//     });
// });






//app.post("/parking-slots",(req,res) => {

//  const {name,longitude,latitude} = req.body;
//});




// app.get('/parking-slots', async  (req, res) => {
//   const longitude = Number(req.query.longitude);
//   const latitude = Number(req.query.latitude);
//   const range = Number(req.query.range);


//   try{
//   //db.collection('destinations').find({
//    const nearParkings = await  Parking.find({
//     location: {
//       $nearSphere: {
//         $geometry: {
//           type: "Point",
//           coordinates: [longitude, latitude]
//         },
//         $maxDistance: range 
//       }
//     }
//   });
  
//   res.status(200).json(nearParkings);
// }
// catch(err){
//   console.error(err);
//   res.status(500).send('Error fetching parking slots!');
// }});



// app.get("/parking-slots/:id",(req,res) => {

// });

// app.get("/events",(req,res) => {

// });
