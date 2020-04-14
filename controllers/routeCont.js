// routeController.js
// Import posts model
Post = require('../models/routeMod');

// Handle view contact info
exports.view = function(req, res) {
	Post.find({ "airline.name":"Aerocondor" }, function(err, route) {
		// if (err) return handleError(err);
		console.log(JSON.stringify(route));
		if (err) res.json(err);
		res.json({
			message: 'company Info on view',
			data: route
		});
	});
};
