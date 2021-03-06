function Bar(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = (this.canvas.width / 2) - 7;
  this.y = -50;
  this.width = 15;
  this.height = 70;
}

Bar.prototype.draw = function() {
  this.ctx.save();
  this.ctx.fillStyle = "rgb(255, 255, 255)";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.y += 15;
  this.ctx.restore();
};
