(function (){
  if (typeof Fasteroids === "undefined") {
    window.Fasteroids = {};
  }

  var Game = Fasteroids.Game = function(){
    this.asteroidsArray = [];
    this.ship = new Fasteroids.Ship({
      pos: [Game.DIM_X / 2, Game.DIM_Y / 2],
      game: this
    })
    this.bullets = [];
    this.addAsteroids();
  }

  Game.DIM_X = 800;

  Game.DIM_Y = 600;

  Game.NUM_ASTEROIDS = 5;

  Game.prototype.addAsteroids = function(){
    var i = 0;
    while (i < Game.NUM_ASTEROIDS) {
      this.asteroidsArray.push(new Fasteroids.Asteroid({
        pos: this.randomPosition(),
        game: this 
      }));
      i ++;
    }
  }

  Game.prototype.randomPosition = function(){
    var x = Math.floor(Math.random() * Game.DIM_X);
    var y = Math.floor(Math.random() * Game.DIM_Y);
    return [x, y];
  }

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.drawImage(img, 0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(function (el) { el.draw(ctx); });
  };

  Game.prototype.moveObjects = function() {
    this.allObjects().forEach(function(el) { el.move(); });
  };

  Game.prototype.wrap = function(pos) {
    var newPos = pos;
    if (pos[0] < 0 || pos[0] > Game.DIM_Y) {
      newPos[0] = Math.abs(pos[0] - Game.DIM_Y);
    }
    if (pos[1] < 0 || pos[1] > Game.DIM_X) {
      newPos[1] = Math.abs(pos[1] - Game.DIM_X);
    }
    return newPos;
  }

  Game.prototype.checkCollisions = function () {
    var allObjects = this.allObjects()
    for(var i = 0; i < allObjects.length; i++) {
      for(var j = i + 1; j < allObjects.length; j++) {
        if (allObjects[i].isCollidedWith(allObjects[j])) {
          allObjects[i].collideWith(allObjects[j]);
        }
      }
    }
  };

  Game.prototype.step = function() {
    this.moveObjects()
    this.checkCollisions();
  }

  Game.prototype.remove = function(object) {
    if (object instanceof Fasteroids.Asteroid) {
      var index = this.asteroidsArray.indexOf(object);
      this.asteroidsArray.splice(index, 1);
    }
    if (object instanceof Fasteroids.Bullet) {
      var index = this.bullets.indexOf(object);
      this.bullets.splice(index, 1);
    }
  }

  Game.prototype.allObjects = function() {
    return this.asteroidsArray.concat([this.ship]).concat(this.bullets);
  }

  Game.prototype.isOutOfBounds = function(pos) {
    if ((pos[0] < 0 || pos[0] > Game.DIM_X) || (pos[1] < 0 || pos[1] > Game.DIM_Y)) {
      return true;
    }
    return false;
  }
})();