let resultText

const registerHandler = (_event) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const credential = new PasswordCredential({
        id: username,
        name: username,
        password: password
    });
    navigator.credentials.store(credential).then((storedCredential) => {
        resultText.innerText = `Credential stored: ${JSON.stringify(storedCredential)}`
        console.log("Credential stored: ", storedCredential);
    }, (err) => {
        resultText.innerText = `Credential store failed: ${JSON.stringify(err)}`
        console.log("Credential store failed: ", err);
    });
};

const loginHandler = (_event) => {
    const options = {
        mediation: "required",
        password: true
    };
    navigator.credentials.get(options).then((identityCredential) => {
        resultText.innerText = `Credential fetched: ${JSON.stringify(identityCredential)}`
        console.log("Credential fetched: ", identityCredential);
    }, (err) => {
        resultText.innerText = `Credential fetch failed: ${JSON.stringify(err)}`
        console.log("Credential fetch failed: ", err);
    })
};

document.addEventListener("DOMContentLoaded", (_event) => {
    resultText = document.getElementById("result");
    const registerButton = document.getElementById("register");
    const loginButton = document.getElementById("login");

    registerButton.addEventListener("click", registerHandler);
    loginButton.addEventListener("click", loginHandler);
})