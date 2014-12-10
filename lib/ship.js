(function () {
  if (typeof Fasteroids === "undefined"){
    window.Fasteroids = {};
  }

  var Ship = Fasteroids.Ship = function (options) {
    options.color = Ship.COLOR;
    options.radius = Ship.RADIUS;
    options.vel = [0, 0];
    Fasteroids.MovingObject.call(this, options);
  }

  Fasteroids.Util.inherits(Fasteroids.Ship, Fasteroids.MovingObject);

  Ship.COLOR = "blue";
  Ship.RADIUS = 30;

  Ship.prototype.relocate = function() {
    this.pos = [Fasteroids.Game.DIM_X / 2, Fasteroids.Game.DIM_Y / 2];
    this.vel = [0, 0];
  }

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function() {
    var direction = Fasteroids.Util.unitVector(this.vel);
    var bulletVel = [this.vel[0] + (direction[0] * 15), this.vel[1] + (direction[1] * 15)];
    var bullet = new Fasteroids.Bullet({
      pos: this.pos,
      vel: bulletVel,
      game: this.game
    });
    this.game.bullets.push(bullet);
  }
})();