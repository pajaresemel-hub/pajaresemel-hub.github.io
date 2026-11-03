function openLetter() {
    const letter = document.getElementById("letter");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";
    }
}

// Floating hearts animation
function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);

const music = document.getElementById("bgMusic");
const button = document.getElementById("musicButton");

button.addEventListener("click", function() {
    if (music.paused) {
        music.play()
            .then(() => {
                button.textContent = "⏸ Pause Our Song";
            })
            .catch(error => {
                alert("Cannot play music. Check your music file.");
            });
    } else {
        music.pause();
        button.textContent = "❤️ Play Our Song";
    }
});