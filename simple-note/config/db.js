const mongoose = require("mongoose");

const ConnectDb = async() =>{


    try{

        await mongoose.connect(process.env.MONGO_URL);
        console.log("server  is connected");
    }

    catch(error){

        console.error("Mongo db not conncted ", error.message);

    process.exit(1);

    }
}

module.exports = ConnectDb;

