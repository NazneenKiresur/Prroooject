function checkName(){
    const userFirstNamePattern = /[a-zA-z]{5,15}/;
    const userFirstName = document.querySelector("#name");
    return userFirstNamePattern.test(userFirstName.value);
}

function checkEmail(){
    const emailpattern=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    const useremail = document.querySelector('#email')
    return emailpattern.test(useremail.value)
}

function checkPhone(){
    const phonepattern = /^\d{10}$/;
    const phonenumber= document.querySelector('#mobile')
    return phonepattern.test(phonenumber.value);
}
function showPassword() {
    var x = document.getElementById("password");
    var y = document.getElementById("cpassword");
    if (x.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }


function validatePassword(p) {
    var p = document.getElementById('password').value,
        errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters"); 
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit."); 
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
}
function checkPassword(){
    
    var password=document.getElementById('password').value;
    var cpassword=document.getElementById('cpassword').value;
    const passwordValidation =  validatePassword();
    if(passwordValidation){
        if(password!=cpassword){
            alert('The entered password does not match with confirm password')
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }

}

function linking(){
    window.location.href="./login.html"
}



function set(){
    var name=document.getElementById('name').value;
    window.localStorage.setItem('Name:',name);

    var email=document.getElementById('email').value;
    window.localStorage.setItem('Email',email);

    var mobile=document.getElementById('mobile').value;
    window.localStorage.setItem('Mobile',mobile);

    var password=document.getElementById('password').value;
    window.localStorage.setItem('Password',password);

    var gender=document.querySelector('input[name=gender]:checked').value;
    window.localStorage.setItem('Gender',gender);
}

function handle(event){
    event.preventDefault();
    if(!checkName()) { 
        alert("Enter a valid name"); 
        return;
    }

    if(!checkEmail() ){ 
        alert("Enter a valid mail"); 
        return;
    }
    
    if(!checkPhone() ){ 
        alert("Enter a valid phone number"); 
        return;
    }
    if(!checkPassword()){
        return;
    }

    set();
    linking();
}

document.getElementById("REGISTER").addEventListener("click",handle);



