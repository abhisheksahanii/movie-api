const jsonServer = require('json-server');
const server = jsonServer.create();
// const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

var express = require("express");
var app = express();

// app.listen(port,()=>{
//     console.log("Server is running on port 8080.")
// });
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

  app.get('/movies', function(req, res){
        const fs = require('fs');
        fs.readFile('db.json','utf-8',(err,data) => {
            if (err) throw err;
            let movie = JSON.parse(data);
            console.log(movie);
        });
});


server.use(middlewares);
server.use(router);

server.listen(port);

// function sayHello(name){
//     console.log('Hello' + name);
// }

// sayHello('Mosh');