
const { writeIniFile } = require('write-ini-file')
const express=require("express");
const app= express();

const conn=require("./config");
const cors = require("cors");
   app.use(cors({
   origin: '*'
}));
app.use(express.json());

app.post("/student/insert/",(req,resp)=>{
    //const data={id:5,name:"rani",city:"pune"};
    const data=req.body;

    writeIniFile('foo.ini', data).then(() => {
        console.log('done')
    })
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

writeIniFile('foo.ini', {name: "raj"}).then(() => {
	console.log('done')
})


app.listen(3001);
/*
const express=require("express");
const app= express();

const path=require("path");
const publicPath=path.join(__dirname,"htmldata");


//app.use(express.static(publicPath));


app.set("view engine","ejs");


app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/About.html`)
})


app.get('/profile',(req,resp)=>{
    const user={
        name:'anil ss',
        city:'pune',
        skills:['c','c++','java']
    }
    resp.render('profile',{user});
})

app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})


app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(3001);
*/