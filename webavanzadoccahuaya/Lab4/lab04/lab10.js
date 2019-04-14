var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    producto = require('./models/prod'),
    usuario = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'jade');

app.get('/table', function (req, res) {
    res.render('table');
});

//Login :)

app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', usuario.login);


app.get('/', function (req, res) {
    res.send('Hola mundo!');
});


//Ruta de productos

app.get('/producto', (req, res) => {
    res.render('producto')
});
app.post('/producto', producto.create);
app.post('/producto/update', producto.update);
app.post('/producto/delete', producto.delete);

//Ruta de usuarios

app.listen(9090, function () {
    console.log('Iniciando!');
});