var express = require('../config/express')();
var request = require('supertest')(express);

describe("#ProdutosController", function(){
	it("#listagem json", function(done){
		request.get('/produtos')
		.set('Accept','application/json')
		.expect('Content-Type',/json/)
		.expect(200,done);
	});

	it('#cadastra produtos com dados invalidos', function(done){
		request.post('/produtos')
		.send({tilulo: "", descricao: "teste"})
		.expect(400,done);
	});

	it('#cadastra produtos com dados validos', function(done){
		request.post('/produtos')
		.send({titulo:"teste livro",descricao:"novo livro",preco:20.50})
		.expect(200,done);
	});
});