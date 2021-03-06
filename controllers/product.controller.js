const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return res.status(400).json(err);
    res.send(product);
  })
};

exports.product_all = function (req, res) {
  Product.find( function(err, products) {
    if (err) return res.status(400).json(err);
    // res.send(products);
    res.status(200).json(products);
  })
}

exports.product_create = function (req, res) {
  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price
    }
  );

  product.save(function (err) {
    if (err) {
      return res.status(400).json(err);
    }
    res.status(200).json(product);
    // res.send('Product Created successfully')
  })
};

exports.product_update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, product) {
    if (err) return res.status(400).json(err);
    // res.send('Product udpated.');
    res.status(200).json(product);
  });
};

exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return res.status(400).json(err);
    // res.send('Deleted successfully!');
    res.status(200).json({});
  })
};