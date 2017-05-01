var GameView = require('./lib/game_view.js')

document.addEventListener("DOMContentLoaded", function(event) {
  var canvas = document.getElementById('game-canvas');
  var ctx = canvas.getContext('2d');

  var view = new GameView(ctx);
  view.start();
});
