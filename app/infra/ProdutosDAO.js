function ProdutosDAO(connection){
	this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
	this._connection.query('select * from produtos', callback);
}

ProdutosDAO.prototype.salva = function(produto, callback){
	this._connection.query('insert into produtos set ?', produto, callback);
}

ProdutosDAO.prototype.deleta = function(produto, callback){
	console.log(produto.id);
	this._connection.query('delete from produtos where id = ?', produto.id, callback);
}

module.exports = function()
{
	console.log('loading ProdutosDAO');
	return ProdutosDAO;
}