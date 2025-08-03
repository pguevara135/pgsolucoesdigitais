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

  try {
    const resposta = await fetch(form.action, {
      method: "POST",
      body: dados,
      headers: {'Accept': 'application/json'}
    });

    if (resposta.ok) {
      document.getElementById("mensagem-sucesso").style.display = "block"; // Exibe a mensagem de sucesso
      form.reset(); // Limpa o formulário
    } else {
      document.getElementById("mensagem-erro").style.display = "block"; // Exibe a mensagem de erro
    }
  } catch (erro) {
    document.getElementById("mensagem-erro").style.display = "block"; // Exibe a mensagem de erro
  }
});

function fecharMensagem(id) {
  document.getElementById(id).style.display = "none"; // Esconde a mensagem
}

// ? COLOCAR O FOCO DO CURSOR NO CAMPO NOME

const form =document.getElementById("contato-form");
const campoNome = document.getElementById("nome");

// Garnante que o campo de nome tenha o foco quando a página for carregada
form .addEventListener("reset", () => {
  // Define um pequeno atraso para garantir que o campo esteja visível
  setTimeout(() => {
    campoNome.focus();
  }, 0)
})