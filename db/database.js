var mongoose = require('mongoose');
// this connects us to our database
var connectionString = process.env.DB

console.log('Attempting to connect to MongoDB');

//connect to the db supplied in the connectionString
mongoose.connect(connectionString);

// we can listen for three things: CONNECTED, ERROR, DISCONNECTED

mongoose.connection.on('connected', function(){
  // this lists the database we are connected to below
  console.log('Mongoose connected to: ' + process.env.DB);
});

mongoose.connection.on('disconnected', function(){
  console.log('Mongoose is disconnected!');
});

mongoose.connection.on('error', function(err){
  console.log('Mongoose connection error: ' + err)
})



// listen for the 'error' and 'disconnected' events
// log out something when either occur
// then kill your server.
// which even fired?
// restart your server..
// then, go find the terminal tab running sudo Mongod
// kill it
// which event fired?
// when done.. restart sudo mongod and get ready
// for block #2
