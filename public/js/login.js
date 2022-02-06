const usernameElement = document.querySelector("#username");
const passwordElement = document.querySelector("#password");


const sqlScrubber = /('|"|:|;|=|\\|\/)/;
function getInputStatus(userInput) {
    if(userInput === "") return "Field cannot be empty"
    if(sqlScrubber.test(userInput)) return `Inputs of ', ", :, ;, =, \, / are not allow in field`
    return null
}

function login() {
    const usernameValue = usernameElement.value;
    const passwordValue = passwordElement.value;

    const usernameInputStatus = getInputStatus(username);
    const passwordInputStatus = getInputStatus(password);

    if(usernameInputStatus != null) return usernameInputStatus;
    if(passwordInputStatus != null) return passwordInputStatus;

    const loginreq = new XMLHttpRequest();
    // loginreq.open("GET", `/api/users/user?username=${usernameValue}&password=${passwordValue}`)
    // xhttp.send();
    const requst = new XMLHttpRequest();
    const requestBody = {
        "username": usernameValue,
        "password": passwordValue
    };
    requst.open("POST", "http://www.incidium.tech/api/login")
    requst.setRequestHeader("Contenttype-","application/json;charset=UTF-8")
    requst.send(JSON.stringify(requestBody))

}