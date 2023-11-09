const express =require("express");
const dbconnect=require("./mongodb");
const mongodb=require("mongodb");
const app=express();

app.use(express.json());
app.get("/",async(req,resp)=>{

    var data=await dbconnect();
    data=await data.find().toArray();
    resp.send(data);
})

app.post("/",async(req,resp)=>{
    console.log("api data ::"+req.body);
    var data=await dbconnect();
   // var result=await data.insertOne(req.body);
    var result=await data.insert(req.body);

resp.send(result);
})

app.put('/',async(req,resp)=>{
    let data=await dbconnect();
    //let result=await data.updateOne({nmae:"riya"},{$set:req.body});
    let result=await data.updateOne({nmae:req.body.nmae},{$set:req.body});
    
    resp.send(result);

})


//app.delete("/:nmae",async(req,resp)=>{
app.delete("/",async(req,resp)=>{

    let data=await dbconnect();
    //let result =await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    let result =await data.deleteOne({nmae:req.body.nmae});
    
    resp.send(result);
})
app.listen(804);
