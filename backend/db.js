const mongoose = require("mongoose");


module.exports = () =>{

    const connectionParams = {
        useNewUrlParser : true,
        useUnifiedTypology:true,
    };

    try {
        mongoose.connect(process.env.MONGODB)
        console.log("Connected to database successfully")
        
    } 
    catch (error) {
        console.log(error);
        console.log("could not connect to database ! ");
    }

    };