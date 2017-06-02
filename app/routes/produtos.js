//connectionFactory = require('../infra/connectionFactory');

module.exports = function(app)
{
	app.get('/produtos', function(req,res){
		var mysql = require('mysql');

		var connection = app.infra.connectionFactory();

		connection.query('select * from produtos', function(err,results){
			if (err) throw err;
			res.render('produtos/lista', {lista: results});
		});

		connection.end();
	});
}
