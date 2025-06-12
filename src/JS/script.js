setTimeout(function() {
    location.reload();
}, 12000000); // Refresh every 20 minutes

// Carregamento da Pagina
// Quando a página carregar
    window.onload = function () {
      // Verifica se já foi exibido
      const avisoExibido = localStorage.getItem('cookieAvisoExibido');

      // Se ainda não foi exibido, mostra o aviso
      if (!avisoExibido) {
        document.getElementById('cookieBanner').style.display = 'block';
      }

      // Adiciona evento ao botão
      document.getElementById('fechar-btn').onclick = function () {
        // Esconde o aviso
        document.getElementById('cookieBanner').style.display = 'none';
        // Salva informação no localStorage
        localStorage.setItem('cookieAvisoExibido', 'sim');
      };
    };



// function fecharBanner() {
//       document.getElementById('cookieBanner').style.display = 'none';
//       localStorage.setItem('cookieAvisoExibido',  'true');
//     };

// window.onload = function() {
//       if (!localStorage.getItem('cookieAvisoExibido')) {
//         document.getElementById('cookieBanner').style.display = 'block';
//       }
//     };