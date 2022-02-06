const accountElement = document.querySelector("#Account")

function setUsername() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
    accountElement.innerHTML = JSON.parse(this.responseText)
    }
  }
  request.open("GET", "http://www.incidium.tech/api/login/info", true)
  request.send();

  
}