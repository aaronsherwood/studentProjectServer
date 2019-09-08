var express = require('express');
var getCSV = require('get-csv');
var app = express();
var names = [];
var urls = [];

var names1 = [];
var urls1 = [];
var names2 = [];
var urls2 = [];
var names3 = [];
var urls3 = [];

var csvLocation = 'info.csv';

getCSV(csvLocation, {headers: false})
  .then(rows => {
  	console.log("Loading info from CSV file...")
  	console.log(rows);
  	for (var i = 0; i < rows.length; i++) {
  		urls.push(rows[i][0]);
  		names.push(rows[i][1]);
      if (i<rows.length/3){
        urls1.push(rows[i][0]);
    		names1.push(rows[i][1]);
      }
      if (i>=rows.length/3 && i<(rows.length/3)*2){
        urls2.push(rows[i][0]);
    		names2.push(rows[i][1]);
      }
      if (i>=(rows.length/3)*2){
        urls3.push(rows[i][0]);
    		names3.push(rows[i][1]);
      }

  	}
  	console.log("Done");
  });

app.use(express.static(__dirname));
app.set('views', __dirname+ "/public");
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	res.render('index', {title: 'Student Projects', urls: urls, names: names});
})

app.get('/screen1', function (req, res) {
	res.render('index', {title: 'Student Projects', urls: urls1, names: names1});
})

app.get('/screen2', function (req, res) {
	res.render('index', {title: 'Student Projects', urls: urls2, names: names2});
})

app.get('/screen3', function (req, res) {
	res.render('index', {title: 'Student Projects', urls: urls3, names: names3});
})

app.listen(process.env.PORT || 3000, function () {
	console.log('Listening on port 3000!')
})
