console.log(process.argv[2]);

const fs=require('fs');
const fname=process.argv;
if(fname[2]== "add")
{
    fs.writeFileSync(fname[3],fname[4]);

}
else if(fname[2] == "remove"){
    fs.unlinkSync(fname[3]);
}
else{
    console.log("invalid input");
}