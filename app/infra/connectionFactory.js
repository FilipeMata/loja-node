mysql = require('mysql');

function createDBConnection()
{
	console.log("running dbConnection");
	return mysql.createConnection({
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'loja_nodejs'
	});
}

module.exports = function(){
	console.log("Loading conecction factory");
	return createDBConnection;  // without '()'
}