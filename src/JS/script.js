setTimeout(function() {
    location.reload();
}, 12000000); // Refresh every 20 minutes


// Functio para fechar o banner de cookies
function fecharBanner() {
      document.getElementById('cookieBanner').style.display = 'none';
      localStorage.setItem('cookieAvisoExibido', 'sim');
    };

window.onload = function() {
      if (!localStorage.getItem('cookieAvisoExibido')) {
        document.getElementById('cookieBanner').style.display = 'block';
      }
    };