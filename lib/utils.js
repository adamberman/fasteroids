(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {}

  Util.inherits = function (objChild, objParent) {
    var Surrogate = function () {};
    Surrogate.prototype = objParent.prototype;
    objChild.prototype = new Surrogate();
  }
})();