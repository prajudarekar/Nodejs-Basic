const dbconnect=require("./mongodb");

const main=async()=>{
    let data =await dbconnect();
data=await data.find().toArray();
var name=JSON.stringify(data)
console.log("data is:: "+JSON.stringify(data));
console.log("data nmae is:: "+name.id);

}

main();

// dbconnect().then((resp)=>{
// resp.find({}).toArray().then((data)=>{
//     console.log("data:: "+JSON.stringify(data));
// })
// })