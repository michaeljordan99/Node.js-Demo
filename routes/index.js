
/*
 * GET home page.
 */
module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index', { title: 'Demo' })
	});

	app.get('/demo1', function(req, res) {
		res.render('demo1', { title: 'Demo 1' })
	});
};