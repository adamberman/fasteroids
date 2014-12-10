(function () {
  if (typeof Fasteroids === "undefined"){
    window.Fasteroids = {};
  }

  var Bullet = Fasteroids.Bullet = function (options) {
    options.color = Bullet.COLOR;
    options.radius = Bullet.RADIUS;
    options.vel = [0, 0];
    Fasteroids.MovingObject.call(this, options);
  }

  Fasteroids.Util.inherits(Fasteroids.Bullet, Fasteroids.MovingObject);

  Bullet.COLOR = "gold";
  Bullet.RADIUS = 30;
})();