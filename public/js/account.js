const accountElement = document.querySelector("#Account")

function setUsername() {
  const request = new XMLHttpRequest();
  request.open("GET", "http://www.incidium.tech/api/login/info", true)
  request.send();

  request.onload = () => {
    accountElement.innerText = `Welcome ${JSON.parse(request.response).username}`;
  }
}