function Plane(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = -150;
  this.y = 4000;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = "images/plane.png";
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
}

Plane.prototype.draw = function() {
  if (this.isReady) {
    this.ctx.save();
    this.ctx.drawImage(this.sprite, this.x, this.y, this.sprite.width * 0.60, this.sprite.height * 0.60);
    this.y -= 4;
    this.ctx.restore();
  }
};
