// VARIABLES(S)
let resultatsAPI = "";

// MAIN
requeterApi();

//FONCTION(S)

/**
 * Fonction qui permet de requeter l'api pour lui demander l’ensemble des produits
 */
function requeterApi() {
  fetch("http://localhost:3000/api/products")
    .then(function (reponse) {
      if (reponse.ok) {
        return reponse.json(); // Retour de la réponse au format json
      }
    })
    .then(function (donneesAPI) {
      console.log(donneesAPI); // Affichage des résultats de l'API dans la console
      resultatsAPI = donneesAPI; // Stockage de "donneesAPI" dans la variable globale "resultatsAPI"
      insererProduits(resultatsAPI); // Appel de la fonction "insererProduits" prenant en paramètre "resultatsAPI" précédement défini
    })
    .catch(function (erreur) {
      console.log("Message d'erreur : \n" + erreur); // Affichage du message d'erreur dans la console
      alert("Une erreur est survenue lors du chargement"); // Affichage d'un message d'erreur à l'écran
    });
}

/**
 * Fonction qui permet d'insérer un produit dans la page d'accueil
 * @param {*} resultatsAPI sont les données récupérées lors du fetch
 */
function insererProduits(resultatsAPI) {
  for (let i = 0; i < resultatsAPI.length; i = i + 1) {
    // SELECTION DU NOEUD
    let items = document.querySelector("#items"); // Selection du noeud

    // CREATION DES DIFFERENTES BALISES
    let baliseA = document.createElement("a"); // Création de la balise <a></a>
    let baliseArticle = document.createElement("article"); // Création de la balise <article></article>
    let baliseImg = document.createElement("img"); // Création de la balise <img></img>
    let baliseH3 = document.createElement("h3"); // Création de la balise <h3></h3>
    let baliseP = document.createElement("p"); // Création de la balise <p></p>

    // AJOUT DES BALISES, CLASSES ET ATTRIBUT DANS LE DOM
    items.appendChild(baliseA); // Ajout de la balise <a></a> à la balise parente <section></section> dans le DOM
    baliseA.href = resultatsAPI[i]._id; // Ajout de l'attribut 'href' à la balise <a></a> dans le DOM

    baliseA.appendChild(baliseArticle); // Ajout de la balise <article></article> à la balise parente <a></a> dans le DOM

    baliseArticle.appendChild(baliseImg); // Ajout de la balise </img> à la balise parente <article></article> dans le DOM
    baliseImg.src = resultatsAPI[i].imageUrl; // Ajout de l'attribut 'src' à la balise </img> dans le DOM
    baliseImg.alt = resultatsAPI[i].altTxt; // Ajout de l'attribut 'alt' à la balise </img> dans le DOM

    baliseArticle.appendChild(baliseH3); // Ajout de la balise <h3></h3> à la balise parente <article></article> dans le DOM
    baliseH3.textContent = resultatsAPI[i].name; // Ajout du nom du canapé dans la balise <h3></h3> dans le DOM
    baliseH3.classList.add("productName"); // Ajout de 'class="productName"' à la balise balise <h3></h3> dans le DOM

    baliseArticle.appendChild(baliseP); // Ajout de la balise <p></p> à la balise parente <article></article> dans le DOM
    baliseP.textContent = resultatsAPI[i].description; // Ajout de la description du canapé dans la balise <p></p> dans le DOM
    baliseP.classList.add("productDescription"); // Ajout de 'class="productDescription"' à la balise <p></p> dans le DOM
  }
  console.log(items); // Affichage du résultat dans la console
}
