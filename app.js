const jsonServer = require('json-server');
var express = require("express");
var app = express();

// app.listen(port,()=>{
//     console.log("Server is running on port 8080.")
// });
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


var movie = require('./db.json');


console.log(movie);
    // }); hello world






