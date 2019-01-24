const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const expressip = require('express-ip');
const app = express();
app.use(expressip().getIpInfoMiddleware);


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/',function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post('/s', function(req, res) {
  var user = {
    agent: req.header('user-agent'), // User Agent we get from headers
    referrer: req.header('referrer'), //  Likewise for referrer
    ip: req.ipInfo,
    screen: { // Get screen info that we passed in url post data
      width: req.body.width,
      height: req.body.height
    }
  };
  console.log(user);
  res.end();
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
