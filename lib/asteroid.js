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

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Fasteroids.Ship) {
      otherObject.relocate();
    } else if (otherObject instanceof Fasteroids.Bullet) {
      game = this.game;
      game.remove(this);
      game.remove(otherObject);
    }
  }

  Asteroid.COLOR = "red";
  Asteroid.RADIUS = 30;
})();