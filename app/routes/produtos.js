
module.exports = function(app){
  app.get("/produtos",function(req, resp){

    var conn = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(conn);

    produtosDAO.lista(function(err, results){
      resp.format({
                html: function(){
                    resp.render("produtos/lista",{lista:results});
                },
                json: function(){
                    resp.json(results);
                }
      })
    })
    conn.end();

  });

  app.get("/produtos/form", function(req, resp){
    resp.render('produtos/form')
  })

  app.post('/produtos', function(req, resp){
    var produto = req.body;
    console.log(produto);

    var conn = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(conn);

    produtosDAO.salva(produto, function(err, results){
      resp.redirect("/produtos")
    })

    conn.end();
  })
}
