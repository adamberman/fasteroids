(function () {
  if (typeof Fasteroids === "undefined"){
    window.Fasteroids = {};
  }

  var Asteroid = Fasteroids.Asteroid = function (options) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.vel = [Fasteroids.Util.randomVec(5), Fasteroids.Util.randomVec(5)];
    Fasteroids.MovingObject.call(this, options);
  }

  Fasteroids.Util.inherits(Fasteroids.Asteroid, Fasteroids.MovingObject);

  Asteroid.COLOR = "red";
  Asteroid.RADIUS = 30;
})();