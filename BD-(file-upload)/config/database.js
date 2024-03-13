const mongoose = require("mongoose");

require("dotenv").congif();

exports.connect  = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB connection succesful"))
    .catch( (error) => {
       console.log("DB Connection Issue");
       console.log(error);
       process.exit(1);
       
    });
}