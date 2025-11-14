const mongoose = require("mongoose");
const connectDb = async () =>{

    try{

      await mongoose.connect(process.env.MONGO_URL)

      console.log("server connected successfully");


    }

    catch(err){

        console.log("mongo connection error ",err.message)
        process.exit(1);

    }
}