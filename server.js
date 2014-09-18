var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(3000);