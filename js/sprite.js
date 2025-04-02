/**
 * ! Déclaration JS du sprite Character State 1 (main personnage immobile)
 */


const canvas = document.getElementById("gameCanvas"); // choppe L'ID du fichier HTML dans lequel il est utilisé
const ctx = canvas.getContext("2d");

canvas.width = 320; //définition de la largeur 
canvas.height = 320; // définition de la hauteur 

const spriteSheet = new Image(); // Déclaration de spriteSheet comme étant une image
spriteSheet.src = "../assets/sprites/character.png"; // Chemin d'accès au sprite 

const spriteWidth = 16;  // Largeur d'un sprite unique
const spriteHeight = 32; // Hauteur d'un sprite unique en PX

const spriteX = 0; // Colonne du sprite souhaité (0 = premier sprite)
const spriteY = 0; // Ligne du sprite souhaité (0 = première ligne)

spriteSheet.onload = () => {
    ctx.drawImage(
        spriteSheet,
        spriteX * spriteWidth, spriteY * spriteHeight, // Coordonnées dans l'image source
        spriteWidth, spriteHeight, // Taille de la portion à découper
        canvas.width / 2 - spriteWidth / 2, canvas.height / 2 - spriteHeight / 2, // Position sur le canvas
        spriteWidth, spriteHeight // Taille finale affichée
    );
};


function drawPlayer(posX, posY) {
    ctx.drawImage(
        spriteSheet,
        spriteX * spriteWidth, spriteY * spriteHeight, // partie de la spritesheet à prendre
        spriteWidth, spriteHeight,                     // taille du morceau
        posX - spriteWidth / 2, posY - spriteHeight / 2, // position sur le canvas
        spriteWidth, spriteHeight                      // taille à afficher
    );
}

//Fonction Game loop a créer 