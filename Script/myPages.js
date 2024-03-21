let pages = []
pages = JSON.parse(localStorage.getItem('pages')) || [];

let loginId = localStorage.getItem('session')

// si tu n'est pas logger
if (loginId != null)
    // traverse tout les pages
    for (let i = 0; i < pages.length; i++){
        // si la pages est une des pages de l'utilisateur
        if(pages[i].id == loginId)   
        {
            // ajoute la page a la liste sur la page
            var main = document.getElementById("listOfPages");
            main.insertAdjacentHTML("afterend", 
            "<div class=\"myItems\">"+
                "<img class=\"myItemImage\" src=\""+pages[i].image+"\"></img>"+
                "<h1 class=\"myItemTitle\">"+pages[i].title+" "+pages[i].price+"$</h1>"+
                "<button name=\""+i+"\" class=\"button\"> Edit </button>"+
            "</div>"); 
            
            // style la page pour avoir un image, le titre, le prix, et un boutton
            // pour voir les items un apres l'autre

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
    }
else{
    window.location.href="logIn.html";
}

// va a la page selectionner
function goToPage(){
    localStorage.setItem("pageId", this.name)
    window.location.href="editPages.html";
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