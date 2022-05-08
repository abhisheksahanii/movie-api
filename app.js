var express = require("express");
var app = express();

app.listen(port,()=>{
    console.log("Server is running on port 8080.")
});

const fs = require('fs');
fs.readFile('./db.json','utf-8',(err,jsonString)=>{
    if (err){
        console.log(err);
    }
    else{
        const data = JSON.parse(jsonString);
        console.log(jsonString);
    }
});

// function sayHello(name){
//     console.log('Hello' + name);
// }

// sayHello('Mosh');