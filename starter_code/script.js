window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');

    this.bars = [];

    setInterval(this.addBar.bind(this), 1000);
  }

  startGame.prototype.addBar = function() {
  this.bars.push(new Bar(this.canvas, 10, 100));
};

  startGame.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  startGame.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

  startGame.prototype.draw = function() {
    this.clear();
    this.ctx.fillStyle = '#008100';
    this.ctx.fillRect(0, 0, 60, 900);
    this.ctx.fillStyle = '#808080';
    this.ctx.fillRect(60, 0, 15, 900);
    this.ctx.fillStyle = '#808080';
    this.ctx.fillRect(90, 0, 650, 900);
    this.ctx.fillStyle = '#808080';
    this.ctx.fillRect(755, 0, 15, 900);
    this.ctx.fillStyle = '#008100';
    this.ctx.fillRect(770, 0, 60, 900);

    this.clear();
  if (this.isReady()) {
    for (var i = 0; i < this.bars.length; i++) {
      this.bars[i].draw();
    }
  }
    window.requestAnimationFrame(this.draw.bind(this));
  };

  var game = new startGame("canvasId");
  game.draw();

  var bars = new Bar(game);
  bars.draw();
};
