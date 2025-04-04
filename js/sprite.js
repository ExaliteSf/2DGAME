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

let spriteX = 0; // Colonne du sprite souhaité (0 = premier sprite)
let lastFrameTime = 0


spriteSheet.onload = () => {
    gameLoop()
    //console.log("Image chargée !");

};


function drawPlayer(posX, posY) {
    let spriteY = 0; // Ligne du sprite souhaitée (0 = première ligne)
    let drawWidth = spriteWidth;
    let sourceX = 0;

    // Déterminer la ligne Y en fonction de la direction
    if (direction === "down") spriteY = 0;
    if (direction === "right") spriteY = 1;
    if (direction === "up") spriteY = 2;
    if (direction === "left") spriteY = 3;

    // Si attaque, décaler la ligne et utiliser les offsets
    if (isAttacking) {
        if (direction === "down") spriteY = 4;
        if (direction === "up") spriteY = 5;
        if (direction === "right") spriteY = 6;
        if (direction === "left") spriteY = 7;

        const attackOffsets = [0, 34, 68, 100]; // X exacts de chaque frame d’attaque
        drawWidth = 24;
        sourceX = attackOffsets[frameIndex];
        
    } else {
        // Sinon, découpe classique
        spriteX = frameIndex;
        sourceX = spriteX * spriteWidth;
        drawWidth = spriteWidth;
    }

    ctx.drawImage(
        spriteSheet,
        sourceX, spriteY * spriteHeight,
        drawWidth, spriteHeight,
        posX - drawWidth / 2, posY - spriteHeight / 2,
        drawWidth, spriteHeight
    );
}


//Fonction Game loop

function gameLoop(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updatePlayer(key)
    if(key.ArrowUp === true || key.ArrowDown === true || key.ArrowLeft === true || key.ArrowRight === true || isAttacking === true) {
        if(time - lastFrameTime >= 125) {
            frameIndex++
            lastFrameTime = time
        }
    }
    if (isAttacking === true && frameIndex > 3) {
        isAttacking = false
        frameIndex = 0
    }
    if (frameIndex >3) {
        frameIndex = 0 
    }
    console.log(frameIndex)
    drawPlayer(posX, posY)
    requestAnimationFrame(gameLoop) // Fonction Native qui re appelle une fonction avant un refresh de l'écran 

}