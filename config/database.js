const mongoose = require("mongoose");

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,)

   
    .then(()=>console.log("Db connection done"))
    .catch((error)=>{
        console.log("Error encountered")
        console.log(error.message);
        process.exit(1);
    })

  
    
}
module.exports= dbConnect;
