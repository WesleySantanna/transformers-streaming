/* 

Objetivo1- quando o usuario clicar no botão veja o trailler, devemos abrir o modal com o video do trailler

objetivo 2 quando clicar no x devemos fechar o modal 

Objetivo 1 
passo1 - dar um jeito  de pegar o elemento o botão na tela usando o js
passo2 - dar um jeito de identificar quando clicar no botão
passo3-pegar o elemento modal no js
passo4-abrir a modal na tela

Objetivo2
passo1- fechar o modal 
passo2- identificar o click no x
passo3-fechar a modal
*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
 modal.classList.add("aberto");
 video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src","");
});