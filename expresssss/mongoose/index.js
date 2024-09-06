const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/pgpmay").then(()=>{
    console.log("connected to database")
})
const student = new mongoose.Schema({
    name: String,
    age:Number,
    email:String,
})
const students = new mongoose.model("Student",student)
const addData =async ()=>{
//     const student1 = new students({
//         name:"Adfar",
//         age:24,
//         email:"adfar@adfar.com"
//     })
//     const student2 = new students({
//         name:"Adfar2",
//         age:"34",
//         email:"adfar2@adfar.com"
//     })
//    await student1.save()
//    student2.save()
    //   students.create({
    //     name:"Amol",
    //     age:4567,
    //     email:"amol@amol.com"
    //   })
    const s1 =await students.findOne({name:"Amol"})
    console.log(s1)
}
addData()