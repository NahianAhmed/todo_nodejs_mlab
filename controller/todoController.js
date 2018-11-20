// for post request
var bodyParser = require('body-parser');
var postLoad=bodyParser.urlencoded({extended:false});

//mongoose setup
var mongoose=require('mongoose');
mongoose.connect('mongodb://nahian3:nahian3@ds143163.mlab.com:43163/mytodolist');

//Schema 
var schema = new mongoose.Schema({
    item:String
});

//Model creation
var todoModel = mongoose.model('todoModel',schema);


//using module for controller from express
module.exports = function(app){
    
    app.get('/',function(req,res){
        todoModel.find({},function(err,data){
          if(err) throw err;
          res.render('todo',{datas:data});
          console.log(data);
        });

    // res.render('todo');
    });
    
    app.post('/',postLoad,function(req,res){

        var newTodo=todoModel(req.body).save(function(err,data){
            if(err) throw err;
            //res.render('todo',{datas:data});
            res.redirect('/');
        });

        var data=req.body;
        console.log(data); 
    
    });

    app.get('/test',function(req,res){
        sessionStorage.setItem("name", "Smith");

    res.render('test');
    });




               
        

};