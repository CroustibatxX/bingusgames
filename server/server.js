const express = require("express");
var mongoose = require('mongoose');
const Router = require("./routes")

const app = express();

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://mongo:27017/bingusgames';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
    console.log("Connected successfully");
  });


app.use(express.json());

app.use('/api', Router)


// app.get('/', function(req,res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
  console.log('Connected to port ' + PORT)
})




  
