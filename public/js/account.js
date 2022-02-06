var express=require("express");
var username=req.cookies.get("username");
document.getElementById("Account").innerHTML="Welcome "+username;
