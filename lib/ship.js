(function () {
  if (typeof Fasteroids === "undefined"){
    window.Fasteroids = {};
  }

  var Ship = Fasteroids.Ship = function (options) {
    options.color = Ship.COLOR;
    options.radius = Ship.RADIUS;
    options.vel = [0, 0];
    this.startingPos = options.pos;
    Fasteroids.MovingObject.call(this, options);
  }

  Fasteroids.Util.inherits(Fasteroids.Ship, Fasteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.startingPos;
    this.vel = [0, 0];
    alert('You died!');
  }

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.COLOR = "blue";
  Ship.RADIUS = 30;
})();