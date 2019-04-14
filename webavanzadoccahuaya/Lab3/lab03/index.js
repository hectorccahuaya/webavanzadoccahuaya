var express = require('express')
var app = express()
app.get('/',function(req,res){
    res.send('Hola mundo! en express')
})
app.post('/',function(req,res){
    res.send('Llamada al POST misma url')
})
app.put('/user',function(req,res){
    res.send('Recibimos un PUT en /user')
})
app.delete('/user',function(req,res){
    res.send('Recibimos un delete en /user')
})
app.listen(3000,function(){
    console.log('Aplicacion de ejemplo en el puerto 3000!')
});