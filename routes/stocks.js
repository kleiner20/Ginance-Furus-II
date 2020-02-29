var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stocks = require('../models/Stocks.js');

/* GET ALL Stocks */
router.get('/', function(req, res, next) {
  Stocks.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Stocks BY ID */
router.get('/:id', function(req, res, next) {
  Stocks.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Stocks */
router.post('/', function(req, res, next) {
  Stocks.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Stocks */
router.put('/:id', function(req, res, next) {
  Stocks.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Stocks */
router.delete('/:id', function(req, res, next) {
  Stocks.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;