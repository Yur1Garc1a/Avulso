function calcularTabuada() {
    const numero = prompt("Bota um número inteiro aí, meu chapa:");
    const resultadoTabuada = document.getElementById("resultadoTabuada");

    resultadoTabuada.innerHTML = "<h2>Tabuada de " + numero + "</h2>";

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        resultadoTabuada.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}
//Math é um objeto embutido em JavaScript que fornece funções matemáticas predefinidas.//

//A função pow() é uma dessas funções e é usada para calcular potência//

//Para Obter Conteúdo HTML:

//Se você usar elemento.innerHTML, obterá uma string que representa o conteúdo HTML dentro desse elemento. Por exemplo://


//const conteudo = document.getElementById('meuElemento').innerHTML;//

//Isso armazenará o conteúdo HTML do elemento com o ID "meuElemento" na variável conteudo.//

//Para Definir Conteúdo HTML://

//Se você usar elemento.innerHTML = novoConteudo, você substituirá o conteúdo HTML dentro desse elemento pelo novo conteúdo fornecido.//

//Por exemplo://

//document.getElementById('meuElemento').innerHTML = '<p>Novo Conteúdo</p>';//

//Isso substituirá o conteúdo atual do elemento com o ID "meuElemento" pelo parágrafo <p>Novo Conteúdo</p>.//

//No contexto das páginas da web, innerHTML é frequentemente usado para manipular o conteúdo de elementos HTML dinamicamente//

//seja para exibir informações atualizadas, responder a eventos ou criar interfaces de usuário interativas.//