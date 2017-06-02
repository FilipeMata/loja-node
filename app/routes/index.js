module.exports = function(app){
	app.get('/', function(req,res){
		console.log("Carregando a home");
		res.render('index');
	});
}