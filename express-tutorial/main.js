var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var user = require('./routes/user');

var app = express();


/*var myLogger = function(req, res, next) {
    console.log('myLogger' + req.url);
    next();
};
app.use(myLogger);*/
app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/', express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello Express');
});

app.use('/user', user);



app.listen(process.env.PORT || 3000, function() {
    console.log('Example App', process.env.IP, process.env.PORT);
});
