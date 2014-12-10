(function () {
  if (typeof Fasteroids === "undefined") {
    window.Fasteroids = {};
  }

  var GameView = Fasteroids.GameView = function(game, context){
    this.game = game
    this.context = context;
  }

  GameView.prototype.start = function(){
    this.bindKeyHandlers();
    setInterval(this.takeTurn, 20);
  }

  GameView.prototype.takeTurn = function(){
    this.game.step();
    this.game.draw(this.context);
  }

  GameView.prototype.bindKeyHandlers = function(){
    key('up', function() { this.game.ship.power([0, -1]) }.bind(this));
    key('down', function() { this.game.ship.power([0, 1]) }.bind(this));
    key('left', function() { this.game.ship.power([-1, 0]) }.bind(this));
    key('right', function() { this.game.ship.power([1, 0]) }.bind(this));
    key('space', function() { this.game.ship.fireBullet()}.bind(this));
  }
})();