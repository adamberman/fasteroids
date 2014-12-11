(function () {
  if (typeof Fasteroids === "undefined"){
    window.Fasteroids = {};
  }

  var Asteroid = Fasteroids.Asteroid = function (options) {
    options.color = Asteroid.COLOR;
    options.radius = Asteroid.RADIUS;
    options.vel = [Fasteroids.Util.randomVec(3), Fasteroids.Util.randomVec(3)];
    Fasteroids.MovingObject.call(this, options);
    this.astImg = new Image();
    this.astImg.src = './lib/myAsteroid.png';
  }

  Asteroid.COLOR = "red";

  Asteroid.RADIUS = 30;

  Fasteroids.Util.inherits(Fasteroids.Asteroid, Fasteroids.MovingObject);

  Asteroid.prototype.draw = function (ctx) {
    ctx.save();
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.drawImage(this.astImg, -30, -30, 60, 60);
    ctx.restore();
  }

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