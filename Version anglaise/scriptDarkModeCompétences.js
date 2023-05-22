
console.log("connecté"); 

// Variable scroll 

const section1 = document.querySelector(".container");

const section2 = document.querySelector(".container2"); 

const section3 = document.querySelector(".container3"); 

const content1 = document.querySelector(".content1"); 

const content2 = document.querySelector(".content2"); 

const content3 = document.querySelector(".content3"); 

// variables darkmode

const btnDarkMode = document.querySelector(".btn-darkmode"); 
console.log("boutonDM")

const titre = document.querySelectorAll("h1"); 

const entete = document.querySelector("header");
console.log("en tete");

const pieddepage = document.querySelector("footer");
console.log("pied de page");

const corpsDePage = document.querySelector("body");

const texte = document.querySelector(".texteacceuil");

// fonction texte apparait au scroll

window.addEventListener("scroll", displayModal)
    console.log("scrolling");

function displayModal() {
let hauteur = document.documentElement.scrollTop;
    console.log(hauteur, "nombre de pixels depuis le haut de la page")

if (hauteur > 90) {
        console.log("affichage content1");
        content1.style.display ="flex"; 
}//else{
  //  content1.style.display="none"; 
//}; 

if (hauteur > 350) {
    console.log("affichage content2");
    content2.style.display ="flex"; 
}//else{
   // content2.style.display="none"; 
//};

if (hauteur > 600) {
    console.log("affichage content3");
    content3.style.display ="flex"; 
}//else{
    //content3.style.display="none"; 
//}; --> sans les else la lecture final de la page est plus simple 
 

};
 


// Dark mode 

localStorage.setItem("DarkMode", false);

btnDarkMode.addEventListener("click", function (){
    console.log("bouton cliqué"); 

section1.classList.toggle("container-change"); 
console.log("container changé"); 
section2.classList.toggle("container2-change");
section3.classList.toggle("container3-change");
content1.classList.toggle("content1-change"); 
content2.classList.toggle("content2-change");
content3.classList.toggle("content3-change");
titre.forEach((i)=>{
    i.classList.toggle("h1-change"); 

entete.classList.toggle("header-change");
pieddepage.classList.toggle("footer-change");
corpsDePage.classList.toggle("body-change");

    
    
    
    if (btnDarkMode.innerText === "Darkmode 🌙"){
        btnDarkMode.innerText = "LightMode 🌞" 
        localStorage.setItem("DarkMode", true);
    }else{
        btnDarkMode.innerText = "Darkmode 🌙"
        localStorage.setItem("DarkMode", false);
    };
    
    });
});























