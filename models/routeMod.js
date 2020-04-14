var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var routeSchema = new Schema({});

// Export Contact model
var Route = (module.exports = mongoose.model('routes', routeSchema));
