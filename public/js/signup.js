
const usernameElement = document.querySelector("#username");
const passwordElement = document.querySelector("#password");


const sqlScrubber = /('|"|:|;|=|\\|\/)/;
function getInputStatus(userInput) {
    if(userInput === "") return "Field cannot be empty"
    if(sqlScrubber.test(userInput)) return `Inputs of ', ", :, ;, =, \, / are not allow in field`
    return null
}

function signUp() {
    const usernameValue = usernameElement.value;
    const passwordValue = passwordElement.value;

    const usernameInputStatus = getInputStatus(username);
    const passwordInputStatus = getInputStatus(password);

    if(usernameInputStatus != null) return usernameInputStatus;
    if(passwordInputStatus != null) return passwordInputStatus;

    const requst = new XMLHttpRequest();
    const requestBody = {
        "username": usernameValue,
        "password": passwordValue
    };
    requst.open("POST", "/api/users")
    requst.setRequestHeader("Content-type","application/json;charset=UTF-8")
    requst.send(JSON.stringify(requestBody))
}