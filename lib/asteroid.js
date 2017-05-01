var Util = require('./utils.js');
var MovingObject = require('./moving_object.js');

function Asteroid(pos) {
  MovingObject.apply(this, pos);
};

Asteroid.COLOR = 'gray';
Asteroid.RADIUS = 70;

Util.inherits(Asteroid, MovingObject);
