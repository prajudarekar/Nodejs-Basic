const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,"files");
console.log("dirpath:: "+dirPath);

for(i=0;i<4;i++){
    fs.writeFileSync(dirPath+"/abc"+i+".txt","all files are in file folder");
}

fs.readdir(dirPath,(err,files)=>{
    console.log("files:: "+files);
    
    //single file get
    files.forEach((items)=>{
        console.log("file name is:: "+items);
    })
})