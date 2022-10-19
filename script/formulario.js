const form = document.querySelector("form");
function enviarForm(event) {
  event.preventDefault();
  document.querySelector("form button").disabled = true;
  document.querySelector("form button").innerText = "Enviando...";
  const data = new FormData(form);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formSend);
}

const enviado =
  "<p class='font-2-l send' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317a00'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";

const enviado_erro =
  "<p class='font-2-l not-send' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #e00000'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.com</p>";

function formSend(event) {
  if (event.ok) {
    form.innerHTML = enviado;
    window.setTimeout( function() {
      window.location.reload();
    }, 6000);
  } else {
    form.innerHTML = enviado_erro;
    window.setTimeout( function() {
      window.location.reload();
    }, 6000);
  }
}
form.addEventListener("submit", enviarForm);
