function checkFirstName() {
    const userFirstNamePattern = /[a-zA-z]{5,15}/;
    const userFirstName = document.querySelector("#fname");

    return userFirstNamePattern.test(userFirstName.value);
}

function checkLastName() {
    const userLastNamePattern = /[a-zA-z]{5,15}/;
    const userLastName = document.querySelector("#lname");

    return userLastNamePattern.test(userLastName.value)
}

function checkEmail() {
    const emailpattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const useremail = document.querySelector('#email')
    return emailpattern.test(useremail.value)
}

function checkPhone() {
    const phonepattern = /^\d{10}$/;
    const phonenumber = document.querySelector('#mobile')
    return phonepattern.test(phonenumber.value);
}


function checkCity() {
    const usercitypattern = /[a-zA-z]{3,15}/;
    const usercity = document.querySelector("#city");
    return usercitypattern.test(usercity.value);
}

function checkState() {
    const userstatepattern = /[a-zA-z]{3,15}/;
    const userstate = document.querySelector('#state');
    return userstatepattern.test(userstate.value);
}

function linking() {
    window.location.href = "./thankyou.html"
}

function set() {
    var fname = document.getElementById('fname').value;
    window.localStorage.setItem('First Name:', fname);

    var lname = document.getElementById('lname').value;
    window.localStorage.setItem('Last Name', lname);

    var email = document.getElementById('email').value;
    window.localStorage.setItem('Email', email);

    var mobile = document.getElementById('mobile').value;
    window.localStorage.setItem('Mobile', mobile);

    var gender = document.querySelector('input[name=gender]:checked').value;
    window.localStorage.setItem('Gender', gender);

    var city = document.getElementById('city').value;
    window.localStorage.setItem('City', city);

    var state = document.getElementById('state').value;
    window.localStorage.setItem('State', state);

}

function handle(event) {
    event.preventDefault();
    if (!checkFirstName()) {
        alert("Enter a valid first name");
        return;
    }

    if (!checkLastName()) {
        alert("Enter a valid last name");
        return;
    }


    if (!checkEmail()) {
        alert("Enter a valid mail");
        return;
    }

    if (!checkPhone()) {
        alert("Enter a valid phone number");
        return;
    }


    if (!checkCity()) {
        alert("Enter a valid city name");
        return;
    }

    if (!checkState()) {
        alert("Enter a valid state name");
        return;
    }

    set();
    linking();
}

document.getElementById("regis").addEventListener("click", handle);
