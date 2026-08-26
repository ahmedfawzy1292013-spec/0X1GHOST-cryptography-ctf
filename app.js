function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (username === "" || password === "") {
        message.style.color = "#ff6b6b";
        message.textContent = "Please enter your username and password.";
        return;
    }

    message.style.color = "#00ff88";
    message.textContent = "Login system will be connected to the server soon.";
}


function signup() {
    const message = document.getElementById("message");

    message.style.color = "#00ff88";
    message.textContent = "Account creation will be added soon.";
}