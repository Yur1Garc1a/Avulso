// Adicione ou ajuste as seguintes funções no seu arquivo listaDeMusica.js

var audio = null;

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll("#navbar button");

    buttons.forEach(function (button) {
        button.addEventListener("mouseover", function () {
            button.classList.add("bounce");
        });

        button.addEventListener("mouseout", function () {
            button.classList.remove("bounce");
        });
    });
});

function playAudio(audioSrc) {
    if (audio) {
        audio.pause();
    }

    audio = new Audio(audioSrc);
    audio.play();
}

function stopAudio() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}

function changeVolume(value) {
    if (audio) {
        audio.volume = parseFloat(value);
    }
}
