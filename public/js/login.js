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
    const request = new XMLHttpRequest();
    const requestBody = {
        "username": usernameValue,
        "password": passwordValue
    };
    request.open("POST", "http://incidium.tech/api/login", true)
    request.setRequestHeader("Contenttype-","application/json;charset=UTF-8")
    request.send(JSON.stringify(requestBody))

}