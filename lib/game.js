(function (){
  if (typeof Fasteroids === "undefined") {
    window.Fasteroids = {};
  }

  var Game = Fasteroids.Game = function(){
    this.asteroidsArray = [];
    this.bullets = [];
    this.addAsteroids();
    this.ship = new Fasteroids.Ship({
      pos: [Game.DIM_X / 2, Game.DIM_Y / 2],
      game: this
    })
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

  Game.prototype.add = function(object) {
    if (object instanceof Fasteroids.Asteroid) {
      this.asteroidsArray.push(object);
    }
    if (object instanceof Fasteroids.Bullet) {
      this.bullets.push(object);
    }
  }

  Game.prototype.randomPosition = function(){
    var x = Math.floor(Math.random() * Game.DIM_X);
    var y = Math.floor(Math.random() * Game.DIM_Y);
    return [x, y];
  }

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    for (var i = 0; i < this.allObjects().length; i++) {
      this.allObjects()[i].draw(ctx);
    }
  }
  
  Game.prototype.moveObjects = function() {
    for (var i = 0; i < this.allObjects().length; i++){
      this.allObjects()[i].move();
    }
  }

  Game.prototype.wrap = function(pos) {
    if (pos[0] > Game.DIM_X) {
      pos[0] = 0;
    }
    if (pos[0] < 0) {
      pos[0] = Game.DIM_X;
    }
    if (pos[1] > Game.DIM_Y) {
      pos[1] = 0;
    }
    if (pos[1] < 0) {
      pos[1] = Game.DIM_Y;
    }
    return pos;
  }

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.allObjects().length; i++) {
      for (var j = i + 1; j < this.allObjects().length; j++) {
        this.allObjects()[i].isCollidedWith(this.allObjects()[j]);
      }
    }
  }

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
    var allObjects = []
    for (var i = 0; i < this.asteroidsArray.length; i++) {
      allObjects.push(this.asteroidsArray[i]);
    }
    allObjects.push(this.ship);
    return allObjects;
  }
})();