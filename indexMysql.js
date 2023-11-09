const express=require("express");
const app=express();
const conn=require("./config");
app.use(express.json());
app.get("/",(req,resp)=>{
    conn.query("select * from student",(err,result)=>{
        if(err){
            resp.send("error");
        }
        else{
resp.send(result);
        }
    })
});


app.post("/",(req,resp)=>{
    //const data={id:5,name:"rani",city:"pune"};
    const data=req.body;

 //   conn.query("insert into student values (4,'sagar','delhi')",(err,result)=>{
    conn.query("insert into student set ?",data,(err,result,field)=>{

 if(err){
    resp.send("error in insert"+err);
}
else{
    resp.send(result);
}
    });
})


app.put("/:id",(req,resp)=>{
//const data=["praju","chakan",1];
const data=[req.body.name,req.body.city,req.params.id];
conn.query("update student set name=? ,city=? where id=?",data,(err,result,fields)=>{
  
 if(err){
    resp.send("error in update :: "+err);
}
else{
    resp.send(result);
}  
})

});

app.delete("/:id",(req,resp)=>{
const data=req.params.id;
conn.query("delete from student where id=?",data,(err,result)=>{
  
 if(err){
    resp.send("error in delete :: "+err);
}
else{
    resp.send(result);
}   
})

});

app.listen(304);


