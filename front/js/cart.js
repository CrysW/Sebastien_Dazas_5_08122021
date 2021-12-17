// VARIABLE(S)
let recuperation = localStorage.getItem("produit");

// MAIN
recupererDonneesLocalStorage();
afficherUnTableauRecapitulatif(recuperation);

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
    balisePrixP.textContent = recuperation[i].prix + "€"; // Ajout du prix du canapé dans la balise <p></p> dans le DOM

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
