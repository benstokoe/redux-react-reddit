var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    id       : String,
    language : String,
    rating   : Number
});

module.exports = Venue = mongoose.model('Venue', schema);
