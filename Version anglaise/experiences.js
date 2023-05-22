// Fonction pour récupérer les objets crée dans le JSON

document.addEventListener('DOMContentLoaded', function() {
  fetch('historique.json')
    .then(response => response.json())
    .then(data => {
      const sectionExp = document.getElementById("hist");

// Boucle for pour faire le tour des objets 

      function affichageexp(data){
        for(let i=0; i<data.length; i++){
          const exp = data[i];

// création des balises HTML

          const imageElement = document.createElement("img");
          imageElement.src =exp.image;
      
          const nomElement = document.createElement("h2");
          nomElement.innerText = exp.nom;
          nomElement.classList.add("couleur-titre");

          const posteElement = document.createElement("p");
          posteElement.innerText = exp.poste;
          posteElement.classList.add("couleur-paragraphe");

          const descriptionElement = document.createElement("p");
          descriptionElement.innerText = exp.description;
          descriptionElement.classList.add("couleur-paragraphe");

          const anneeElement = document.createElement("p");
          anneeElement.innerText = exp.annee;
          anneeElement.classList.add("couleur-paragraphe");
          
// appendchild pour générer les éléments sur la page 
          sectionExp.appendChild(imageElement)
          sectionExp.appendChild(nomElement);
          sectionExp.appendChild(posteElement);
          sectionExp.appendChild(descriptionElement);
          sectionExp.appendChild(anneeElement);
        }
      };

/*
Normalement on peux ici afficher les élements en faisant le code 
affichageexp(data);
Mais ici on ne le fait pas pour forcer l'utilisateur à jouer avec le boutons. 
*/
      const filtreMcDo = document.querySelector(".filterbutton");
      filtreMcDo.addEventListener("click", function() {
        const expMcDO = data.filter(function(exp){
          return exp.annee < 2014;
        });

        // efface le contenu de la section d'historique
        document.querySelector(".hist").innerHTML = "";

        // affiche les expériences de 2013
        affichageexp(expMcDO);
      });

      const filtreBitzer = document.querySelector(".filterbutton2");
      filtreBitzer.addEventListener("click", function() {
        const expBitzer = data.filter(function(exp){
          return exp.annee == 2014;
        });

        // efface le contenu de la section d'historique
        document.querySelector(".hist").innerHTML = "";

        // affiche les expériences de 2014
        affichageexp(expBitzer);
      });

      const filtreBitzer2 = document.querySelector(".filterbutton3");
      filtreBitzer2.addEventListener("click", function() {
        const expBitzer2 = data.filter(function(exp){
          return exp.annee > 2014;
        });

         // efface le contenu de la section d'historique
         document.querySelector(".hist").innerHTML = "";

         // Réinitalise les filtres 
         affichageexp(expBitzer2);
       });

    })
});

// Dark mode 

const btnDarkMode = document.querySelector(".btn-darkmode");
console.log("bouton darkmode");

const entete = document.querySelector("header");
console.log("en tete");

const pieddepage = document.querySelector("footer");
console.log("pied de page");

const corpsDePage = document.querySelector("body");

const btn1 = document.querySelector(".filterbutton");

const btn2 = document.querySelector(".filterbutton2");

const btn3 = document.querySelector(".filterbutton3");

// Je définie une nouvelle const parce que les const des éléments généré ne sont reconnu que dans la fonction d'appel depuis le JSON
// Mais pour l'instant je n'arrive pas à passer le texte des éléments en blanc dans le dark mode. 

const paragraphe = document.querySelector("p"); 

localStorage.setItem("DarkMode", false);

btnDarkMode.addEventListener("click", function(){
    console.log("bouton cliqué!");

entete.classList.toggle("header-change");
pieddepage.classList.toggle("footer-change");
corpsDePage.classList.toggle("body-change");
paragraphe.classList.toggle("p-change");
btn1.classList.toggle("filterbutton-change"); 
btn2.classList.toggle("filterbutton2-change");
btn3.classList.toggle("filterbutton3-change");


if (btnDarkMode.innerText === "Darkmode 🌙"){
  btnDarkMode.innerText = "LightMode 🌞" 
  localStorage.setItem("DarkMode", true);
}else{
  btnDarkMode.innerText = "Darkmode 🌙"
  localStorage.setItem("DarkMode", false);
};

});

