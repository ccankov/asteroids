var Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function start() {
  var start = function start() {
    this.game.moveObjects();
    this.game.draw(this.ctx);
  }

  setInterval(start.bind(this), 20);
};

module.exports = GameView;
