/**
 * ? Gère le déplacement et l’état du joueur (position, vitesse, etc.).
 */

let keydown = ""; // On déclare en let keydown déjà défini par JS
addEventListener("keydown", (event) => {console.log(keydown = event.key)}); //Ajout de la fonction addEventListener : un écouteur d'événement qui détecte quand une touche du clavier est pressée
 // Met à jour la variable `keydown` avec la valeur de la touche pressée (`event.key`).
// Affiche la nouvelle valeur de `keydown` dans la console.

var frameIndex = 0

let key = {
    ArrowUp : false,
    ArrowDown : false,
    ArrowLeft : false,
    ArrowRight : false
}

if(key.addEventListener === true) {
    frameIndex +=1
} else {
    frameIndex = 0
}

function deplacement (ArrowUp) {
    if (keydown === true) {document.addEventListener("keydown", event => {spriteSheet +=2})
    }
}
