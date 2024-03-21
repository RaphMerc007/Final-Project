const txtemail = document.getElementById("email")
const txtpassword = document.getElementById("password")
const txtage = document.getElementById("age")
const txtbalance = document.getElementById("balance")
const txtname = document.getElementById("name")
const button = document.getElementById("setInfo")
button.addEventListener("click", valueSender)

function valueSender(){
    // si tout les valeur ne sont pas remplie
    if(txtage.value =="" ||txtpassword.value =="" ||txtname.value =="" ||txtemail.value =="" || parseInt(txtage.value) < 0 ||parseInt(txtage.value) > 126){
        alert("Veuillez remplire toutes les boites correctement!")
    }
    else{
        let accounts = []
        accounts = JSON.parse(localStorage.getItem('accounts')) || [];

        // ajoute un nouveau profile
        let profile = {
            email: txtemail.value,
            password: txtpassword.value,
            age: txtage.value,
            name: `${txtname.value[0].toUpperCase()}${txtname.value.slice(1)}`,
            balance:txtbalance.value
        }
        
        accounts.push(profile)

        localStorage.setItem("accounts", JSON.stringify(accounts));

        window.location.href="logIn.html";
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