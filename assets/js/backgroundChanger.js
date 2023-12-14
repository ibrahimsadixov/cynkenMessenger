const images = ["buildings-8217275_1280.webp", "cow-8349729_1280.webp", "mountains-8357180_1280.webp", "white-cheeked-turaco-8406175_1280.webp"];
const background = document.getElementById("background");
let lastRandomIndex;

function randomBackground() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === lastRandomIndex);

    lastRandomIndex = randomIndex;

    const imageUrl = `/assets/images/${images[randomIndex]}`;
    background.style.backgroundImage = `url('${imageUrl}')`;
}

window.onload = () => {
    randomBackground();
}

setInterval(() => {
    randomBackground();
}, 8000);
