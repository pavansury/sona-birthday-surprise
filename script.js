document.addEventListener("DOMContentLoaded", function() {
    const heart = document.getElementById("heart");
    if (heart) {
        heart.addEventListener("click", function() {
            window.location.href = "wishes.html";
        });
    }
});

function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function revealSurprise() {
    window.location.href = "surprise.html";
}

function goBack() {
    window.location.href = "wishes.html";
}
