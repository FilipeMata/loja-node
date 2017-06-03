var express = require('express');
var load = require('express-load');


module.exports = function()
{
	console.log("Loading express configs");
	var app = express();

	app.set('views', './app/views/');
	app.set('view engine', 'ejs');

	load('routes',{cwd: 'app'})
	.then('infra')
	.into(app);

	return app;
}
