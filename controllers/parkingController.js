    const Parking = require("../models/parking");

    const parkingIndex = async  (req, res) => {
        const longitude = Number(req.query.longitude);
        const latitude = Number(req.query.latitude);
        const range = Number(req.query.range);
      
        try{
    
         const nearParkings = await  Parking.find({
          location: {
            $nearSphere: {
              $geometry: {
                type: "Point",
                coordinates: [longitude, latitude]
              },
              $maxDistance: range 
            }
          }
        });
        
        res.status(200).json(nearParkings);
      }
      catch(err){
        console.error(err);
        res.status(500).send('Error fetching parking slots!');
      }};


      const parkingShow = async (req,res) => {};


      module.exports = {

        parkingIndex, parkingShow
      };

