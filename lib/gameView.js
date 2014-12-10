(function () {
  if (typeof Fasteroids === "undefined") {
    window.Fasteroids = {};
  }

  var GameView = Fasteroids.GameView = function(game, context){
    this.game = game
    this.context = context;
  }

  GameView.prototype.start = function(){
    var that = this;
    var ship = this.game.ship;
    this.bindKeyHandlers(ship);
    setInterval(function(){
      that.game.step();
      that.game.draw(that.context);
    }, 20);
    setInterval(function(){
      var asteroid = new Fasteroids.Asteroid({
        pos: that.game.randomPosition(),
        game: that.game 
      })
      that.game.asteroidsArray.push(asteroid);
    }, 5000)
  }

  GameView.prototype.bindKeyHandlers = function(ship){
    window.key('up', function() { ship.power([0, -1]) });
    window.key('down', function() { ship.power([0, 1]) });
    window.key('left', function() { ship.power([-1, 0]) });
    window.key('right', function() { ship.power([1, 0]) });
    window.key('space', function() { ship.fireBullet() });
  }
})();