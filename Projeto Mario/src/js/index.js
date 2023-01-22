/* 

OBJETIVO 1  -  quando o usuario clicar no botão veja o trailer, devemos abrir  a modal com o video do trailer

Objetivo  2 -  quando o usuario clicar no botão X devemos fechar a modal

OBJETIVO 1  -  quando o usuario clicar no botão veja o trailer, devemos abrir  a modal com o video do trailer
    -passo 1 - dar  um jeito de pegar o elemento que representa o botão na tela usando o js
    -passo 2 - dar um jeito de indentificar quando o usuario clicar no botão
    -passo 3 - dar um jeito de pegar o elemento modal no js
    -passo 4 - abrir a modal na tela

Objetivo  2 -  quando o usuario clicar no botão X devemos fechar a modal
    -passo 1 - dar um jeito de pegar o elemento fechar modal usando js
    -passo 2 - dar um jeito de indentificar quando o usuario clicar no X
    -passo 3 - fechar a modal

*/

console.log('mostrar o document' ,document);


console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector (".fechar-modal");
const  modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function  alternarModal(){
        modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", linkDoVideo);
} );

botaoFecharModal.addEventListener("click" , () => {
       alternarModal();
        video.setAttribute("src", "");
});




