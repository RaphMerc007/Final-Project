const input = document.querySelector("#input")
const itemImage = document.querySelector("#itemImage")
const txtTitle = document.getElementById("title")
const txtDescription = document.getElementById("description")
const txtPrice = document.getElementById("price")

var uploadedImg = ""
let loginId = localStorage.getItem("session")
    
// si tu n'est pas logger dans un compte
if (loginId == null){
    window.location.href="logIn.html";
}

let pageId = localStorage.getItem("pageId")

let pages = []
pages = JSON.parse(localStorage.getItem('pages')) || [];

// entrer l'information qui existe dejas
itemImage.src = pages[pageId].image
txtDescription.innerText = pages[pageId].description
txtPrice.value = pages[pageId].price
txtTitle.value = pages[pageId].title

//vas chercher l'image choisi et display la
input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploadedImg = reader.result
        itemImage.src = uploadedImg;
    });
    reader.readAsDataURL(this.files[0])
});

const button = document.getElementById("button")
button.addEventListener("click", create)

//cree la page
function create(){
    //si tout les valeurs ne sont pas remplie
    if(txtDescription.value =="" ||txtPrice.value =="" ||txtTitle.value =="" ||itemImage.src ==""){
        alert("Veuillez remplire toutes les sections!")
    }
    else if (parseInt(txtPrice.value) < 0){
        alert("Veuillez entrez un prix plus haut que 0")
    }
    else{
        //garde toute linformation de la page en memoire
        let page = {
            id: loginId,
            title: txtTitle.value,
            description: txtDescription.value,
            price: txtPrice.value,
            image: itemImage.src
        }
        
        pages[pageId] = page
        
        localStorage.setItem("pages", JSON.stringify(pages));
        window.location.href="mesPages.html";
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
//logout
function logout(){
    localStorage.removeItem("session")
    window.location.href="logIn.html";
}