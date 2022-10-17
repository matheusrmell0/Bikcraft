// MENU ATIVO HEADER
const links = document.querySelectorAll(".header-menu a");
function adicionarAtivo(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
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
}
//

// PERGUNTAS ATIVO/INATIVO
const perguntas_button = document.querySelectorAll(".lista-de-perguntas button");
perguntas_button.forEach(eventosPerguntas);

function eventosPerguntas(perg) {
  perg.addEventListener("click", ativarPergunta);
}

function ativarPergunta(event) {
  const pergunta_button = event.currentTarget;
  const controls = pergunta_button.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta_button.setAttribute("aria-expanded", ativa);
}
//

// GALERIA BICICLETAS
const bicicletas = Array.from(document.querySelectorAll(".bicicletas-imagens img"));
const bicicletas_div = document.querySelector(".bicicletas-imagens");
bicicletas.forEach(mudarPrincipal);

function mudarPrincipal(imagem) {
  imagem.addEventListener("click", mudarImagem);
}

function mudarImagem(event) {
  const img_target = event.currentTarget;
  const media = matchMedia("(min-width: 920px)").matches;
  if (media) {
    bicicletas_div.prepend(img_target);
  }
}
//

// ANIMAÇÃO (PLUGIN)
if(window.SimpleAnime){
new SimpleAnime();
}
//