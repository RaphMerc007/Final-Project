let carreaux = document.querySelectorAll(".box")
let ranger = document.getElementsByClassName("row")
let a = document.getElementById("anim")
a.addEventListener("pointerdown", animat);

// valeur de couleur initial
const G = 50
const B = 50
const R = 0
const cols = 12;

// valeur de couleur changent
let g = G;
let b = B;
let r = R;
let count= (255-G)/cols;
let x = 0

// degrader de couleurs

// pour chaque carreau
for(const carreau of carreaux){
    x++
    carreau.style.backgroundColor = "rgb("+r+", "+g+", "+b+")"; ;
    g+=count 

    if (x >= cols){
        // start new row
        x=0
        g=G
        b+=count*2
    } 
}



function animat(){
    for(const carreau of carreaux){
        // prend la couleur actuelle du carreau
        let color = carreau.style.backgroundColor

        // prend la valeur rgb 
        rgbArr = color.substring(4, color.length-1).replace(/ /g, '').split(',');

        // remet l'opposer de la couleur
        carreau.style.backgroundColor = "rgb("+(255-rgbArr[0])+","+(255-rgbArr[1])+","+(255-rgbArr[2])+")"                
        

        // je testai avec differente transformation tel que scale mais j'aime mieux sans

        // carreau.animate([
        //     // keyframes
        //     { transform: 'scale(1)' },
        //     { transform: 'scale(0.5)' },
        //     { transform: 'scale(1)' },
        //   ], {
        //     // timing options
        //     duration: 1000,
        //     iterations: 1
        //   });    
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