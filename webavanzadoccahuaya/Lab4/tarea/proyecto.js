var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    entrenadores = require('./models/entrenadores'),
    productos = require('./models/productos'),
    promociones = require('./models/promociones');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'jade')

app.get('/', function (req, res) {
    res.render('index')
})
app.get('/entrenadores', entrenadores.show)
app.get('/entrenadores/edit/:id', entrenadores.ver)
app.post('/entrenadores/edit', entrenadores.edit)
app.post('/entrenadores/create', entrenadores.create)
app.get('/entrenadores/delete/:id', entrenadores.delete)
app.get('/productos', productos.show)
app.get('/productos/edit/:id', productos.ver)
app.post('/productos/edit', productos.edit)
app.post('/productos/create', productos.create)
app.get('/productos/delete/:id', productos.delete)
app.get('/promociones', promociones.show)
app.get('/promociones/edit/:id', promociones.ver)
app.post('/promociones/edit', promociones.edit)
app.get('/promociones/create', (req, res) => {
    res.render('prom_crear')
})
app.post('/promociones/create', promociones.create)
app.get('/promociones/delete/:id', promociones.delete)
app.listen(9090, function () {
    console.log('Iniciando!')
})