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
  }

  MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  }

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    if ((Math.sqrt(Math.pow((otherObject.pos[1] - this.pos[1]), 2) + 
          Math.pow((otherObject.pos[0] - this.pos[0]), 2)) 
            < (this.radius + otherObject.radius))) {
      this.collideWith(otherObject);
      return true;
    } else {
      return false;
    }
  }

  MovingObject.prototype.collideWith = function (otherObject) {
  }
})();