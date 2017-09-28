var fs = require('fs');
var path = require("path");
var csv = require("fast-csv");
var express = require('express');
var app = express();
var counter = 0;
var names = [];
var urls = []
var stream = fs.createReadStream("info.csv");

csv
 .fromStream(stream, {ignoreEmpty: true})
 .on("data", function(data){
     console.log(data);
     urls.push(data[0]);
     names.push(data[1]);
 })
 .on("end", function(){
     console.log("done");
 });

app.use(express.static(__dirname));
app.set('views', __dirname+ "/public");
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', {title: 'Decoding Nature Student Projects', srcStr: urls[counter], name: names[counter]});
    // var r = Math.floor(Math.random()*urls.length); //random variation
 	counter = (counter+1)%urls.length; //iterate through urls in a loop
})

app.listen(3000, function () {
	console.log('Listening on port 3000!')
	console.log(names);
})