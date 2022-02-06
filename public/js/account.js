var cookieParser = require('cookie-parser');

var username=req.cookies("username");
document.getElementById("Account").innerHTML="Welcome "+username;
