const mysql=require("mysql");

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"testnode",
    insecureAuth : true

});
con.connect((err)=>{
    if(err)
    {
        console.log("error:: "+err);
    }
    else{
        console.log("connected");
    }
})

con.query("select * from student",(err,result)=>{
    var result1=JSON.stringify(result);
console.log("result:: "+result1);

});