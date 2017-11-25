function Car(canvasId, sprite) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');
  this.x = (this.canvas.width / 2) - 47;
  this.y = 390;
  this.isReady = false;
  this.sprite = new Image();
  this.sprite.src = "images/car.png";
  this.sprite.onload = (function() {
    this.isReady = true;
  }).bind(this);
}

Car.prototype.moveRight = function() {
  if (this.x <= 420){
    this.x += 5;
  }
};

Car.prototype.moveLeft = function() {
  if (this.x >= 15){
    this.x -= 5;
  }
};

Car.prototype.moveUp = function() {
  if (this.y >= 15){
    this.y -= 5;
  }
};

Car.prototype.moveDown = function() {
  if (this.y <= 375){
    this.y += 5;
  }
};

Car.prototype.draw = function() {
  if (this.isReady) {
    this.ctx.drawImage(this.sprite, this.x, this.y, this.sprite.width * 0.40, this.sprite.height * 0.40);
  }
};
