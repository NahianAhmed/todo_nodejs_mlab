

//setting up express
var express = require('express');
//fire express
var app = express();

var todoController=require('./controller/todoController');
//fire controller
todoController(app);


// template engine
app.set('view engine','ejs');
//using asset 
app.use(express.static('./public'));

// using port
app.listen(3000);
console.log('port is working');


