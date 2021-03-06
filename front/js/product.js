// VARIABLE(S)
let idRecupere = "";
let resultatsAPI = "";

// MAIN
recupererId();
requeterApi(idRecupere);
ajouterAuPanier();

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

/**
 * Fonction qui permet de requeter l'api
 * @param {*} idRecupere est l'id récupéré depuis l'url
 */
function requeterApi(idRecupere) {
  fetch(`http://localhost:3000/api/products/${idRecupere}`)
    .then(function (reponse) {
      if (reponse.ok) {
        return reponse.json(); // Retour de la réponse au format json
      }
    })
    .then(function (donneesAPI) {
      console.log(donneesAPI); // Affichage des résultats de l'API dans la console
      resultatsAPI = donneesAPI; // Stockage de "donneesAPI" dans la variable globale "resultatsAPI"
      insererDetailProduit(resultatsAPI); // Appel de la fonction "insererDetailProduit" prenant en paramètre "resultatsAPI" précédement défini
    })
    .catch(function (erreur) {
      console.log("Message d'erreur : \n" + erreur); // Affichage du message d'erreur dans la console
      alert("Une erreur est survenue lors du chargement"); // Affichage d'un message d'erreur à l'écran
    });
}

/**
 * Fonction qui permet d'insérer le produit et ses détails dans la page produit
 * @param {*} resultatsAPI sont les données récupérées lors du fetch
 */
function insererDetailProduit(resultatsAPI) {
  // SELECTION DU NOEUD
  let imageduProduit = document.querySelector(".item__img"); // Selection du noeud
  let nomDuProduit = document.querySelector("#title"); // Selection du noeud
  let prixDuProduit = document.querySelector("#price"); // Selection du noeud
  let descriptionDuProduit = document.querySelector("#description"); // Selection du noeud
  let couleurDuProduit = document.querySelector("#colors"); // Selection du noeud

  // AJOUT DE L'IMAGE
  let baliseImg = document.createElement("img"); // Création de la balise <img></img>
  imageduProduit.appendChild(baliseImg); // Ajout de la balise </img> à la balise <div class="item__img"></div>
  baliseImg.src = resultatsAPI.imageUrl; // Ajout de l'attribut 'src' à la balise </img> dans le DOM
  baliseImg.alt = resultatsAPI.altTxt; // Ajout de l'attribut 'alt' à la balise </img> dans le DOM
  console.log(imageduProduit); // Affichage du résultat dans la console

  // AJOUT DU TITRE
  console.log(resultatsAPI.name); // Affichage du nom du canapé dans la console
  nomDuProduit.textContent = resultatsAPI.name; // Ajout du nom du canapé dans la balise <h1></h1> dans le DOM

  // AJOUT DU PRIX
  console.log(resultatsAPI.price); // Affichage du prix du canapé dans la console
  prixDuProduit.textContent = resultatsAPI.price; // Ajout du prix du canapé dans la balise <p></p> dans le DOM

  // AJOUT DE LA DESCRIPTION
  console.log(resultatsAPI.description); // Affichage de la description du canapé dans la console
  descriptionDuProduit.textContent = resultatsAPI.description; // Ajout de la description du canapé dans la balise <p></p> dans le DOM

  // AJOUT DE LA COULEUR
  console.log(resultatsAPI.colors); // Affichage des couleurs disponible dans la console
  let couleurDisponible = resultatsAPI.colors; // Stockage des couleurs disponible dans une variable
  for (let i = 0; i < couleurDisponible.length; i = i + 1) {
    let baliseCouleur = document.createElement("option"); // Création de la balise <option></option>
    couleurDuProduit.appendChild(baliseCouleur); // Ajout de la balise <option></option> à la balise <select name="color-select" id="colors"></select>
    baliseCouleur.textContent = couleurDisponible[i]; // Ajout de la couleur du canapé dans la balise <option></option> dans le DOM
    console.log(
      `La couleur disponible à l'indice ${i} est ${couleurDisponible[i]}`
    ); // Affichage du résultat dans la console
  }
}

/**
 * Fonction qui permet d'ajouter l'article sélectionné dans le panier
 */
function ajouterAuPanier() {
  let ajouterAuPanier = document.querySelector("#addToCart"); // Selection du noeud
  ajouterAuPanier.addEventListener("click", function () {
    console.log("Vous avez cliquer sur 'Ajouter au panier'"); // Affichage du résultat dans la console

    // RECUPERER LA COULEUR
    let choixCouleur = document.querySelector("#colors"); // Selection du noeud
    console.log("La couleur sélectionnée est : " + choixCouleur.value);
    if (!choixCouleur.value) {
      alert("Merci de sélectionner une couleur dans la liste déroulante"); // Affichage d'un message d'erreur à l'écran
      return;
    }

    // RECUPERER LA QUANTITE
    let choixQuantite = document.querySelector("#quantity"); // Selection du noeud
    console.log("La quantité sélectionnée est : " + choixQuantite.value);
    if (choixQuantite.value == 0 || choixQuantite.value > 100) {
      alert("Merci de sélectionner une quantité entre 1 et 100"); // Affichage d'un message d'erreur à l'écran
      return;
    }

    // RECUPERER LES CARACTERISTIQUES DE L'ARTICLE
    let article = {
      id: resultatsAPI._id,
      nom: resultatsAPI.name,
      couleur: choixCouleur.value,
      quantite: choixQuantite.value,
      prix: resultatsAPI.price,
      description: resultatsAPI.description,
      image: resultatsAPI.imageUrl,
      texte: resultatsAPI.altTxt,
    };
    console.log(article);

    // AJOUTER LES ARTICLES DANS LE LOCAL STORAGE
    let articleLocalStorage = localStorage.getItem("produit"); // Récupére ce qu'il y a dans le local storage avec la clé 'produit'
    console.log(typeof articleLocalStorage); // Affiche le résultat du type dans la console => OBJET
    if (articleLocalStorage == null) {
      console.log("Le panier ne contient rien"); // Affiche ce message dans la console
      articleLocalStorage = []; // Créer un tableau vide
      console.log(articleLocalStorage); // Affiche le résultat dans la console
      articleLocalStorage.push(article); // Ajoute l'article dans le tableau précédement créé
      console.log(articleLocalStorage); // Affiche le résultat dans la console
      console.log(typeof articleLocalStorage); // Affiche le résultat du type dans la console => Objet
      localStorage.setItem("produit", JSON.stringify(articleLocalStorage)); // Sauvegarde l'article dans le local storage et transforme "articleLocalStorage" qui est un "Objet" en "String"
    } else {
      console.log("Le panier contient déja quelquechose"); // Affiche ce message dans la console
      console.log(articleLocalStorage); // Affichage du résultat
      console.log(typeof articleLocalStorage); // Affiche le résultat du type dans la console => String
      articleLocalStorage = JSON.parse(articleLocalStorage); // Transforme "articleLocalStorage" qui est une "String" en "Objet"
      console.log(typeof articleLocalStorage); // Affiche le résultat du type dans la console => Objet
      console.log(articleLocalStorage); // Affiche le résultat dans la console

      let trouveIndex = articleLocalStorage.findIndex(
        (canape) =>
          canape.id === article.id && canape.couleur === article.couleur
      ); // Recherche de l'index de l'article dans le tableau "articleLocalstorage"
      console.log(trouveIndex); // Affiche le résultat dans la console
      if (trouveIndex !== -1) {
        // true => index trouvé
        articleLocalStorage[trouveIndex].quantite =
          parseInt(articleLocalStorage[trouveIndex].quantite) +
          parseInt(choixQuantite.value); // Calcul de la nouvelle quantité
        articleLocalStorage.push(article); // Ajoute l'article dans le tableau
        articleLocalStorage.pop(); // Supprime le dernier article
        console.log(articleLocalStorage); // Affiche le résultat dans la console
        console.log(typeof articleLocalStorage); // Affiche le résultat du type dans la console => Objet
        localStorage.setItem("produit", JSON.stringify(articleLocalStorage)); // Sauvegarde l'article dans le local storage et transforme "articleLocalStorage" qui est un "Objet" en "String"
      } else {
        // false => index non trouvé
        articleLocalStorage.push(article); // Ajoute l'article dans le tableau
        console.log(articleLocalStorage); // Affiche le résultat dans la console
        console.log(typeof articleLocalStorage); // Affiche le résultat du type dans la console => Objet
        localStorage.setItem("produit", JSON.stringify(articleLocalStorage)); // Sauvegarde l'article dans le local storage et transforme "articleLocalStorage" qui est un "Objet" en "String"
      }
    }

    // AFFICHAGE DU LOCAL STORAGE
    console.log(articleLocalStorage); // Affiche le résultat dans la console
  });
}
