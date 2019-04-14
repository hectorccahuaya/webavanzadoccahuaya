    
var express = require('express'),
  app = express(),
  http = require('http').Server(app),
  port = process.env.PORT || 3000,
  io = require('socket.io')(http),
  user = require('./models/user')

app.set('view engine', 'jade')
app.use('/static', express.static('public'))

io.on('connection', function (socket) {
  console.log('Usuario conectado!')
  user.show(function (data) {
    socket.emit('listar', data)
  })
  socket.on('crear', function (data) {
    
    user.create(data, function (rpta) {
      io.emit('nuevo', {rpta, mensaje: 'Usuario creado!'})
    })
  })
  socket.on('actualizar', function (data) {
    user.update(data, function (rpta) {
      io.emit('nuevo', {rpta, mensaje: 'Usuario actualizado!'})
    })
  })
  socket.on('eliminar', function (data) {
    user.delete(data , function (rpta) {
      io.emit('borrado', rpta)
    })
  })
  socket.on('disconnect', function () {
    console.log('usuario desconectado!')
  })
})

app.get('/', function (req, res) {
  res.render('main')
})
http.listen(port, function () {
  console.log('Servidor conectado en *:' + port)
})