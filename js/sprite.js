/**
 * ! Déclaration JS du sprite Character State 1 (main personnage immobile)
 */


const canvas = document.getElementById("gameCanvas"); // choppe L'ID du fichier HTML dans lequel il est utilisé
const ctx = canvas.getContext("2d");

canvas.width = 320; //définition de la largeur 
canvas.height = 320; // définition de la hauteur 

const spriteSheet = new Image(); // Déclaration de spriteSheet comme étant une image
spriteSheet.src = "/2DGAME/assets/sprites/character.png"; // Chemin d'accès au sprite 

const spriteWidth = 16;  // Largeur d'un sprite unique
const spriteHeight = 32; // Hauteur d'un sprite unique en PX

const spriteX = 0; // Colonne du sprite souhaité (0 = premier sprite)


spriteSheet.onload = () => {
    gameLoop()
    //console.log("Image chargée !");

};


function drawPlayer(posX, posY) {
    let spriteY = 0; // Ligne du sprite souhaité (0 = première ligne)
    if (direction === "down") {
        spriteY = 0
    }
    if (direction === "right") {
        spriteY = 1
    }
    if (direction === "up") {
        spriteY = 2
    }
    if (direction === "left") {
        spriteY = 3
    };
    ctx.drawImage(
        spriteSheet,
        spriteX * spriteWidth, spriteY * spriteHeight, // partie de la spritesheet à prendre
        spriteWidth, spriteHeight,                     // taille du morceau
        posX - spriteWidth / 2, posY - spriteHeight / 2, // position sur le canvas
        spriteWidth, spriteHeight                      // taille à afficher
    );
}

//Fonction Game loop

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer(key)
    drawPlayer(posX, posY)
    requestAnimationFrame(gameLoop) // Fonction Native qui re appelle une fonction avant un refresh de l'écran 
}