// MENU ATIVO HEADER
const links = document.querySelectorAll(".header-menu a");
function adicionarAtivo(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
    console.log("Menu Ativo no Header = True");
  }
}
links.forEach(adicionarAtivo);
//



// PARAMETROS DE URL
const parametros = new URLSearchParams(location.search);
parametros.forEach(ativarProduto);

function ativarProduto(param) {
  const element = document.getElementById(param);
  if (element) {
    element.checked = true;
  }
  console.log('Parametros de URL = True');
}
//





// const bicicletas = Array.from(document.querySelectorAll(".bicicletas-imagens img"));
// bicicletas.forEach(mudarPrincipal);
// bicicletas.shift();

// function mudarPrincipal(imagem) {
//   imagem.addEventListener("click", mudarImagem);
// }

// function mudarImagem() {
//   const bicicletas_principal = document.querySelector(".bicicletas-imagens img");
//   const target = event.currentTarget;
//   bicicletas_principal.src = target.src;
//   console.log('Teste Galeria');
// }
