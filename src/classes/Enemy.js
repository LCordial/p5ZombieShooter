class Enemy {
  constructor() {
    this.speed = Math.floor(Math.random() * 6) + 2;

    this.damage = 1;

    this.enemyX = Math.floor(Math.random() * 10) + 1;
    this.enemyY = Math.floor(Math.random() * 1000) + 10;
    this.enemyR = Math.floor(Math.random() * 25) + 20;
  }

  grabPlayerPosition() {
    // Grabbing Player Position every time draw is called
    this.playerX = playerController.x;
    this.playerY = playerController.y;
    this.playerR = playerController.r;
  }

  show() {
    push();

    stroke("#c9001b");
    strokeWeight(4);
    ellipse(this.enemyX, this.enemyY, this.enemyR * 2);

    pop();
  }

  moveToPlayer() {
    // Moving to player
    if (this.playerY < this.enemyY) {
      this.enemyY -= this.speed;
    } else if (this.playerY > this.enemyY) {
      this.enemyY += this.speed;
    }
    if (this.playerX < this.enemyX) {
      this.enemyX -= this.speed;
    } else if (this.playerX > this.enemyX) {
      this.enemyX += this.speed;
    }
  }

  checkCollision() {
    var hit = false;

    // Making hit variable into Collide 2D external library
    hit = collideCircleCircle(
      this.enemyX,
      this.enemyY,
      this.enemyR * 2,
      this.playerX,
      this.playerY,
      this.playerR * 2
    );

    // If bullet has hit change playerHealth by player damage, else don't do anything
    if (hit) {
      console.log(`${hit} & ${playerController.health}`);

      playerController.health -= this.damage;
    } else {
      console.log(`${hit}`);
    }
  }

  renderEnemy() {
    this.grabPlayerPosition();
    this.show();
    this.moveToPlayer();
    this.checkCollision();
  }
}
