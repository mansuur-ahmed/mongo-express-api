var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var compSchema = new Schema({});

// Export Contact model
var Company = (module.exports = mongoose.model('companies', compSchema));
