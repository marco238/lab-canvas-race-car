function Bar(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = (this.canvas.width / 2) - 7;
  this.y = -50;
  this.width = 15;
  this.height = 50;
}

Bar.prototype.draw = function() {
  this.ctx.save();
  this.ctx.fillStyle = "rgb(255, 255, 255)";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.y += 10;
  this.ctx.restore();
};

Bar.prototype.clear = function() {
  this.ctx.clearRect(this.x, this.y, this.width, this.height);
};
