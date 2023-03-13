const Destination = require("../models/destination");


const destinationIndex = async (req, res) => { 

    const { latitude , longitude , range } = req.query;
  
    console.log(longitude,latitude,range);
    try{
  
     const nearDestinations = await Destination.find({
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
  
          res.status(200).json(nearDestinations);
  
    }
    catch(err){
      console.log(err);
      res.status(500).json({"message":"Error in fetching nearby tourist destinations  "});
    } ;
};


const destinationShow = async(req,res) => {

    const id = String(req.params.id);
  
    try{
        const result = await Destination.findById(id);

        res.status(200).json({ destination: result});
    }
    catch(err){
      res.status(400).json({ errors: err });
    }
  };

const destinationCreate = async (req,res) => {

    const { name , address , description , type  , longitude , latitude } = req.body;
  
    try{
      const destination = await Destination.create({
        name, 
        address,
        location: {type: type, coordinates: [longitude,latitude]},
        description: description
      });
  
      res.status(201).json({ destination: destination._id});
    }
    catch(err){
      res.status(400).json({ errors: err });
    }
  };


  module.exports = {
    destinationIndex,
    destinationShow,
    destinationCreate
  };
