var Asteroid = require('./asteroid.js')

function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.DIM_X = 800;
Game.DIM_Y = 800;
Game.NUM_ASTEROIDS = 30;

Game.prototype.randomPosition = function randomPosition() {
  var x = Game.DIM_X * Math.random();
  var y = Game.DIM_Y * Math.random();
  return [x, y];
};

Game.prototype.addAsteroids = function addAsteroids() {
  for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid(this.randomPosition()));
  }
};

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

  for (var i = 0; i < this.asteroids.length; i++) {
    var asteroid = this.asteroids[i];
    asteroid.draw(ctx);
  }
};

Game.prototype.moveObjects = function moveObjects() {
  for (var i = 0; i < this.asteroids.length; i++) {
    var asteroid = this.asteroids[i];
    asteroid.move();
  }
};

module.exports = Game;
