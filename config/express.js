var express = require('express');
module.exports = function(){
  var app = express();
  app.set('views', './app/views');
  app.set('view engine', 'ejs');



  var dice = require('../app/routes/index.server.routes.js')(app);
  app.use(express.static('./bower_components'));
  return app;
};
