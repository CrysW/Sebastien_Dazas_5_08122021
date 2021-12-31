// VARIABLE(S)
let recuperation = localStorage.getItem("numero"); // Récupére ce qu'il y a dans le local storage avec la clé 'numero'

// MAIN
afficherLeNumeroDeCommande();

// FONCTION(S)

/**
 * Fonction qui permet de récupérer le numéro de commande
 */
function afficherLeNumeroDeCommande() {
  let parametreURL = new URLSearchParams(window.location.search); //Recupere la 'queryString' de l'URL
  let monParametre = parametreURL.get("id_commande"); // Recupere la valeur de 'id_commande' dans l'URL
  console.log(`Le paramètre récupéré dans l'URL est ${monParametre}`); // Affichage du paramètre récupéré dans la console
  let numero = document.querySelector("#orderId"); // Selection du noeud
  numero.textContent = monParametre; // Ajout du numéro de la commande dans la balise <span></span> dans le DOM
}
