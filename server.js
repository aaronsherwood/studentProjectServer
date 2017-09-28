var express = require('express');
var getCSV = require('get-csv');
var app = express();
var names = [];
var urls = [];
var csvLocation = 'info.csv';	

getCSV(csvLocation, {headers: false})
  .then(rows => {
  	console.log("Loading info from CSV file...")
  	console.log(rows);
  	for (var i = 0; i < rows.length; i++) {
  		urls.push(rows[i][0]);
  		names.push(rows[i][1]);
  	}
  	console.log("Done");
  });

app.use(express.static(__dirname));
app.set('views', __dirname+ "/public");
app.set('view engine', 'jade');

app.get('/', function (req, res) {
	res.render('index', {title: 'Decoding Nature Student Projects', urls: urls, names: names});
})

app.listen(process.env.PORT || 3000, function () {
	console.log('Listening on port 3000!')
})