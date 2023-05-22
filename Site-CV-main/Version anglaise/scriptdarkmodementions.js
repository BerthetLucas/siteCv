localStorage.setItem("DarkMode", false);

const btnDarkMode = document.querySelector(".btn-darkmode");
console.log("bouton darkmode");

const entete = document.querySelector("header");
console.log("en tete");

const pieddepage = document.querySelector("footer");
console.log("pied de page");

const corpsDePage = document.querySelector("body");

const corpsDeTexte = document.querySelectorAll("p"); 

const titre1 = document.querySelector("h1"); 

const titre2 = document.querySelector("h2"); 


btnDarkMode.addEventListener("click", function(){
    console.log("bouton cliqué!");


entete.classList.toggle("header-change");
pieddepage.classList.toggle("footer-change");
corpsDePage.classList.toggle("body-change");
titre1.classList.toggle("h1-change"); 
titre2.classList.toggle("h2-change"); 

corpsDeTexte.forEach((i)=>{
    i.classList.toggle("p-change"); 
}); 

if (btnDarkMode.innerText === "Darkmode 🌙"){
    btnDarkMode.innerText = "LightMode 🌞" 
    localStorage.setItem("DarkMode", true);
}else{
    btnDarkMode.innerText = "Darkmode 🌙"
    localStorage.setItem("DarkMode", false);
};

});