
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

    const usernameInputStatus = getInputStatus(usernameValue);
    const passwordInputStatus = getInputStatus(passwordValue);

    if(usernameInputStatus != null) return usernameInputStatus;
    if(passwordInputStatus != null) return passwordInputStatus;


    const request = new XMLHttpRequest();
    const requestBody = {
        "username": usernameValue,
        "password": passwordValue
    };
    request.open("POST", "/api/users")
    request.setRequestHeader("Content-type","application/json;charset=UTF-8")
    request.send(JSON.stringify(requestBody))
    console.log(requestBody)
}