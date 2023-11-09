const dbconnect=require("./mongodb");

const insert= async ()=>{
var data= await dbconnect();
//data=await data.insertOne({nmae:"tanvi",brand:"normal",price:200,category:"human"});
data=await data.insertMany([{nmae:"sanvi",brand:"normal",price:200,category:"human"},

{nmae:"manvi",brand:"normal",price:300,category:"human"}]);

console.log("data is "+JSON.stringify(data));


}

insert();