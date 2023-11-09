const fs=require('fs');
const path=require("path");

const dirPath=path.join(__dirname,"curd");

console.log(dirPath);
//const filepath=dirPath+"/customfile.txt";
const filepath=`${dirPath}/customfile.txt`;

//create file
//fs.writeFileSync(filepath,"create file operation");

//read file
//fs.readFile(filepath,(err,file)=>{
  //  console.log("files:: "+file);
//})


//file update

// fs.appendFile(filepath,"and file name is filez.txt",(err)=>{
//     if(!err){
//         console.log("file is updated");
//     }
// })

// //rename file
// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log("file name is updated");
//     }
// })


//delete file
fs.unlinkSync(`${dirPath}/fruit.txt`);