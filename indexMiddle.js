const { query } = require("express");
const express=require("express");
const app=express();
const reqFilter=require('./middle');

const route=express.Router();
route.use(reqFilter);

// const reqFilter=(req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("Please provide age");
//     }
//     else  if(req.query.age <18){
//         resp.send("You have not permisson to view page age");
//     }
//     else{
//         next();

//     }
// }

//app.use(reqFilter);

app.get('',(req,resp)=>{
    resp.send("welcome to home page");
})


app.get('/user',reqFilter,(req,resp)=>{
    resp.send("welcome to user page");
})

route.get('/help',(req,resp)=>{
    resp.send("welcome to contact page");
})

route.get('/contact',(req,resp)=>{
    resp.send("welcome to contact page");
})

app.use('/',route);
app.listen(400);