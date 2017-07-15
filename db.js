var products = [
  {
    id: 1,
    name: 'Foo',
    rating: 2
  },
  {
    id: 2,
    name: 'Bazz',
    rating: 4
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
  getTopProduct: function(){
    return products.reduce(function(acc, curr){
      if (acc.rating > curr.rating){
        return acc;
      } else {
        return curr;
      }
    }, products[0]);
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
