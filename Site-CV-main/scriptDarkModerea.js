

// const pour éventail

const realisation = document.querySelectorAll(".sum-rea"); 

const btn = document.querySelectorAll("i"); 

const tableau = ["Rea 1", "Rea 2", "Rea 3", "Rea 4"]; 

console.log("Réalisation"); 

console.log("btn"); 

// const pour Dark mode 

const btnDarkMode = document.querySelector(".btn-darkmode"); 
console.log("boutonDM")

const entete = document.querySelector("header");
console.log("en tete");

const pieddepage = document.querySelector("footer");
console.log("pied de page");

const corpsDePage = document.querySelector("body");

const detPourDarkMode = document.querySelectorAll(".det-rea"); 

const lienLkd = document.querySelectorAll(".lienpostlinkedin"); 


// fonction ouverture détail des réalisations. 

realisation.forEach((item)=> {
    console.log(item, "item"); 

item.addEventListener("click", function (){
    console.log("item cliqué");  
    const details = item.nextElementSibling;
    console.log("détails")

    // vraiment régler ce problème qui marche une fois sur deux 
    details.classList.toggle("det-rea-visible"); 

});

});

// fonction dark mode




btnDarkMode.addEventListener("click", function(){
    console.log("bouton cliqué"); 

    entete.classList.toggle("header-change");
    pieddepage.classList.toggle("footer-change");
    corpsDePage.classList.toggle("body-change");

    realisation.forEach((i)=>{
        i.classList.toggle("sum-rea-change");
    
    });

    detPourDarkMode.forEach((a)=>{
        a.classList.toggle("det-rea-change");
        console.log("détails changés"); 

    });

    lienLkd.forEach((b)=>{
        b.classList.toggle("lienDarkMode"); 
    }); 
    
    if (btnDarkMode.innerText === "Darkmode 🌙"){
        btnDarkMode.innerText = "LightMode 🌞" 
        localStorage.setItem("DarkMode", true);
    }else{
        btnDarkMode.innerText = "Darkmode 🌙"
        localStorage.setItem("DarkMode", false);
    };

}); 
