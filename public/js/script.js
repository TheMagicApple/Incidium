function login() {
  alert("!");
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("Header").style.top = "0";
  } else {
    document.getElementById("Header").style.top = "-125px";
  }
  prevScrollpos = currentScrollPos;
}

function examine(nftNum) {
  localStorage.setItem("nftName",nftNum);
  
  window.location.href = "/nft";
}