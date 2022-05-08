var express = require("express");
var app = express();

app.listen(8080,()=>{
    console.log("Server is running on port 8080.")
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

function sayHello(name){
    console.log('Hello' + name);
}

sayHello('Mosh');