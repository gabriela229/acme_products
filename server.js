const express = require('express'),
      nunjucks = require('nunjucks'),
      db = require('./db'),
      path = require('path');

var app = express();
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(require('body-parser').urlencoded( {extended: false} ));
app.use(require('method-override')('_method'));
app.set('html engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

app.get('/', function(req, res, next){
  res.render('index.html', {
    id: db.getTopProduct().id,
    top: db.getTopProduct().name});
});

app.use('/products', require('./routes/products'));

app.use(function(err, req, res, next){
  res.render('error.html', { error: err });
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listening on port ${ port }`);
});
