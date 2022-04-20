

function checkUserName() {
    const userNamePattern = /[a-zA-z]{8,15}/;
    const userName = document.querySelector("#Uname");

    return userNamePattern.test(userName.value)
}

function checkPassword() {
    const passwordpattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
    const userpass = document.querySelector("#Pass")

    return passwordpattern.test(userpass.value)
}

function linking() {
    window.location.href = "./event.html"
}

function handle(event) {
    event.preventDefault();
    if (!checkUserName()) {
        alert("Enter a valid username");
        return;
    }
    if (!checkPassword()) {
        alert("Enter a valid password");
        return;
    }

    linking();

}
document.getElementById("log").addEventListener("click", handle);