// VARIABLE(S)
let recuperation = localStorage.getItem("numero"); // Récupére ce qu'il y a dans le local storage avec la clé 'numero'

// MAIN
afficherLeNumeroDeCommande();

// FONCTION(S)

/**
 * Fonction qui permet de récupérer le numéro de commande
 */
function afficherLeNumeroDeCommande() {
  console.log(recuperation); // Affichage du résultat
  console.log(typeof recuperation); // Affiche le résultat du type dans la console => String
  recuperation = JSON.parse(recuperation); // Transforme "recuperation" qui est une "String" en "Objet"
  for (let i = 0; i < recuperation.length; i = i + 1) {
    console.log(recuperation[i]); // Affichage du résultat dans la console
    let numero = document.querySelector("#orderId"); // Selection du noeud
    console.log(numero); // Affichage du résultat dans la console
    numero.textContent = recuperation[i]; // Ajout du numéro de la commande dans la balise <span></span> dans le DOM
  }
  localStorage.clear(); // Effacement des données produits et du numéro de commande du local storage
}
