function setUsername() {
    console.log("ASKDASKHD")
    const req = new XMLHttpRequest();

    req.onload = () => {
        console.log(req.response)
        document.querySelector("#Account").innerText = `Welcome ${JSON.parse(req.response).username}`;
    }

    req.open("GET", "/api/login/info", true);
    req.send();
}

