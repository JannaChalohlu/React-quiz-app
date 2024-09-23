import mongoose from "mongoose";

 async function connection (){
    mongoose.connection.on("connected", ()=>
    console.log("Database has been connected. ✅")
    );

    mongoose.connection.on("error", (error) =>
    console.log("Database encountered an error. ❌", error)    
)

mongoose.connect(process.env.MONGO_URL)
}

export default connection