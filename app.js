app = require('./config/express')();

app.listen(3000, function(){
	console.log("Running server");
});