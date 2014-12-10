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

  Util.unitVector = function (vector) {
    if (vector[0] === 0 && vector[1] === 0) {
      return [0, 1];
    }
    if (vector[0] != 0) {
      var x = vector[0] / Math.abs(vector[0])
    } else {
      var x = 0;
    }
    if (vector[1] != 0) {
      var y = (vector[1] / Math.abs(vector[1])) || 0;
    } else {
      var y = 0;
    }
    var squaredLength = (vector[0] * vector[0]) + (vector[1] * vector[1]);
    return [x * ((vector[0] * vector[0]) / squaredLength), y * ((vector[1] * vector[1]) / squaredLength)];
  }
})();