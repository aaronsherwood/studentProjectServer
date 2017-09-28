var express = require('express');
var app = express();
var counter = 0;
var names = [];
var urls = []
const getCSV = require('get-csv');
getCSV('https://raw.githubusercontent.com/aaronsherwood/decodingNatureServer/master/info.csv', {headers: false})
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
    res.render('index', {title: 'Decoding Nature Student Projects', srcStr: urls[counter], name: names[counter]});
 	counter = (counter+1)%urls.length; //iterate through urls in a loop
})

app.listen(3000, function () {
	console.log('Listening on port 3000!')
})