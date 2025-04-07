const botoes = document.querySelectorAll('.botao'); /* Seleciona todos os elementos com a classe 'botao' */
const personagens = document.querySelectorAll('.personagem'); /* Seleciona todos os elementos com a classe 'personagem' */


botoes.forEach((botao, indice) =>  { /* Para cada elemento selecionado, executa a função */
    botao.addEventListener("click", () =>{ /* Adiciona um evento de clique ao elemento */

        const botaoSelecionado = document.querySelector('.botao.selecionado');/* Seleciona o elemento com a classe 'selecionado' */
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add('selecionado'); /* Adiciona a classe 'selecionado' ao elemento clicado */

        const personagemSelecionado = document.querySelector('.personagem.selecionado'); /* Seleciona o elemento com a classe 'selecionado' */
        personagemSelecionado.classList.remove("selecionado"); /* Remove a classe 'selecionado' do elemento clicado */
        personagens[indice].classList.add("selecionado"); /* Faz o personagem correspondente ao botão clicado rolar para a tela */
    });
});
