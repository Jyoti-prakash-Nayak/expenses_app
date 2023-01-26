import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const PORT=4000;
const app=express();
app.use(cors);

await mongoose.connect("mongodb+srv://jyoti_prakash:jyoti123@cluster0.qdalemg.mongodb.net/?retryWrites=true&w=majority");
console.log('MongoDB connection is successful');


app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.listen(PORT,()=>{
   console.log("server is running at Port: 4000");
});