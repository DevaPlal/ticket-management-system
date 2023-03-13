    const Destination = require("../models/destination");
const Parking = require("../models/parking");

    const parkingIndex = async  (req, res) => {


      const { latitude , longitude , range } = req.query;
      
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
        res.status(500).json({ message:"Error in fetching nearby parking slots"});
      }};


      const parkingShow = async (req,res) => {

        const id = String(req.params.id);

        try{
          const result = await Destination.findById(id);

          res.status(200).json({ destionation: result});
        }
        catch(err){
          res.status(400).json({errors: err});
        }
      };

      const parkingCreate = async (req,res) => {

        const { address , totalSlots , availableSlots , type , longitude , latitude } = req.body;

        try{

          const parking = await Parking.create({
            address, 
            totalSlots,
            availableSlots,
            location : { type: type , coordinates: [longitude,latitude]}
          });

          res.status(201).json({ parking: parking._id });
        }
        catch(err){
          res.status(400).json({errors: err});
        }
      };

      module.exports = {

        parkingIndex,
        parkingCreate, 
        parkingShow,
      };

