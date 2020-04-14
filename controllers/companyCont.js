// companyController.js
// Import contact model
Company = require('../models/companyMod');

// Handle index actions
exports.index = function(req, res) {
	Company.find({}, function(err, company) {
		if (err) return handleError(err);

		res.json({
			message: 'company Info on view',
			data: company
		});
	});
};

// Handle view contact info
exports.view = function(req, res) {
	Company.find({ name: 'Wetpaint' }, function(err, company) {
		if (err) return handleError(err);
		if (err) {
			res.json({
				status: 'error',
				message: err
			});
		}
		console.log(JSON.stringify(company));
		if (err) res.json(err);
		res.json({
			message: 'company Info on view',
			data: company
		});
	});
};
