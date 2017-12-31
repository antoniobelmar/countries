var csv = require('fast-csv');
var db = require('./config/db.js');

db.country.sync({force: true}).then(function (){
  csv
  .fromPath("countriesList.csv")
  .on("data", function(data) {
    db.country.create({
      name: data[0],
    })
  })
  .on("end", function() {
    console.log("done");
  })
})
