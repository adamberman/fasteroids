(function () {
  if (typeof Fasteroids === "undefined"){
    window.Fasteroids = {};
  }

  var Ship = Fasteroids.Ship = function (options) {
    options.color = Ship.COLOR;
    options.radius = Ship.RADIUS;
    options.vel = [0, 0];
    Fasteroids.MovingObject.call(this, options);
    this.shipImg = new Image();
    this.shipImg.src = './lib/myShip.gif';
    this.angle = 0;
  }

  Fasteroids.Util.inherits(Fasteroids.Ship, Fasteroids.MovingObject);

  Ship.COLOR = "blue";
  Ship.RADIUS = 30;
  Ship.MAX_SPEED = 10

  Ship.prototype.draw = function (ctx) {
    ctx.save();
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.rotate(this.angle);
    ctx.drawImage(this.shipImg, 0, 0, 40, 40);
    ctx.restore();
  }

  Ship.prototype.relocate = function() {
    this.pos = [Fasteroids.Game.DIM_X / 2, Fasteroids.Game.DIM_Y / 2];
    this.vel = [0, 0];
    this.angle = 0;
  }

  Ship.prototype.accelerate = function() {
    var addedVel = Fasteroids.Util.unitVector(this.angle);
    var newVel = [this.vel[0] + (addedVel[0] * .1), this.vel[1] + (addedVel[1] * .1)];
    if (newVel[0] < Ship.MAX_SPEED && newVel[1] < Ship.MAX_SPEED) {
      this.vel = newVel;
    }
  }

  Ship.prototype.brake = function() {
    var addedVel = Fasteroids.Util.unitVector(this.angle);
    var newVel = [this.vel[0] + (-.1 * addedVel[0]), this.vel[1] + (-.1 * addedVel[1])];
    if (Math.abs(newVel[0]) < Ship.MAX_SPEED && Math.abs(newVel[1]) < Ship.MAX_SPEED) {
      this.vel = newVel;
    }
  }

  Ship.prototype.left = function() {
    this.angle -= Math.PI / 90;
  }

  Ship.prototype.right = function() {
    this.angle += Math.PI / 90;
  }

  Ship.prototype.fireBullet = function() {
    var direction = Fasteroids.Util.unitVector(this.angle)
    var bullet = new Fasteroids.Bullet({
      pos: this.pos,
      vel: [direction[0] * 10, direction[1] * 10],
      game: this.game
    });
    this.game.bullets.push(bullet);
  }
})();