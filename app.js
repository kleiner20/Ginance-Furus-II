var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
const path = require('path');
var mongoose = require('mongoose');

var stocks = require('./routes/stocks');
var app = express();
const PORT = process.env.PORT || 8080; // Step 1

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

mongoose.Promise = require('bluebird');
// Step 2
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/mern-crud', { promiseLibrary: require('bluebird'),useNewUrlParser: true,useUnifiedTopology: true })
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

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));  //relative path
});

app.listen(PORT, function(){
  console.log(`API server is now listening on PORT ${PORT}`)
})


module.exports = app;