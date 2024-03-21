let pages = []
pages = JSON.parse(localStorage.getItem('pages')) || [];

let loginId = localStorage.getItem('session')

// s'il n'est pas logger
if(loginId==null){
    window.location.href="logIn.html";
}

// traverse la liste des pages
for (let i = 0; i < pages.length; i++){      
    var main = document.getElementById("listOfPages");
    
    // ajoute a la liste des pages
    main.insertAdjacentHTML("afterend", 
    "<div class=\"myItems\">"+
        "<img class=\"myItemImage\" src=\""+pages[i].image+"\"></img>"+
        "<h1 class=\"myItemTitle\">"+pages[i].title+" "+pages[i].price+"$</h1>"+
        "<button name=\""+i+"\" class=\"button\"> Go! </button>"+
    "</div>"); 

    // style l'item pour les montrer un par dessus l'autre
    var item = document.querySelector(".myItems");
    item.style.backgroundColor = "rgb(170, 170, 170)"
    item.style.borderRadius = "10px"
    item.style.width = "fit-content"
    item.style.height = "fit-content"
    item.style.display = "flex"
    item.style.flexDirection = "row"
    item.style.margin = "20px"
    item.style.padding = "20px"
    
    var image = document.querySelector(".myItemImage");
    image.style.width = "100px"
    image.style.height = "100px"
    
    var title = document.querySelector(".title");
    image.style.margin = "0 10px"
    
    var button = document.querySelector(".button");
    button.addEventListener("click", goToPage)
    button.style.margin = "30px 20px"
    button.style.height = "40px"
    button.style.width = "50px"
    button.style.fontSize = "large"
    button.style.fontWeight = "bold"
    button.style.backgroundColor = "bold"
}

// va a la page choisi avec le page id
function goToPage(){
    localStorage.setItem("pageId", this.name)
    window.location.href="page.html";
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