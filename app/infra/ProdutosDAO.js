function ProdutosDAO(conn){
  this._conn = conn
}

ProdutosDAO.prototype.lista = function(callback){
  this._conn.query("select * from produtos", callback)
}

ProdutosDAO.prototype.salva = function(produto, callback){
  this._conn.query("insert into produtos set ?",produto, callback)
  //this._connection.query('insert into produtos (titulo, preco, descricao) values (?, ?, ?)',  [produto.titulo, produto.preco, produto.descricao], callback);
}

module.exports = function(){
  return ProdutosDAO
}
