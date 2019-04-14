var mongoose = require('mongoose'),
  Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/gimnasio')

var categoria_schema = new Schema({
	nombre: String,
	edad: Number
})
ent_model = mongoose.model('entrenador', categoria_schema, 'entrenador')

module.exports = {
  show: function (req, res) {
  	ent_model.find({}, function (err, items) {
      if (!err) {
      	res.render('entrenadores', { data: items })
      }else {
        return console.log(err)
      }
    })
  },
  ver: function (req, res) {
  	ent_model.findById({ _id: req.params.id }, function (err, items) {
      if (!err) {
        res.render('train_edit', {data: items})
      }else {
        return console.log(err)
      }
    })
  },
  create: function (req, res) {
    var item = {
    	nombre: req.body.nombre,
		edad: req.body.edad
    }
    var nuevo = new ent_model(item).save((err, store) => {
      if (err) {
        res.status(500).send('Ocurrio un problema')
      }else {
        res.redirect('/entrenadores')
      }
    })
  },
  edit: function (req, res) {
  	ent_model.findById({ _id: req.body.id }, function (err, entre) {
  		entre.nombre = req.body.nombre,
		entre.edad = req.body.edad
  		entre.save((err, update) => {
        if (err) {
        	res.status(500).send('Ocurrio un problema')
        }else {
          res.redirect('/entrenadores')
        }
      })
    })
  },
  delete: function (req, res) {
  	ent_model.findById({ _id: req.params.id }, function (err, producto) {
      if (err) {
      	res.status(500).send('Ocurrio un problema');
      }else {
      	producto.remove();
      	res.redirect('/entrenadores');
      }
    })
  }
}