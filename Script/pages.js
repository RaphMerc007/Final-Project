const txtTitle = document.getElementById("pageTitle")
const image = document.getElementById("pageImage")
const txtDescription = document.getElementById("pageDescription")
let followPointer = document.getElementById("followPointer")

let accounts = []
accounts = JSON.parse(localStorage.getItem('accounts')) || [];

let loginId = localStorage.getItem('session')

let pages = []
pages = JSON.parse(localStorage.getItem('pages')) || [];

let pageId = localStorage.getItem('pageId')

// montre tout l'information
txtTitle.innerText = pages[pageId].title

txtDescription.innerText = 
pages[pageId].description + 
"\n"+
"\n Prix : " + pages[pageId].price + "$"+ 
"\n Vendeur : " +accounts[pages[pageId].id].name +
"\n Contact : " + accounts[pages[pageId].id].email;

image.src = pages[pageId].image


const button = document.getElementById("button")
button.addEventListener("click", buyItem)

// acheter l'item
function buyItem(){
    // si il a un compte
    if(loginId==null){
        window.location.href="logIn.html";
    }
    // si la page appartient a l'utilisateur
    else if (loginId == pages[pageId].id){
        alert(
            "Tu ne peu pas acheter ton item!"+
            "\nPour acheter des items essayez avec l'item d'un autre utilisateur.")
    }
    // pas assez d'argent
    else if(parseInt(accounts[loginId].balance) < parseInt(pages[pageId].price)){
        alert(
            "Tu n'a pas assez d'argent!"+
            "\nIl te manque " + (pages[pageId].price - accounts[loginId].balance) + "$")
    }
    // peut acheter
    else{
        // confirm?
        let buy = confirm(
            "Voulez vous vraiment acheter : '" + pages[pageId].title + "'?"+
            "\nVous avez " + accounts[loginId].balance+"$")

        if (buy){
            // sauvegarde la nouvelle balance d'argent
            accounts[loginId].balance -= parseInt(pages[pageId].price)
            localStorage.setItem("accounts", JSON.stringify(accounts));

            // ajoute a l'historique
            let history = []
            history = JSON.parse(localStorage.getItem('purchaseHistory')) || [];

            let item = {
                id: loginId,
                title: pages[pageId].title,
                price:"-"+pages[pageId].price
            }
            
            history.push(item)
    
            localStorage.setItem("purchaseHistory", JSON.stringify(history));  


            // montre message qui explique que tu a depenser
            followPointer.style.transition = "0s";
            followPointer.innerText = item.price+"$"
            followPointer.style.opacity = 1

            function func() {
                followPointer.style.transition = "opacity 1s";
                followPointer.style.opacity = 0;
            };
              setTimeout(func, 4000);           
        }
    }
}

// message qui dit l'argent est depenser
const onPointerMove = (e) =>{
    followPointer.style.left = (e.pageX+10) + 'px';
    followPointer.style.top = (e.pageY-5) + 'px';
}

document.addEventListener('pointermove', onPointerMove);

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
