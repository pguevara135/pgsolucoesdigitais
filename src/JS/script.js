setTimeout(function() {
    location.reload();
}, 1000 * 60 * 5); // Refresh every 5 minutes


// Functio para fechar o banner de cookies
function fecharBanner() {
      document.getElementById('cookieBanner').style.display = 'none';
      localStorage.setItem('cookieAvisoExibido', 'true');
    }

    window.onload = function() {
        if (!localStorage.getItem('cookieAvisoExibido')) {
            document.getElementById('cookieBanner').style.display = 'block';
        }
    };