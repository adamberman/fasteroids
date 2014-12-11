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

  Asteroid.COLOR = "red";

  Asteroid.RADIUS = 30;

  Fasteroids.Util.inherits(Fasteroids.Asteroid, Fasteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    var game = this.game;
    if (otherObject instanceof Fasteroids.Ship) {
      otherObject.relocate();
      game.remove(this);
      game.lives -= 1;
    } else if (otherObject instanceof Fasteroids.Bullet) {
      game.remove(this);
      game.remove(otherObject);
      game.score += 10;
    }
  }
})();