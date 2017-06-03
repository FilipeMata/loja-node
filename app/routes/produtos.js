module.exports = function(app)
{
	console.log("Loading produtos module");
	app.get('/produtos', function(req,res){
		var mysql = require('mysql');

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(err,results){
			if (err) throw err;
			res.render('produtos/lista', {lista: results});
		});

		connection.end();
	});
}

