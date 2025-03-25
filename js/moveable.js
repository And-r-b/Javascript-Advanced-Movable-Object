// Henter bildet Id
const stickMan = document.getElementById("stick-man");
let speed = 10; // Pixel speed

// Hent skjermgrenser og bilde-størrelse
function begrensBevegelse(x, y) {
    let maxX = window.innerWidth - stickMan.clientWidth; // Maks X-verdi
    let maxY = window.innerHeight - stickMan.clientHeight; // Maks Y-verdi

    // Sørg for at posisjonen er innenfor skjermens grenser
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    return { x, y };
}

// Flytt Stickman med piltastene 
document.addEventListener("keydown", (e) => {
    let left = parseInt(stickMan.style.left) || 0;
    let top = parseInt(stickMan.style.top) || 0;

    let nyLeft = left;
    let nyTop = top;

    switch (e.key) {
        case "ArrowLeft":
            nyLeft -= speed;
            break;
        case "ArrowRight":
            nyLeft += speed;
            break;
        case "ArrowUp":
            nyTop -= speed;
            break;
        case "ArrowDown":
            nyTop += speed;
            break;
    }

    // Begrens bevegelse
    let begrensetPos = begrensBevegelse(nyLeft, nyTop);
    stickMan.style.left = begrensetPos.x + "px";
    stickMan.style.top = begrensetPos.y + "px";
});

// Flytt Stickman til museklikk posisjon
document.addEventListener("click", (e) => {
    let x = e.clientX - stickMan.clientWidth / 2;
    let y = e.clientY - stickMan.clientHeight / 2;

    // Begrens posisjon
    let begrensetPos = begrensBevegelse(x, y);
    stickMan.style.left = begrensetPos.x + "px";
    stickMan.style.top = begrensetPos.y + "px";
});
