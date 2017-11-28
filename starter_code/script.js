var RIGHT_KEY = 39;
var LEFT_KEY = 37;
var UP_KEY = 38;
var DOWN_KEY = 40;
var randomNum;

window.onload = function() {
  var game = new Game("canvasId");

  document.getElementById("start-button").onclick = function() {
    game.startGame();
  };

  document.addEventListener("keydown", function(event) {
    if (event.keyCode == RIGHT_KEY) {
      game.car.moveRight();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.keyCode == LEFT_KEY) {
      game.car.moveLeft();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.keyCode == UP_KEY) {
      game.car.moveUp();
    }
  });

  document.addEventListener("keydown", function(event) {
    if (event.keyCode == DOWN_KEY) {
      game.car.moveDown();
    }
  });
};

  function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.car = new Car("canvasId");
    this.plane = new Plane(this.canvas);
    this.bars = [];
    this.cops = [];
  }

  Game.prototype.addBar = function() {
    var that = this;
    setInterval(function() {
      that.bars.push(new Bar(that.canvas));
    }, 300);
  };

  Game.prototype.addPolice = function() {
    var that = this;
    setInterval(function() {
      that.cops.push(new Police(that.canvas));
    }, 3000);
  };

  Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  Game.prototype.startGame = function() {
    this.clear();
    this.intervalId = setInterval(function( ) {
      this.draw();
      this.car.draw();
      this.plane.draw();
    }.bind(this), 1000/60);
    this.addBar();
    this.addPolice();
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
    for (var j = 0; j < this.cops.length; j++) {
      this.cops[j].draw();
      if ((parseInt(this.cops[j].y) + 115 > parseInt(this.car.y) - 115) &&
          (parseInt(this.cops[j].y) - 115 < parseInt(this.car.y) + 115) &&
          (parseInt(this.cops[j].x) + 25 > parseInt(this.car.x) - 25) &&
          (parseInt(this.cops[j].x) - 25 < parseInt(this.car.x) + 25)) {
        clearInterval(this.intervalId);
      }
    }
  };
