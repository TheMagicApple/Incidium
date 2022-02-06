function login() {
  alert("!");
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("Header").style.top = "0";
  } else {
    document.getElementById("Header").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}