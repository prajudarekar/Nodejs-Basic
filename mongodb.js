const {MongoClient}=require("mongodb");
const url = "mongodb://localhost:27017";
const client=new MongoClient(url);
const database="e-comm";


async function dbconnect(){
    let result=await client.connect();   //connection done
let db=result.db(database);
//let collection=db.collection("products");
return db.collection("products");

}

module.exports=dbconnect;