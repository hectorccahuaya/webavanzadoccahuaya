var mongoose = require('mongoose'),
    Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/gimnasio')

var tipo_schema = new Schema({
    nombre: String,
    precio: String
});

model = mongoose.model('product', tipo_schema, 'product')

module.exports = {
    show: function (req, res) {
        model.find({}, function (err, items) {
            if (!err) {
                res.render('productos', { data: items })
            } else {
                return console.log(err)
            }
        })
    },
    ver: function (req, res) {
        model.findById({ _id: req.params.id }, function (err, items) {
            if (!err) {
                res.render('prod_editar', { data: items })
            } else {
                return console.log(err)
            }
        })
    },
    create: function (req, res) {
        var item = {
            nombre: req.body.nombre,
            precio: req.body.precio
        }
        var nuevo = new model(item).save((err, store) => {
            if (err) {
                res.status(500).send('Ocurrio un problema');
            } else {
                res.redirect('/productos')
            }
        })
    },
    edit: function (req, res) {
        model.findById({ _id: req.body.id }, function (err, producto) {
            producto.nombre = req.body.nombre,
                producto.precio = req.body.precio
            producto.save((err, update) => {
                if (err) {
                    res.status(500).send('Ocurrio un problema')
                } else {
                    res.redirect('/productos')
                }
            })
        })
    },
    delete: function (req, res) {
        model.findById({ _id: req.params.id }, function (err, producto) {
            if (err) {
                res.status(500).send('Ocurrio un problema')
            } else {
                producto.remove()
                res.redirect('/productos')
            }
        })
    }
}