import Login from "../client/src/components/Login";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Stocks = require('../models/Stocks.js'); 

<Route path="/login" exact component={Login} />
