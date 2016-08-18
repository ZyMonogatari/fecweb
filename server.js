var express = require('express');
var app = express();
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));

var port = (8080);


app.get('/', function(req, res){
		res.render('home');
});

app.listen(port);