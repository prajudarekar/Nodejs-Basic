const express=require("express");
const app= express();

const path=require("path");
const publicPath=path.join(__dirname,"Public");


app.use(express.static(publicPath));
app.listen(3004);