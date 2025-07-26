setTimeout(function() {
    location.reload();
}, 12000000); // Refresh every 20 minutes

//? Carregamento da Pagina

window.onload = function () {
  // Verifica se já foi exibido
  const avisoExibido = localStorage.getItem('cookieAvisoExibido');

  //? Se ainda não foi exibido, mostra o aviso
  if (!avisoExibido) {
    document.getElementById('cookieBanner').style.display = 'block';
  }

  //! Adiciona evento ao botão

  document.getElementById('fechar-btn').onclick = function () {
    // Esconde o aviso
    document.getElementById('cookieBanner').style.display = 'none';
    // Salva informação no localStorage
    localStorage.setItem('cookieAvisoExibido', 'sim');
  };
};

//! Envio do Formulário de Contato

document.getElementById("contato-form").addEventListener("submit", async function(event) {
  event.preventDefault(); // Previne o envio padrão do formulário

  const form = event.target;
  const dados = new FormData(form);

  const resposta = await fetch.text();
  document.getElementById("resultado").innerHTML = texto;

  formm.reset(); // Limpa o formulário após o envio

});