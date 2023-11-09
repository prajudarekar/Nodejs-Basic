/*http.createServer((req,resp)=>{
    resp.write("hello this is Praakta");
    resp.end();
}).listen(4500);
*/
 function datacontrol(req,resp){
    resp.write("<h1>this is new server.....end</h1>");
    resp.end();
 }

const ht=require('http');
ht.createServer(datacontrol).listen(4400);

