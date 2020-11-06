/// <reference path="./modules/p5.d.ts" />

//Creating Variables
var playerController; //Contains the Player.js class
var enemyController;
var playerUI;

var originalFr = 60; // Capping Frame Rate

var canvasX = 1368;
var canvasY = 780;

var bullets = [];
var enemies = [];

var score = 0;
let frames = 60;



function setup() {

  //Window Width of Canvas
  createCanvas(canvasX, canvasY);

  //Framerate
  frameRate(originalFr); 

  //Classes
  playerController = new Player();
  playerUI = new PlayerUI();

  //Changing Modes
  rectMode(CENTER);
  angleMode(RADIANS);

  console.log(" ✅ Setup Finished")

}

function draw() {
  
  // Bullet Variables
  let keepbullets = []
  let anyBullethit = false;

  // Enemy Variables
  let keepenemy = []
  let anyEnemyhit = false;

  // Drawning Canvas Background every frame
  background("#d9d9d9")
  textSize(20);
  text(Math.round(frames), 20, 30);
  text("");

  // Bullet for loop \\

  // Traverse the bullets in the draw function. Check if a bullet has hit an enemy or has left the screen. Keep the bullets for next run of draw
  for (let i=0; i < bullets.length; ++ i) {
    
    bullets[i].toMouse()

    let hit = dist(bullets[i].x, bullets[i].y, this.enemyx, this.enemyy) <= this.enemyr;
    anyBullethit = anyBullethit || hit

    // If bullets didn't hit and bullets are on screen then push bullets into keepbullets and show all bullets in array
    if (!hit && bullets[i].onScreen()) {
        keepbullets.push(bullets[i]);
        bullets[i].show();
    }
    bullets = keepbullets;

    if (anyBullethit) {
      score += 100;
  }

} 

  // Player for loop \\

  for (let i=0; i < enemies.length; ++ i){

    enemies[i].toPlayer()

    let hit = dist(enemies[i].x, enemies[i].y, playerController.x, playerController.y) <= playerController.r
    anyEnemyhit = anyEnemyhit || hit;

    if (!hit && enemies[i].EnemyonScreen()){
      keepenemy.push(enemies[i]);
      enemies[i].showEnemy();

      console.log("no hit")
    }
    enemies = keepenemy;

  }

  //Rendering Player and Player GUI
  playerController.renderPlayer();
  playerUI.renderGUI();

  //Spawning
  spawnEnemy();

}

// Bullet Logic \\

function mousePressed(){
    //If mouseX is not equal to playerX or mouseY is not equal to playerY
    if (mouseX != playerController.x || mouseY != playerController.y ) {
        //Push new bullet into array and create new Bullet while passing in variables
        bullets.push( new Bullet(mouseX,mouseY,playerController.x,playerController.y) )
    }
}

function Bullet(X,Y,PX,PY){

    this.speed = 10;
    this.x = PX;
    this.y = PY;
    this.dir = createVector(X-PX, Y-PY).normalize() //Use p5.Vector to calculate the normilized direction from player to bullet
    this.r = 8;


    //Show bullet when new Bullet is created in mousePressed() function
    this.show = function(){

        push();

        fill(255,255,0);
        stroke(128,128,0);
        circle(this.x,this.y,this.r * 2);

        pop();

    }

    // Updates direction of bullet to mouses
    this.toMouse = function() {
        this.x += this.dir.x * this.speed;
        this.y += this.dir.y * this.speed;
    }
    
    // Verifies if the bullet is still in bounds of the screen
    this.onScreen = function() {
      return this.x > -this.r && this.x < width+this.r && this.y > -this.r && this.y < height+this.r;
    }

}

// Enemy Logic \\

function spawnEnemy(){
  enemies.push( new Enemies(0, 0, playerController.x, playerController.y))
}

function Enemies(X, Y, PX, PY){
  
  this.speed = 2;

  this.playerx = PX;
  this.playery = PY;
  this.enemyx = X;
  this.enemyy = Y;

  this.dir = createVector(X-PX, Y-PY).normalize()
  this.enemyr = 42;


  //Show enemy when new Enemy is created in spawnEnemy() function
  this.showEnemy = function(){

      push();

      stroke("#c9001b");
      strokeWeight(4);
      ellipse(this.enemyx, this.enemyy, this.enemyr * 2);

      pop();

  }

  // Updates direction of enemy to player
  this.toPlayer = function() {

    this.playerx += this.dir.enemyx * this.speed;
    this.playery += this.dir.enemyy * this.speed;

  }
  
  // Verifies if the  is still in bounds of the screen
  this.EnemyonScreen = function() {
    return this.enemyx > -this.enemyr && this.enemyx < width+this.enemyr && this.enemyy > -this.enemyr && this.enemyy < height+this.enemyr;
  }
}

//setInterval(() => frames = frameRate(), 500);