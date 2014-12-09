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
})();