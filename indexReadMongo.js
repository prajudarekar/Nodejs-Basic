const dbconnect=require("./mongodb");

const display =async()=>{
    let data=await dbconnect();
    data=await data.find({nmae:"manvi"}).toArray();
    console.log("show data is:: "+JSON.stringify(data));

}

display();

