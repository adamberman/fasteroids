(function () {
  if (typeof Fasteroids === "undefined"){
    window.Fasteroids = {};
  }

  var Util = Fasteroids.Util = {}

  Util.inherits = function (objChild, objParent) {
    var Surrogate = function () {};
    Surrogate.prototype = objParent.prototype;
    objChild.prototype = new Surrogate();
  }

  Util.randomVec = function (length) {
  	var posOrNeg = Math.floor(Math.random() * 2)
		var vector = Math.floor(Math.random() * length) + 1;
		if (posOrNeg === 0) {
			return vector;
		} else {
			return vector * -1;
		}
  }

  Util.distanceBetween = function (pos1, pos2) {
    return Math.sqrt(((pos1[0] - pos2[0]) * (pos1[0] - pos2[0])) + ((pos1[1] - pos2[1]) * (pos1[1] - pos2[1])));
  }

  Util.unitVector = function (angle) {
    return [Math.sin(angle), -1 * Math.cos(angle)];
  }
})();