const app = require('express').Router(),
      db = require('../db');

module.exports = app;

app.get('/', function(req, res, next){
  res.render('products.html', { products: db.getProducts()});
});

app.get('/:id', function(req, res, next){
  res.render('product.html', { product: db.getProduct(req.params.id * 1)});
});

app.post('/', function(req, res, next){
  db.createProduct(req.body);
  res.redirect('/products');
});

app.delete('/:id', function(req, res, next){
  db.deleteProduct(req.params.id * 1);
  res.redirect('/products');
});
