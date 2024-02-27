// Stats Server LG
$.getJSON("https://api.mcsrvstat.us/3/lg.singularserver.fr", function (data) {
  // console.log(data.players.max);
  // console.log(data.players.online);
  // console.log(data.online);

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
