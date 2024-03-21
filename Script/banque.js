var addingMoney = document.getElementById("addMoney");


let loginId = localStorage.getItem('session')

let history = []
history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];

let accounts = []
accounts = JSON.parse(localStorage.getItem('accounts')) || [];     

// si il est logged in
if (loginId != null){

    // montre le nom et le montant d'argent
    addingMoney.insertAdjacentHTML("beforebegin", 
    "<div id=\"transactions\">"+
        "<h1>Bonjour "+accounts[loginId].name+",<br>"+
        "Vous avez "+accounts[loginId].balance+"$ dans votre compte.</h1> <br>"+
        "<br>"+
        "<h2>Voici toutes vos transaction</h2>"+
    "</div>");
    
    // pour chaque transactions qui a ete faite par le compte
    for (let i = 0; i < history.length; i++){
        if(history[i].id == loginId){
            var transaction = document.getElementById("transactions");
            
            // ajoute les titre des items des transactions et leur prix
            transaction.insertAdjacentHTML("beforeend", 
            "<p class=\"item\">"+history[i].title+", "+history[i].price+"$</p>");             
        }
    }
}
else{
    // doit etre entrer dans le compte
    window.location.href="logIn.html";
}


const button = document.getElementById("transfer")
button.addEventListener("click", transferMoney)

// pour ajouter de l'argent au compte
function transferMoney(){
    // demande le montant 
    let montant = prompt("Combien d'argent voulez-vous ajouter a votre compte?");

    // si c'est un numero
    if (isNaN(montant) == false){

        // si le numeros est plus grand que 0
        if (montant > 0){

            // confirm
            let con = confirm(`Voulez vous vraiment ajouter ${montant}$ a votre compte?`);
            if(con){                    
                // ajoute l'argent au compte
                accounts[loginId].balance = parseInt(accounts[loginId].balance) + parseInt(montant)
                localStorage.setItem("accounts", JSON.stringify(accounts));
                    
                // ajoute dans une transaction dans purchaseHistory
                let tran ={
                id:loginId,
                title:"Transferer",
                price:"+"+montant
                }
                
                history.push(tran)
                localStorage.setItem("purchaseHistory", JSON.stringify(history));
                window.location.reload(); 
            }
        }
        else{
            alert("Veuillez entrez un numero plus grand que 0")
        }
    }
    else{
        alert("Ecrivez seulement des numeros")
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