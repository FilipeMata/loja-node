module.exports = function(app)
{
	console.log("Loading produtos module");
	app.get('/produtos', function(req,res){
		var mysql = require('mysql');

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(err,results){
			if (err) throw err;

			res.format({
				json: function()
				{
					res.json(results);
				},

				html: function()
				{
					res.render('produtos/lista', {lista: results});
				}
			});
		});

		connection.end();
	});

	app.get('/produtos/form', function(req, res){
		res.render('produtos/form', {validationErrors: {}, produto: {}});
	});

	app.post('/produtos', function(req, res)
	{
		var produto = req.body;

		req.assert('titulo', 'Titulo deve ser obrigatorio').notEmpty();
		req.assert('preco', 'Formato inválido').isFloat();

		var errors = req.validationErrors();

		if(errors){
			res.format({
				json: function(){
					res.status(400).json(errors);
				},
				html: function(){
					res.status(400).render('produtos/form', {validationErrors: errors, produto: produto});
				}
			});
			return;
		}

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.salva(produto, function(err, results){
			res.format({
				json: function(){
					res.json(produto);
				},
				html: function(){
					res.redirect('/produtos');
				}
			});
		});

		connection.end();
	});

	app.delete('/produtos', function(req,res){
		var produto = req.body;
		console.log(produto);
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.deleta(produto, function(err, result){
			console.log('200');
			//res.redirect('/produtos');
		});

		connection.end();
	});
}
