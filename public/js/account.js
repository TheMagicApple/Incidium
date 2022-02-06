const accountElement = document.querySelector("#Account")

function setUsername() {
  const request = new XMLHttpRequest();
  request.open("GET", "http://www.incidium.tech/api/login/info", true)
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(request.responseText)
      accountElement.innerText = `Welcome ${JSON.parse(request.responseText).username}`;
    }
  }
  request.send();

  
}