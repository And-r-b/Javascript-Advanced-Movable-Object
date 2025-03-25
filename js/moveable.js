// Henter bildet Id
const stickMan = document.getElementById("stick-man")
let speed = 10; // Pixel speed

// Flytt Stickman med piltastene 
document.addEventListener("keydown", (e) => {
    let left = parseInt(stickMan.style.left) || 0;
    let top = parseInt(stickMan.style.top) || 0;

    switch (e.key) {
        case "ArrowLeft":
            stickMan.style.left = (left - speed) + "px";
            break;
        case "ArrowRight":
            stickMan.style.left = (left + speed) + "px";
            break;
        case "ArrowUp":
            stickMan.style.top = (top - speed) + "px";
            break;
        case "ArrowDown":
            stickMan.style.top = (top + speed) + "px";
            break;
    }
});

// Flytt Stickman til museklikk posisjon

document.addEventListener("click", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    // Justering av posisjon slik at bildet sentreres der du klikker
    stickMan.style.left = (x - stickMan.width / 2) + "px";
    stickMan.style.top = (y - stickMan.height / 2) + "px";
});