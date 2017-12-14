const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var port = 8080;

var routes = require('./routes/api');
var users = require('./routes/user');

var app  = express();

mongoose.connect('mongodb://localhost/database');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

app.use('/api', require('./routes/api'));


app.use(function (err,req,res,next){
    console.log(err);
    res.status(422).send({error:err.message});
});

//start the server 
app.listen(port, err => {
	if (err) {
		console.error(err)
	} else {
		console.log(`App is ready on port ${port}`)
	}
});