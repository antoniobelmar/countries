var express = require('express');
var app = express();
var db = require('./config/db.js')

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
  db.countries.findAll({
        order: [
            ['name', 'ASC'],
        ],
        attributes: ['name']
    }).then(function(data) {
    res.render('index.ejs', {countryData: data})
  })
})

module.exports = app;
