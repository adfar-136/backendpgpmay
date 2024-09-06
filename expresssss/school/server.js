var express = require("express")
const app = express();
var studentArray = require("./initialData")
app.use(express.json())
app.get("/api/student",(req,res)=>{
  res.send(studentArray)
})
app.get("/api/student/:id",(req,res)=>{
    let id = req.params.id
    if(!isNaN(id)){
        id = parseInt(id)
    let studentObj = studentArray.find((item)=>{
         return item.id === id
    })
    if(studentObj === undefined){
        res.status(404).send({"message":"Student not found"})
    }
    res.send(studentObj)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
   
})
//["id","name","currentClass","division"]

app.post("/api/student",(req,res)=>{
    let reqKeys = Object.keys(req.body)
    console.log(reqKeys)
    let studentObj = req.body;
    if(reqKeys.find((item)=>{return item==="id"}) && reqKeys.find((item)=>{return item==="name"}) 
    && reqKeys.find((item)=>{return item==="currentClass"}) && reqKeys.find((item)=>{return item==="division"})){
        studentArray.push(studentObj)
         // console.log(studentObj)
        res.send(studentArray)
    } else {
        res.status(400).send({"message":"Bad Request"})
    }
    // let id  = 8;
    // let name = "Adfar";
    // let currentClass=21;
    // let division ="A";
    // studentArray.push({id:id,name:name,currentClass:currentClass,division:division});
    // res.send(studentArray)
    
})
app.put("/api/student/:id",(req,res)=>{
    let id = parseInt(req.params.id)
    let oldObj = studentArray.find((item)=>{
        return item.id === id
    })
    if(oldObj === undefined){
        res.status(404).send({"message":"Student not found"})
    } else {
        let newObj = req.body;
        let studentObj= {...oldObj,...newObj}
        let index = studentArray.indexOf(oldObj)
        studentArray.splice(index,1,studentObj)
        // studentArray.push(studentObj)
        res.send(studentArray)
    }
})
app.delete("/api/student/:id",(req,res)=>{
    let id = parseInt(req.params.id)
    let oldObj = studentArray.find((item)=>{
        return item.id === id
    })
    if(oldObj === undefined){
        res.status(404).send({"message":"Student not found"})
    } else {
       
        let index = studentArray.indexOf(oldObj)
        studentArray.splice(index,1)
        // studentArray.push(studentObj)
        res.send(studentArray)
    }
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})