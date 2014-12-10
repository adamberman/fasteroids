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

  Ship.prototype.relocate = function() {
    this.pos = [Fasteroids.Game.DIM_X / 2, Fasteroids.Game.DIM_Y / 2];
    this.vel = [0, 0];
  }

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function() {
    var bullet = new Fasteroids.Bullet({
      pos: this.pos,
      vel: this.determineBulletVel(),
      game: this.game
    });
    this.game.add(bullet);
  }

  Ship.prototype.determineBulletVel = function() {
    if (this.vel[0] === 0 && this.vel[1] === 0) {
      return [0, 30];
    } else if (this.vel[0] === 0) {
      return [0, 30];
    } else if (this.vel[1] === 0) {
      return [30, 0];
    } else {
      var ratio = this.vel[0] / this.vel[1];
      if (ratio >= 1 || ratio <= -1) {
        var multiplier = Math.abs(30 / ratio);
        return [this.vel[0] * multiplier, this.vel[1] * multiplier];
      } else {
        var multiplier = Math.abs(30 * ratio);
        return [this.vel[0] * multiplier, this.vel[1] * multiplier];
      }
    }
  }

  Ship.COLOR = "blue";
  Ship.RADIUS = 30;
})();