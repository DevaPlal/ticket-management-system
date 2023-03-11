const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const genericRoutes = require("./routes/genericRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const parkingRoutes = require("./routes/parkingRoutes");
const eventRoutes = require("./routes/eventRoutes");


const app = express();

const PORT = 3000;

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

app.use(genericRoutes);
app.use(authRoutes);
app.use(destinationRoutes);
app.use(parkingRoutes);
app.use(eventRoutes);



