
var mongoose = require('mongoose'),
    Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

var user_schema = new Schema({
    email: String,
    pass: String
})
user_model = mongoose.model('user', user_schema, 'user')
module.exports = {
    login: function (req, res) {
        console.log(req.body)
        user_model.findOne({ email: req.body.username, pass: req.body.password }, function (err, items) {
            if (!err && items != null) {
                res.send(items)
            } else {
                res.send("Email y/o Contraseña incorrectos")
            }
        })
    }

}