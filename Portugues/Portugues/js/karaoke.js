document.addEventListener("DOMContentLoaded", function () {
    var searchInput = document.getElementById('search-input');

    searchInput.addEventListener("input", searchKaraoke);

    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function searchKaraoke() {
        var searchTerm = removeAccents(searchInput.value.toLowerCase().trim());
        var musicas = document.querySelectorAll('.karaoke-item');

        musicas.forEach(function (musica) {
            var tituloMusicaElement = musica.querySelector('h2');

            // Verifica se o título da música foi encontrado
            if (tituloMusicaElement) {
                var tituloMusica = removeAccents(tituloMusicaElement.textContent.toLowerCase().trim());

                // Verifica se a música corresponde ao termo de pesquisa em qualquer parte do título
                var matches = tituloMusica.includes(searchTerm);

                // Atualiza o estilo de exibição com base na correspondência
                musica.style.display = matches ? 'block' : 'none';
            }
        });
    }
    
    // Adiciona um evento para reexibir todas as músicas quando o termo de pesquisa é removido
    searchInput.addEventListener("blur", function () {
        if (searchInput.value.trim() === '') {
            var musicas = document.querySelectorAll('.karaoke-item');
            musicas.forEach(function (musica) {
                musica.style.display = 'block';
            });
        }
    });
});
m