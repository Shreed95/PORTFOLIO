const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 3500

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});
const User = mongoose.model('User', userSchema);

const server=express();

server.use(cors());

server.use(bodyParser.json());

server.post('/contactform',async (req,res)=>{
    let user=new User();
    user.name=req.body.name;
    user.email=req.body.email;
    user.message=req.body.message;
    const doc=await user.save();
    res.json(doc);
});

server.listen(PORT,()=>{
    console.log("Server Started");
})