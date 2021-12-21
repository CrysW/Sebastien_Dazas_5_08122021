// VARIABLE(S)
let recuperation = localStorage.getItem("produit");

// MAIN
recupererDonneesLocalStorage();
afficherUnTableauRecapitulatif(recuperation);
modifierQuantiteArticles(recuperation);
supprimerArticles();
totalArticles();
totalPanier();

// FONCTION(S)

/**
 * Fonction qui permet de récupérer les données stockées dans le local storage
 */
function recupererDonneesLocalStorage() {
  console.log(recuperation); // Affichage du résultat
  console.log(typeof recuperation); // Affiche le résultat du type dans la console => String
  recuperation = JSON.parse(recuperation); // Transforme "recuperation" qui est une "String" en "Objet"
  console.log(recuperation); // Affichage du résultat
  console.log(typeof recuperation); // Affiche le résultat du type dans la console => Objet
}

/**
 * Fonction qui permet d'afficher un tableau récapitulatif des achats
 * @param {} recuperation sont les données récupérées
 */
function afficherUnTableauRecapitulatif(recuperation) {
  for (let i = 0; i < recuperation.length; i = i + 1) {
    // SELECTION DU NOEUD
    let cart = document.querySelector("#cart__items"); // Selection du noeud

    // CREATION DES DIFFERENTES BALISES
    let baliseArticle = document.createElement("article"); // Création de la balise <article></article>

    let baliseDivImg = document.createElement("div"); // Création de la balise <div></div>
    let baliseImg = document.createElement("img"); // Création de la balise </img>

    let baliseDivContenu = document.createElement("div"); // Création de la balise <div></div>

    let baliseDivDescription = document.createElement("div"); // Création de la balise <div></div>
    let baliseDescriptionH2 = document.createElement("h2"); // Création de la baise <h2></h2>
    let baliseCouleurP = document.createElement("p"); // Création de la balise <p></p>
    let balisePrixP = document.createElement("p"); // Création de la balise <p></p>

    let baliseDivReglages = document.createElement("div"); // Création de la balise <div></div>
    let baliseDivQuantite = document.createElement("div"); // Création de la balise <div></div>
    let baliseQuantiteP = document.createElement("p"); // Création de la balise <p></p>
    let baliseQuantiteInput = document.createElement("input"); // Création de la balise <input></input>
    let baliseDivSupprimer = document.createElement("div"); // Création de la balise <div></div>
    let baliseSupprimerP = document.createElement("p"); // Création de la balise <p></p>

    // AJOUT DES BALISES, CLASSES ET ATTRIBUT DANS LE DOM
    cart.appendChild(baliseArticle); // Ajout de la balise <article></article> à la balise parente <section></section> dans le DOM
    baliseArticle.classList.add("cart__item"); // Ajout de 'class="cart__item" à la balise <article></article> dans le DOM
    baliseArticle.dataset.id = recuperation[i].id; // Ajout de l'attribut 'data' à la balise <article></article> dans le DOM
    baliseArticle.dataset.couleur = recuperation[i].couleur; // Ajout de l'attribut 'data' à la balise <article></article> dans le DOM

    baliseArticle.appendChild(baliseDivImg); // Ajout de la balsie <div></div> à la balise parente <article></article> dans le DOM
    baliseDivImg.classList.add("cart__item__img"); // Ajout de 'class="cart__item__img"' à la balise <div></div> dans le DOM
    baliseDivImg.appendChild(baliseImg); // Ajout de la balise </img> à la balise parente <div></div> dans le DOM
    baliseImg.src = recuperation[i].image; // Ajout de l'attribut 'src' à la balise </img> dans le DOM
    baliseImg.alt = recuperation[i].texte; // Ajout de l'attribut 'alt' à la balise </img> dans le DOM

    baliseArticle.appendChild(baliseDivContenu); // Ajout de la balise <div></div> à la balise parente <article></article> dans le DOM
    baliseDivContenu.classList.add("cart__item__content"); // Ajout de 'class="cart__item__content"' à  la balise <div></div> dans le DOM

    baliseDivContenu.appendChild(baliseDivDescription); // Ajout de la balise <div></div> à la balise parente <div></div> dans le DOM
    baliseDivDescription.classList.add("cart__item__content__titlePrice"); // Ajout de 'class="cart__item__content__titlePrice" à la balise <div></div> dans le DOM
    baliseDivDescription.appendChild(baliseDescriptionH2); // Ajout de la balise <h2></h2> à la balise parente <div></div> dans le DOM
    baliseDescriptionH2.textContent = recuperation[i].nom; // Ajout du nom du canapé dans la balise <h3></h3> dans le DOM
    baliseDivDescription.appendChild(baliseCouleurP); // Ajout de la balise <p></p> à la balise parente <div></div> dans le DOM
    baliseCouleurP.textContent = recuperation[i].couleur; // Ajout de la couleur du canapé dans la balise <p></p> dans le DOM
    baliseDivDescription.appendChild(balisePrixP); // Ajout de la balise <p></p> à la balise parente <div></div> dans le DOM
    balisePrixP.textContent = recuperation[i].prix + " €"; // Ajout du prix du canapé dans la balise <p></p> dans le DOM

    baliseDivContenu.appendChild(baliseDivReglages); // Ajout de la balise <div></div> à la balise parente <div></div> dans le DOM
    baliseDivReglages.classList.add("cart__item__content__settings"); // Ajout de 'class="cart__item__content__settings"' à la balise <div></div> dans le DOM
    baliseDivReglages.appendChild(baliseDivQuantite); // Ajout de la balise <div></div> à la balise parente <div></div> dans le DOM
    baliseDivQuantite.classList.add("cart__item__content__settings__quantity"); // Ajout de 'class="cart__item__content__settings__quantity" à la balise <div></div> dans le DOM
    baliseDivQuantite.appendChild(baliseQuantiteP); // Ajout de la balise <p></p> à la balise parente <div></div> dans le DOM
    baliseQuantiteP.textContent = "Qté : "; // Ajout de 'Qté : ' à la balise <p></p> dans le DOM
    baliseDivQuantite.appendChild(baliseQuantiteInput); // Ajout de la balise <input></input> à la balise parente <div></div> dans le DOM
    baliseQuantiteInput.type = "number"; // Ajout de l'attribut 'type' à la balise <input></input> dans le DOM
    baliseQuantiteInput.classList.add("itemQuantity"); // Ajout de 'class="itemQuantity"' à la balise <input></input> dans le DOM
    baliseQuantiteInput.name = "itemQuantity"; // Ajout de l'attribut 'name' à la balise <input></input> dans le DOM
    baliseQuantiteInput.min = "1"; // Ajout de l'attribut 'min' à la balise <input></input> dans le DOM
    baliseQuantiteInput.max = "100"; // Ajout de l'attribut 'max' à la balise <input></input> dans le DOM
    baliseQuantiteInput.value = recuperation[i].quantite; // Ajout de l'attribut 'value' à la balise <input></input> dans le DOM
    baliseDivReglages.appendChild(baliseDivSupprimer); // Ajout de la balise <div></div> à la balise parente <div></div> dans le DOM
    baliseDivSupprimer.classList.add("cart__item__content__settings__delete"); // Ajout de 'class="cart__item__content__settings__delete"' à la balise <div></div> dans le DOM
    baliseDivSupprimer.appendChild(baliseSupprimerP); // Ajout de la balise <p></p> à la balise parente <div></div> dans le DOM
    baliseSupprimerP.classList.add("deleteItem"); // Ajout de 'class="deleteItem" à la balise <div></div> dans le DOM
    baliseSupprimerP.textContent = "Supprimer"; //Ajout de 'Supprimer' la balise <p></p> dans le DOM

    console.log(cart); // Affichage du résultat dans la console
  }
}

/**
 * Fonction qui permet de modifier la quantité d'un ou des article(s)
 * @param {} recuperation sont les données récupérées
 */
function modifierQuantiteArticles(recuperation) {
  let quantites = document.querySelectorAll(".itemQuantity"); // Récupére la liste des éléments possédant la class "itemQuantity"
  console.log(quantites); // Affichage du résultat dans la console
  let articles = document.querySelectorAll("article"); // Récupére la liste des éléments <article></article>
  console.log(articles); // Affichage du résultat dans la console

  for (let i = 0; i < quantites.length; i = i + 1) {
    quantites[i].addEventListener("change", function (event) {
      let nouvelleQuantite = event.target.value; // Récupére la nouvelle quantité
      console.log(nouvelleQuantite); // Affichage du résultat dans la console
      let idArticle = articles[i].dataset.id; // Récupére le 'data-id=xxxxxx'
      console.log(idArticle); // Affichage du résultat dans la console
      let couleurArticle = articles[i].dataset.couleur; // Récupére le 'data-couleur=xxxxxx'
      console.log(couleurArticle); // Affichage du résultat dans la console

      // rechercher le canapé dans le localStorage à partir de l'index
      let trouveIndexAModifier = recuperation.findIndex(
        (i) => i.id === idArticle && i.couleur === couleurArticle
      );
      console.log(trouveIndexAModifier); // Affichage du résultat dans la console
      recuperation[trouveIndexAModifier].quantite = nouvelleQuantite; // Affectation de la valeur de 'nouvelleQuantite' à 'recuperation[trouveIndexAModifier].quantite'
      console.log(nouvelleQuantite); // Affichage du résultat dans la console
      recuperation.push(nouvelleQuantite); // Ajoute l'article dans le tableau
      recuperation.pop(); // Supprime le dernier article
      console.log(recuperation); // Affiche le résultat dans la console
      console.log(typeof recuperation); // Affiche le résultat du type dans la console => Objet
      localStorage.setItem("produit", JSON.stringify(recuperation)); // Sauvegarde l'article dans le local storage et transforme "recuperation" qui est un "Objet" en "String"
      location.reload(); // Raffraîchissement de la page
    });
  }
}

/**
 * Fonction qui permet de supprimer un ou des article(s)
 */
function supprimerArticles() {
  let boutonSupprimer = document.querySelectorAll(
    ".cart__item__content__settings__delete"
  ); // Récupère la liste des éléments possédant la class "cart__item__content__settings__delete"

  for (let i = 0; i < boutonSupprimer.length; i = i + 1) {
    boutonSupprimer[i].addEventListener("click", function () {
      let idArticleASupprimer = recuperation[i].id; // Récupére le 'data-id=xxxxxx'
      console.log(idArticleASupprimer); // Affichage du résultat dans la console
      let couleurArticleASupprimer = recuperation[i].couleur; // Récupére le 'data-couleur=xxxxxx'
      console.log(couleurArticleASupprimer); // Affichage du résultat dans la console

      // Recherche dans le local storage de l'article en fonction de l'id ou de la couleur
      recuperation = recuperation.filter(
        (canape) =>
          canape.id !== idArticleASupprimer ||
          canape.couleur !== couleurArticleASupprimer
      );
      console.log(recuperation); // Affichage du résultat dans la console
      localStorage.setItem("produit", JSON.stringify(recuperation)); // Sauvegarde l'article dans le local storage et transforme "recuperation" qui est un "Objet" en "String"
      location.reload(); // Raffraîchissement de la page
    });
  }
}

/**
 * Fonction qui permet de calculer le nombre total d'articles
 */
function totalArticles() {
  // VARIABLE(S)
  let quantiteArticle = 0; // Déclaration et initialisation de la variable

  // RECUPERATION DU NOMBRE TOTAL D'ARTICLE
  let quantite = document.querySelectorAll(".itemQuantity"); // Récupére la liste des éléments possédant la class "itemQuantity"
  console.log(quantite); // Affichage du résultat dans la console
  let totalQuantite = quantite.length; // Récupére le nombre total d'élément possédant la class "itemQuantity"
  console.log(totalQuantite); // Affichage du résultat dans la console

  for (let i = 0; i < totalQuantite; i = i + 1) {
    quantiteArticle = quantiteArticle + quantite[i].valueAsNumber; // Calcul de la quantité totale d'articles
  }
  console.log(quantiteArticle); // Affichage du résultat dans la console => Quantité totale d'articles

  // SELECTION DU NOEUD
  let totalArticle = document.querySelector("#totalQuantity"); // Selection du noeud

  // AJOUT DES BALISES, CLASSES ET ATTRIBUT DANS LE DOM
  totalArticle.textContent = quantiteArticle; // Ajout du nombre total d'article dans la balise <span></span> dans le DOM
}

/**
 * Fonction qui permet de calculer le montant total du panier
 */
function totalPanier() {
  // VARIABLE(S)
  let montantPanier = 0; // Déclaration et initialisation de la variable

  // RECUPERATION DES QUANTITES, DES PRIX ET CALCUL DU MONTANT DU PANIER
  for (let i = 0; i < recuperation.length; i = i + 1) {
    let quantiteArticle = parseInt(recuperation[i].quantite); // Récupére le nombre d'article et transformation de 'recuperation[i].quantite' qui est une 'String' en 'Number'
    let prixArticle = recuperation[i].prix; // Récupére le prix de l'article
    montantPanier = montantPanier + quantiteArticle * prixArticle; // Calcul du montant total du panier en ajoutant le résultat de la valeur précédente à la nouvelle jusqu'à la fin de parcours de la variable
    console.log(montantPanier); // Affichage du résultat => Montant total du panier
  }

  // SELECTION DU NOEUD
  let total = document.querySelector("#totalPrice"); // Selection du noeud

  // AJOUT DES BALISES, CLASSES ET ATTRIBUT DANS LE DOM
  total.textContent = montantPanier; // Ajout du nombre total d'article dans la balise <span></span> dans le DOM
}
