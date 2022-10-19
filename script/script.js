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
const perguntas_button = document.querySelectorAll(
  ".lista-de-perguntas button"
);
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
const bicicletas = Array.from(
  document.querySelectorAll(".bicicletas-imagens img")
);
const bicicletas_div = document.querySelector(".bicicletas-imagens");
bicicletas.forEach(mudarPrincipal);

function mudarPrincipal(imagem) {
  imagem.addEventListener("click", mudarImagem);
}

function mudarImagem(event) {
  const img_target = event.currentTarget;
  const media = matchMedia("(min-width: 920px)").matches;
  const media_xr = matchMedia("(max-width: 800px)").matches;
  if (media) {
    bicicletas_div.prepend(img_target);
  }
  if (media_xr) {
    bicicletas_div.prepend(img_target);
  }

}
//

// ANIMAÇÃO (PLUGIN)
if (window.SimpleAnime) {
  new SimpleAnime();
}
//

// REFRESH TIME
if (document.getElementById("index")) {
  setTime(0);
  var updateDelay = 1;

  function setTime() {
    var date = new Date();
    timestamp = date.getTime();
  }

  function updateLastRefreshTime() {
    var currentDate = new Date();
    var currentTime = currentDate.getTime();
    var timeSince = Math.floor((currentTime - timestamp) / 1000);
    let timeStampDescription = "";

    timeStampDescription = timeSince;
    const refresh = timeStampDescription;
    if (refresh > 5) {
      document.querySelector(".ul-bike").classList.add("opacity-1");
    }
    if (refresh > 10) {
      document.querySelector(".tecnologia-imagem").classList.add("opacity-1-left");
    }
    if (refresh > 15) {
      document.querySelector(".parceiros h2").classList.add("opacity-1-right");
    }
  }
  setInterval(updateLastRefreshTime, updateDelay);
  //

  // ANIMAÇÃO SCRIPT MANUAL
  window.addEventListener("scroll", scrolling);
  
  function scrolling(event) {
    if (window.scrollY >= 150) {
      document.querySelector(".ul-bike").classList.add("opacity-1");
    }
    if (window.scrollY >= 1000) {
      document.querySelector(".tecnologia-imagem").classList.add("opacity-1-left");
    }
    if (window.scrollY >= 1950) {
      document.querySelector(".parceiros h2").classList.add("opacity-1-s");
    }
      if (window.scrollY >= 3325) {
        document.getElementById("seguros-items-prataid").classList.add("opacity-1-s");
      }
      if (window.scrollY >= 3325) {
        document.getElementById("seguros-items-ouroid").classList.add("opacity-1-s");
      }
      if (window.scrollY >= 3066) {
        document.getElementById("seguros-index").classList.add("opacity-1-s");
      }
      if (matchMedia("(max-width: 1250px)").matches){
        document.getElementById("seguros-index").classList.remove('opacity-0');
        document.getElementById("seguros-items-prataid").classList.remove('opacity-0');
        document.getElementById("seguros-items-ouroid").classList.remove('opacity-0');
        document.querySelector(".parceiros h2").classList.remove('opacity-0');
        document.querySelector(".tecnologia-imagem").classList.remove('opacity-0');
        document.querySelector(".ul-bike").classList.remove('opacity-0');
      }
  }

  window.addEventListener("mousemove", att);
  window.addEventListener("keypress", att);
  function att(event) {
    if (event.timeStamp >= 3000) {
      document.querySelector(".ul-bike").classList.add("opacity-1");
    }
    if (event.timeStamp >= 6000) {
      document.querySelector(".tecnologia-imagem").classList.add("opacity-1-left");
    }
    if (event.timeStamp >= 10000) {
      document.querySelector(".parceiros h2").classList.add("opacity-1-right");
    }
  }
}
//
console.log('❤ ✔ By Mello 😃')
