const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
  const url = location.href; 
  const href = link.href;
  if(url.includes(href)){
    link.classList.add("ativo"); // se a url atual estiver ativar, adicionar classe "ativo"
  }
}

links.forEach(ativarLink); //pecorrer todos os 3 links para saber qual está ativo

//Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event){
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if(media){
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img){
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);