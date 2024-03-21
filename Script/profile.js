const txtemail = document.getElementById("email")
const txtpassword = document.getElementById("password")
const txtage = document.getElementById("age")
const txtname = document.getElementById("name")
const txtbalance = document.getElementById("balance")

let accounts = []
accounts = JSON.parse(localStorage.getItem('accounts')) || [];

let loginId =localStorage.getItem('session');

// s'il n'y a pas de login
if (loginId == null)
    window.location.href="login.html";
else{
    // montre l'information du compte
    txtemail.innerText = accounts[loginId].email
    txtpassword.innerText = accounts[loginId].password
    txtage.innerText = accounts[loginId].age
    txtname.innerText = accounts[loginId].name
    txtbalance.innerText = accounts[loginId].balance + "$"
}

// menu responsive
function res() {
    var x = document.getElementById("header_middle");
    if (x.className === "header_middle") {
      x.className += " responsive";
    } else {
      x.className = "header_middle";
    }
  }
function logout(){
    localStorage.removeItem("session")
    window.location.href="logIn.html";
}