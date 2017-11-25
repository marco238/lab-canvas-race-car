function Police(canvas) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x = Math.random() * 370;
  this.y = (Math.random() * 500) - 1000 ;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = "images/police.png";
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
}

Police.prototype.draw = function() {
  if (this.isReady) {
    this.ctx.save();
    this.ctx.drawImage(this.sprite, this.x, this.y, this.sprite.width * 0.50, this.sprite.height * 0.50);
    this.y += 4;
    this.ctx.restore();
  }
};
