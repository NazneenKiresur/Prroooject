let res

function checkUserName() {
  const userNamePattern = /[a-zA-z]{8,15}/;
  const userName = document.querySelector("#Uname");

  return userNamePattern.test(userName.value);
}

function checkPassword() {
  const passwordpattern =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
  const userpass = document.querySelector("#Pass");

  return passwordpattern.test(userpass.value);
}

function linking() {

  
}

async function signin() {
  var name = document.getElementById("Uname").value;

  var password = document.getElementById("Pass").value;

  let user = { username: name, password: password };
 
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/signin",
      user
    );
    console.log(response.data.roles);
    if(response.data.roles[0]=="ROLE_ADMIN"){
        window.location.href = "./admin.html";
    }
    else{
        window.location.href = "./event.html";
    }
  } catch (error) {
    if (error.response) {
      console.log(error.reponse.status);
    } else {
      console.log(error.message);
    }
  }
}

function handle(event) {
  event.preventDefault();
//   if (!checkUserName()) {
//     alert("Enter a valid username");
//     return;
//   }
  if (!checkPassword()) {
    alert("Enter a valid password");
    return;
  }

  signin();

  linking();
}
document.getElementById("log").addEventListener("click", handle);
