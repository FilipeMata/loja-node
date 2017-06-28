var http = require('http');

var config = {
	host: 'localhost',
	port: '3000',
	path: '/produtos',
	method: 'post',
	headers: {
		'Accept':'application/json',
		'Content-type':'application/json'
	}
}
var client = http.request(config, function(res){
	console.log(res.statusCode);
	res.on('data', function(body){
		console.log("Body: " + body);
	});
});

var produto = {
	titulo: 'Introducao a linguagem GO',
	descricao: 'Livro de Introducao a linguagem GO',
	preco: '100'
}

client.end(JSON.stringify(produto));