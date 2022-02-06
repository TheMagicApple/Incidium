const accountElement = document.querySelector("#Account")

function setUsername() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(this.responseText)
    accountElement.innerHTML = `Welcome ${JSON.parse(this.responseText).username}`;
    }
  }
  request.open("GET", "http://incidium.tech/api/login/info", true)
  request.send();

  
}