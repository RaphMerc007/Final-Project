const txtemail = document.getElementById("email")
const txtpassword = document.getElementById("password")
const button = document.getElementById("button")
button.addEventListener("click",login)

let accounts = []
accounts = JSON.parse(localStorage.getItem('accounts')) || [];

// montre les comptes
for (let i = 0; i< accounts.length; i++){
    console.log(accounts[i])
}

function login(){
    let wrong = true;

    // va a travers tout les comptes
    for(let i = 0; i < accounts.length; i++){
        // regarde si le text de l'utilisateur va avec celui du compte
        if (txtemail.value == accounts[i].email && txtpassword.value == accounts[i].password){
            // le bon email et le bon mot de passe
            // login successful
            wrong = false
            localStorage.setItem('session', i)
            window.location.href="profile.html";
        }
    }

    // on est aller a travers tout les comptes et 
    // si le mot de passe ou le email ne va pas avec aucun des comptes 
    if (wrong == true){
        alert("Le email ou le mot de passe donner est incorecte.")
    }
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