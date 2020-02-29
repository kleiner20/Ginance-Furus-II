var mongoose = require('mongoose');
var StocksSchema = new mongoose.Schema({
    ticker: String,
    name: String,
    close: Number,
    short_description: String,
    earnings_date: { type: Date },
    high: Number,
    low: Number,
    updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Stocks', StocksSchema);