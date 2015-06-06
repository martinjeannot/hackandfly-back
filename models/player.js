var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    login: {type: String, required: true, index: {unique: true, sparse: true}},
    password: {type: String, required: true},
    score: {type: Number, required: true}
});

module.exports = mongoose.model('Player', PlayerSchema);