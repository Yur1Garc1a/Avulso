function searchKaraoke() {
    var searchTerm = removeAccents(document.getElementById("search-input").value.toLowerCase());
    var titles = document.querySelectorAll("#karaoke-list .karaoke-item h2");

    titles.forEach(function (title) {
        var text = removeAccents(title.textContent.toLowerCase());
        var karaokeItem = title.closest('.karaoke-item');

        if (text.includes(searchTerm)) {
            karaokeItem.style.display = "block";
        } else {
            karaokeItem.style.display = "none";
        }
    });

    // Ocultar ou mostrar os separadores dps de pesquisar
    var separadores = document.querySelectorAll(".separador");
    var algumaMusicaEncontrada = Array.from(titles).some(function (title) {
        return title.closest('.karaoke-item').style.display !== "none";
    });

    separadores.forEach(function (separador) {
        separador.style.display = algumaMusicaEncontrada ? "none" : "block";
    });
}

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


function toggleNav() {
    var navLinks = document.getElementById("nav-links");
    navLinks.style.display = (navLinks.style.display === "none" || navLinks.style.display === "") ? "block" : "none";
}



document.getElementById("menu-icon").addEventListener("click", function() {
    toggleNav();
});

// Defina a resolução mínima desejada
var larguraMinima = 412;
var alturaMinima = 700;

// Adicione um ouvinte de redimensionamento à janela
window.addEventListener('resize', function() {
    // Verifique se a largura ou a altura está abaixo do mínimo
    if (window.innerWidth < larguraMinima || window.innerHeight < alturaMinima) {
        // Redefina as dimensões para o mínimo
        window.resizeTo(larguraMinima, alturaMinima);
    }
});