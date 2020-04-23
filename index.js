// FileName: index.js
// Import express and Body parser
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Import routes
let apiRoutes = require('./routes/api-routes');
//Import config values
//let uriCred= require('./config.js')


// Initialize the app
let app = express();

// Configure bodyparser to handle post requests
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(bodyParser.json());

//console.log(uriCred["uriPwd"]);
console.log(process.env.userId)
console.log(process.env.pwd)

// Connect to Mongoose and set connection variable
var uri =
    'mongodb://'+process.env.userId+':'+process.env.pwd+'@' +
	// 'mongodb://mongoMan:mongo%40123@' +
	'mongocluster-shard-00-01-qoact.mongodb.net:27017,' +
	'mongocluster-shard-00-01-qoact.mongodb.net:27017,' +
	'mongocluster-shard-00-01-qoact.mongodb.net:27017/sample_training';

var options = {
	replset: {
		ssl: true,
		authSource: 'admin',
		rs_name: 'mongoCluster-shard-0'
	}
};

mongoose.connect(uri, options);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected');
	console.log('we are good now');
});

// Use Api routes in the App
app.use('/api', apiRoutes);

// Setup server port
var port = process.env.PORT || 70;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Launch app to listen to specified port
app.listen(port, function() {
	console.log('Running RestHub on port ' + port);
});
