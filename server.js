const app = require('./config/custom-express');

var server = app.listen(3000, function() {
  console.log('Servidor funcionando');
})
