const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  productName: String,
  description: String,
  price: Number,
});

module.exports = mongoose.model('Item', itemSchema);
