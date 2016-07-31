var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function() {
    console.log('GovHack is awesome on Port 3000');
});