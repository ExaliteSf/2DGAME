/**
 * ? Gère le déplacement et l’état du joueur (position, vitesse, etc.).
 */


frameIndex = 0



let key = { // Variable key qui part défaut décrete que la touche est relachée
    ArrowUp : false,
    ArrowDown : false,
    ArrowLeft : false,
    ArrowRight : false
}

addEventListener("keydown", function(event) { // Fonction Listen qui ecoute si les touches sont en état appuyés
    if (event.key === "ArrowDown") {
        key.ArrowDown = true;
    }
    if (event.key === "ArrowUp") {
        key.ArrowUp = true;
    }
    if (event.key === "ArrowLeft") {
        key.ArrowLeft = true;
    }
    if (event.key === "ArrowRight") {
        key.ArrowRight = true;
    }
}); 

addEventListener("keyup", function(event) { // Fonction Listen qui ecoute si les touches sont en état relachés
    if (event.key === "ArrowDown") {
        key.ArrowDown = false;
    }
    if (event.key === "ArrowUp") {
        key.ArrowUp = false;
    }
    if (event.key === "ArrowLeft") {
        key.ArrowLeft = false;
    }
    if (event.key === "ArrowRight") {
        key.ArrowRight = false;
    }
});

let posX = 160;

let posY = 160;

direction = "" // Aucun let ou const car on veut en faire une variable golbale et accèssible par d'autres fichiers 

function updatePlayer (key) { // function qui maj le joueur en fonction de la touche appuyée
    if(key.ArrowUp === true) {
        direction = "up"
        posY -= 1
    }
    if(key.ArrowDown === true){
        direction = "down"
        posY +=1 
    }
    if(key.ArrowRight === true) {
        direction = "right"
        posX +=1
    } 
    if(key.ArrowLeft === true) {
        direction = "left"
        posX -= 1
    }
}


