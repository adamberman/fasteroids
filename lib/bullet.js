(function () {
  if (typeof Fasteroids === "undefined"){
    window.Fasteroids = {};
  }

  var Bullet = Fasteroids.Bullet = function (options) {
    options.color = Bullet.COLOR;
    options.radius = Bullet.RADIUS;
    Fasteroids.MovingObject.call(this, options);
    this.isWrappable = false;
  }

  Fasteroids.Util.inherits(Fasteroids.Bullet, Fasteroids.MovingObject);

  Bullet.COLOR = "gold";
  Bullet.RADIUS = 30;
})();