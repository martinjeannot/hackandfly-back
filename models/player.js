var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    login: String,
    password: String
});

module.exports = mongoose.model('Player', PlayerSchema);