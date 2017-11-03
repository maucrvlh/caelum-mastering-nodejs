module.exports = (app) => {
  app.get('/produtos', function(req, res) {
    const connection = app.infra.connectionFactory();
    const livroDao = new app.dao.LivroDao(connection);

    livroDao.getAll((error, result) => {
      const livros = result;
      res.format({
        html: () => {
          res.render('produtos/lista', { livros: result });
        },
        json: () => {
          res.json(livros);
        }
      });
    });
  });

  app.get('/produtos/form', function(req, res) {
    res.render('produtos/form', { livro: '' });
  });

  app.post('/produtos', function(req, res) {
    const livro = req.body;

    req.assert('titulo', 'Título deve ser preenchido').notEmpty();
    req.assert('preco', 'Preço deve ser um número').isFloat();

    var errors = req.validationErrors();

    const connection = app.infra.connectionFactory();
    const livroDao = new app.dao.LivroDao(connection);

    if (errors) {
      console.log('Há erros de validação');
      res.format({
        html: () => {
          res.status(400).render('produtos/form', { errors, livro });
        },
        json: () => {
          res.status(400).send(errors);
        }
      });
    } else {
      livroDao.save(livro, (error, result) => {
        res.redirect('/produtos');
      });
    }
  });
}
