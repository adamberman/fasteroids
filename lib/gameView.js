(function () {
  if (typeof Fasteroids === "undefined") {
    window.Fasteroids = {};
  }

  var GameView = Fasteroids.GameView = function(game, context){
    this.game = game;
    this.context = context;
    this.img = new Image();
    this.img.src = 'lib/myImage.png';
  }

  GameView.prototype.start = function(){
    this.context.drawImage(this.img, 0, 0, 800, 600)
    var that = this;
    var ship = this.game.ship;
    var asteroidIntervalId = setInterval(function(){
      var asteroid = new Fasteroids.Asteroid({
        pos: that.game.randomPosition(),
        game: that.game 
      })
      that.game.asteroidsArray.push(asteroid);
    }, 3000)
    var gameIntervalId = setInterval(function(){
      that.checkForKeys(ship)
      that.game.step();
      that.game.draw(that.context, that.img);
      if (that.checkForLoss()) {
        clearInterval(asteroidIntervalId);
        clearInterval(gameIntervalId);
      }
    }, 20);
  }

  GameView.prototype.checkForLoss = function() {
    if (this.game.lives < 0) {
      this.game.end(this.context, this.img);
      this.bindRestart();
      return true;
    }
    return false;
  }

  GameView.prototype.bindRestart = function() {
    window.key('r', function() {
      this.game = new Fasteroids.Game();
      window.key.unbind('r');
      this.start();
    }.bind(this));
  }

  GameView.prototype.checkForKeys = function(ship){
    var keys = key.getPressedKeyCodes();
    if (keys.indexOf(37) != -1) {
      ship.left();
    }
    if (keys.indexOf(38) != -1) {
      ship.accelerate();
    } 
    if (keys.indexOf(39) != -1) {
      ship.right();
    }
    if (keys.indexOf(40) != -1) {
      ship.brake();
    }
    if (keys.indexOf(32) != -1) {
      ship.fireBullet();
    }
  }
})();