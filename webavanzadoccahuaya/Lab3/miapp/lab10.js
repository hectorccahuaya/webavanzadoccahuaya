
var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
producto = require('./models/prod');
app.get('/login',function(req,res){
    res.render('login');
});
app.get('/table',function(req,res){
    res.render('table');
});
app.use(bodyParser.json());

app.set('view engine','jade');

app.get('/',function(req,res){
    res.get('Hola mundo');
})
app.get('/producto',producto.show);
app.post('/producto',producto.create);
app.post('/producto/update',producto.update);
app.post('/producto/delete',producto.delete);

app.listen(9090,function(){
    console.log('iniciando');
});