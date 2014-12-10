(function () {
  if (typeof Fasteroids === "undefined") {
    window.Fasteroids = {};
  }

  var MovingObject = Fasteroids.MovingObject = function (options) {
    this.pos = options.pos; //[x, y]
    this.vel = options.vel; //[x-vel, y-vel]
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.isWrappable = true;
  }

  MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }

  MovingObject.prototype.move = function () {
    var newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    if (this.game.isOutOfBounds(newPos)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(newPos);
      } else {
        this.game.remove(this);
      }
    } else {
      this.pos = newPos;
    }
  }

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var distance = Fasteroids.Util.distanceBetween(this.pos, otherObject.pos);
    var minDistance = this.radius + otherObject.radius;
    if (distance <= minDistance) {
      return true;
    } else {
      return false;
    }
  };

  MovingObject.prototype.collideWith = function (otherObject) {
  }
})();