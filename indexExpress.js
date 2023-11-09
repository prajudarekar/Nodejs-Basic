const express=require("express");
const app=express();

app.get('',(req,res)=>{
    console.log("data sennt by browser=> ",req.query.name);

  //  res.send("<h1>hello , this is home Page</h1>"+ req.query.name);

    res.send(`
    <h1>Html form<h1>
    <input type="text" name="uname">Username </input>
    <button type="submit" name="login" >Login</button>
    <br>
    <a href="/help" >Go to Help</a>
    `);

});


app.get('/about',(req,res)=>{
    res.send("hello , this is about Page");
});


app.get('/help',(req,res)=>{
    res.send({name:"pooja" ,city:"Pune"});
});
app.listen(203);