var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var stocks = require('./routes/stocks');
var app = express();
const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mern-crud', { promiseLibrary: require('bluebird'),useNewUrlParser: true,useUnifiedTopology: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
app.use('/api/stocks', stocks);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, function(){
  console.log(`API server is now listening on PORT ${PORT}`)
})
module.exports = app;