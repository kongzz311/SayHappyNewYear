const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const expressip = require('express-ip');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  const ipInfo = req.ipInfo;
    var message = `Hey, you are browsing from ${ipInfo.city}, ${ipInfo.country}`;
    res.send(message);
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
