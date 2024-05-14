// Stats Server LG
$.getJSON("https://api.mcsrvstat.us/3/lg.singularserver.fr", function (data) {

  var lgOnlineText = document.getElementById("lg-online");
  var lgPlayerOnline = document.getElementById("lg-player-online");
  var lgPlayerMax = document.getElementById("lg-player-max");

  if (data.online == true) {
    lgOnlineText.textContent = "Online";
  } else {
    lgOnlineText.textContent = "Offline";
  }

  lgPlayerOnline.textContent = data.players.online;
  lgPlayerMax.textContent = data.players.max;
});

// Stats Server Modée
$.getJSON("https://api.mcsrvstat.us/3/mod.singularserver.fr", function (data) {
  var modOnlineText = document.getElementById("mod-online");
  var modPlayerOnline = document.getElementById("mod-player-online");
  var modPlayerMax = document.getElementById("mod-player-max");

  if (data.online == true) {
    modOnlineText.textContent = "Online";
  } else {
    modOnlineText.textContent = "Offline";
  }

  modPlayerOnline.textContent = data.players.online;
  modPlayerMax.textContent = data.players.max;
});

// ClipBoard copy

  document.addEventListener('DOMContentLoaded', (event) => {
    // Sélectionner tous les boutons par leur classe
    const boutons = document.querySelectorAll('.copieIp');

    // Ajouter un écouteur d'événements 'click' à chaque bouton
    boutons.forEach(bouton => {
        bouton.addEventListener('click', (event) => {
            // Récupérer et afficher le contenu du bouton cliqué
            const contenuBouton = event.target.textContent;

            // On préviens l'utilisateur de la copie
            alert('Text copié !');

            // On l'écrit dans le press papier
            navigator.clipboard.writeText(contenuBouton);
        });
    });
  });

