var mongoose = require('mongoose'),
    Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/gimnasio')

var usuario_schema = new Schema({
    nombre: String
})

promo_model = mongoose.model('promo', usuario_schema, 'promo')

module.exports = {
    show: function (req, res) {
        promo_model.find({}, function (err, items) {
            if (!err) {
                res.render('promociones', { data: items })
            } else {
                return console.log(err)
            }
        })
    },
    ver: function (req, res) {
        promo_model.findById({ _id: req.params.id }, function (err, items) {
            if (!err) {
                res.render('prom_editar', { data: items })
            } else {
                return console.log(err)
            }
        })
    },
    create: function (req, res) {
        var nuevo = new promo_model(req.body).save((err, store) => {
            if (err) {
                res.status(500).send('Ocurrio un problema')
            } else {
                res.redirect('/promociones')
            }
        })
    },
    edit: function (req, res) {
        promo_model.findById({ _id: req.body.id }, function (err, producto) {
            producto.nombre = req.body.nombre
            producto.save((err, update) => {
                if (err) {
                    res.status(500).send('Ocurrio un problema')
                } else {
                    res.redirect('/promociones')
                }
            })
        })
    },
    delete: function (req, res) {
        promo_model.findById({ _id: req.params.id }, function (err, producto) {
            if (err) {
                res.status(500).send('Ocurrio un problema')
            } else {
                producto.remove()
                res.redirect('/promociones')
            }
        })
    }
}