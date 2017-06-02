app = require('./config/express')();

//var listaProdutos = require('./app/routes/produtos')(app);
//var home = require('./app/routes/index')(app);

app.listen(3000, function(){
	console.log("Running server");
});