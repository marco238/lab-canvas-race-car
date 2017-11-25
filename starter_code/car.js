function Car(canvasId, sprite) {
  this.canvas = document.getElementById(canvasId);
  this.ctx =  this.canvas.getContext('2d');
  this.x = 0;
  this.y = 0;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = "images/car.png";
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
}

Car.prototype.draw = function() {
  if (this.isReady) {
    this.ctx.drawImage(this.sprite, (this.canvas.width / 2) - 32, 470, 65, 110);
  }
};
