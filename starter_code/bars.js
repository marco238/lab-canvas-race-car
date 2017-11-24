function Bar(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');

  this.x = 200; //this.canvas.width/2;
  this.y = 0;
  this.width = 15;
  this.height = 40;
}

Bar.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Bar.prototype.draw = function() {
  this.ctx.save();
  this.ctx.fillStyle = "rgb(255, 255, 255)";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
  this.y += 30;
  this.ctx.restore();
};
