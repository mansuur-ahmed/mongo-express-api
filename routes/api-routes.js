// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();

// Import controllers
var companyController = require('../controllers/companyCont');
var routeController = require('../controllers/routeCont');


// Set default API response
router.get('/', function(req, res) {
	res.json({
		status: 'API Its Working !!',
		message: 'Welcome to RESTHub crafted with love!'
	});
});

//routes
router.route('/company').get(companyController.view);
router.route('/comp').get(companyController.index);

router.route('/route').get(routeController.view);

// Export API routess
module.exports = router;
