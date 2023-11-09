const mysql =require("mysql");
const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"testnode"
});

conn.connect((err)=>{
    if(err)
    {
        console.log("error:: "+err);
    }
    else{
        console.log("connction sucessfully");
    }
})

module.exports=conn;