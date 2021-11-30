//connecting with mongoose 
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("CONNECTED");
});

//creates schema
var kittySchema = new mongoose.Schema({
    name: String
});

//methods defination in schemab
kittySchema.methods.speak = function() {
    var greeting="MY NAME IS "+this.name
    console.log(greeting);
}

//defining model for schema.......will create  a db named Kittens(plural of passed arg)
var Kitten = mongoose.model('Kitten',kittySchema);

//declaring a object
var testData = new Kitten({name:"PQR"});
// console.log(testData.name);
// testData.speak();


//method to find data in mongodb
Kitten.find({name:"PQR"},function(err,kittens){
    if(err) console.error(err);
    console.log(kittens);
});


//method to save data to mongoDB
// use created obj name; ie testData
testData.save(function(err,testData){
    if(err) return console.error(err);
    // testData.speak();
});