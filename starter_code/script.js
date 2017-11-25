window.onload = function() {
  var game = new Game("canvasId");

  document.getElementById("start-button").onclick = function() {
    game.startGame();
  };
};

  function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.car = new Car("canvasId", "images/car.png");
    this.bars = [];
  }

  Game.prototype.addBar = function() {
    var that = this;
    setInterval(function() {
      that.bars.push(new Bar(that.canvas));
    }, 300);
  };

  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.startGame = function() {
    this.clear();
    setInterval(function( ) {
      this.draw();
    }.bind(this), 1000/60);
    this.addBar();

  };

  Game.prototype.draw = function() {
    this.clear();
    this.ctx.fillStyle = '#008100';
    this.ctx.fillRect(0, 0, 40, 590);
    this.ctx.fillStyle = '#808080';
    this.ctx.fillRect(40, 0, 10, 590);
    this.ctx.fillStyle = '#808080';
    this.ctx.fillRect(60, 0, 400, 590);
    this.ctx.fillStyle = '#808080';
    this.ctx.fillRect(470, 0, 10, 590);
    this.ctx.fillStyle = '#008100';
    this.ctx.fillRect(480, 0, 40, 590);
    for (var i = 0; i < this.bars.length; i++) {
      this.bars[i].draw();
    }
    this.car.draw();
  };
