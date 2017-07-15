const express = require('express'),
      nunjucks = require('nunjucks'),
      db = require('./db'),
      path = require('path');

var app = express();
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.set('html engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true
});

app.get('/', function(req, res, next){
  res.render('index.html', { top: db.getProducts()[db.getProducts().length - 1].name});
});

app.get('/products', function(req, res, next){
  res.render('products.html', { products: db.getProducts()});
});

app.get('/products/:id', function(req, res, next){
  res.render('product.html', { product: db.getProduct(req.params.id * 1)});
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`listening on port ${ port }`);
});
