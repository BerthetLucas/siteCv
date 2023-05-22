localStorage.setItem("DarkMode", false);

const btnDarkMode = document.querySelector(".btn-darkmode");
console.log("bouton darkmode");

const entete = document.querySelector("header");
console.log("en tete");

const pieddepage = document.querySelector("footer");
console.log("pied de page");

const corpsDePage = document.querySelector("body");

const texte = document.querySelector(".texteacceuil");


btnDarkMode.addEventListener("click", function(){
    console.log("bouton cliqué!");

entete.classList.toggle("header-change");
pieddepage.classList.toggle("footer-change");
corpsDePage.classList.toggle("body-change");
texte.classList.toggle("texteacceuil-change");



if (btnDarkMode.innerText === "Darkmode 🌙"){
    btnDarkMode.innerText = "LightMode 🌞" 
    localStorage.setItem("DarkMode", true);
}else{
    btnDarkMode.innerText = "Darkmode 🌙"
    localStorage.setItem("DarkMode", false);
};

});

