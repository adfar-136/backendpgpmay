const express = require("express")
const app = express()
app.set("view engine","hbs")
app.get("/",(req,res)=>{
    res.render("index",{data:"Adfar"})
})
app.get("/about",(req,res)=>{
    res.render("about",{name:"adfarrrrrrrrrrrrrrrrr",age:45})
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})