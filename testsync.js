console.log("first time:: ");


setTimeout(()=>{
console.log("second task");
},2000)

console.log("third task");


a=20;
b=0;

let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000)

})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})