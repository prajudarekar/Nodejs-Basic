const dbconnect=require("./mongodb")

const delete1 =async()=>{

    var data=await dbconnect();
   // data =await data.deleteOne({nmae:"manvi"});
   data=await data.deleteMany({price:200});
    console.log("data deleted is :: "+data);
}

delete1();