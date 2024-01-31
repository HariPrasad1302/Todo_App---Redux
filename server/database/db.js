import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = () =>{

    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true} );

    mongoose.connection.on('connected', ()=>{
        console.log("Database Connected Successfully");

    })
    mongoose.connection.on('disconnected', ()=>{
        console.log("Database Disconnected Successfully");
    })

    mongoose.connection.on('error', ()=>{
        console.log("Database Error", error.message);
    })

}
export default Connection;