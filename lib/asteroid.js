var Util = require('./utils.js');
var MovingObject = require('./moving_object.js');

Asteroid.COLOR = 'gray';
Asteroid.RADIUS = 1;

101010  var options = {
    pos: pos,
    vel: Util.randomVec(5),
    color: Asteroid.COLOR,
    radius: Asteroid.RADIUS
  };
  MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
