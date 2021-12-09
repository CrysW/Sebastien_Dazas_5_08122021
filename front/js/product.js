// VARIABLE(S)
let idRecupere = "";

// MAIN
recupererId();

// FONCTION(S)

/**
 * Fonction qui permet de récupérer l'id du produit cliqué
 */
function recupererId() {
  let parametreURL = new URLSearchParams(window.location.search); //Recupere la 'queryString' de l'URL
  let monParametre = parametreURL.get("id"); // Recupere la valeur de 'id' dans l'URL
  idRecupere = monParametre; // Stockage de "monParametre" dans la variable globale "idRecupere"
  console.log(`Le paramètre récupéré dans l'URL est ${monParametre}`); // Affichage du paramètre récupéré dans la console
}
