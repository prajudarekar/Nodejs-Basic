const dbconnect=require("./mongodb");

const update=async()=>{
    var data=await dbconnect();
   // data= await data.updateOne({nmae:"manvi"},{$set:{brand:"Apple"}});
    
    data= await data.updateMany({nmae:"manvi"},{$set:{brand:"Apple",price:800}});
    console.log("data is :: "+JSON.stringify(data));
}

update();
