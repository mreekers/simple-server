var express = require('express');

var app = express();

app.get('/', function(req,res) {

  res.send("Hello World");
});

app.get('/add/:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x + y;
	res.send("Sum is " + sum);

});

app.get('/sub:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x - y;
	res.send("Sum is " + sum);

});

app.get('/mult/:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x * y;
	res.send("Sum is " + sum);

});

app.get('/div/:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x / y;
	res.send("Sum is " + sum);

});

app.listen(3000);