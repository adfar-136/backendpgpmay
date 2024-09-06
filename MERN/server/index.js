const express = require("express")
const app = express()
const cors = require("cors")
const User= require("./models/User")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
app.use(bodyParser.json())
app.use(cors(

))
mongoose.connect("mongodb://localhost:27017/studentt").then(()=>{
    console.log("connected to database")
})
app.post("/register",async (req,res)=>{
    const {username,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
       username:username,
       email:email,
       password:hashedPassword
    })
   await newUser.save()
   res.json("User created successfully")
})
app.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const user =await User.findOne({email})
    if(!user){
        return res.json("User not found")
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.json("Invalid password")
    }
    return res.json({message:"user logged in",email:user.email})
})
app.listen(5000,()=>{
    console.log("server is running on port 5000")
})