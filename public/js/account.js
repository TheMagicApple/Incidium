var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function (req, res) {
  // Cookies that have not been signed
  var username=req.cookies("username");
})

var username=req.cookies("username");
document.getElementById("Account").innerHTML="Welcome "+username;
