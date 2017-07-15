var products = [
  {
    id: 1,
    name: 'Foo'
  },
  {
    id: 2,
    name: 'Bazz'
  }
];

module.exports = {
  getProducts: function(){
    return products;
  },
  getProduct: function(id){
    return products.filter(function(product){
      return product.id === id;
      })[0];
    },
  createProduct: function(product){
    if (!product.name){
      throw 'name is required';
    }
    product.id = Math.round(1000*Math.random());
    products.push(product);
  },
  deleteProduct: function(id){
    products = products.filter(function(product){
      return product.id !== id;
    });
  }
};
