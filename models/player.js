var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    login: String,
    password: String,
    faction: Number
});

module.exports = mongoose.model('Player', PlayerSchema);