//Creating Variables
var playerController; // Contains the Player.js class
var enemyController; // Contains the Enemy.js class
var playerUI; // Contains the PlayerUI.js class

var originalFr = 60; // Capping Frame Rate

var canvasX = 1368; // X Canvas size
var canvasY = 780; // Y Canvas size

var bullets = []; // Bullet Array

var score = 0; // Score
var kills = 0;
let frames = 60; // Frams



function setup() {

  //Window Width of Canvas
  createCanvas(canvasX, canvasY);

  //Framerate
  frameRate(originalFr); 

  //Classes
  playerController = new Player();
  playerUI = new PlayerUI();
  enemyController = new Enemy();

  //Changing Modes
  rectMode(CENTER);
  angleMode(RADIANS);

  console.log(" ✅ Setup Finished")

  //noLoop();
  //canvasX.hide();canvasY.hide();

}

function draw() {
  
  // Bullet Variables
  let keepbullets = []
  let anyBullethit = false;

  // Drawning Canvas Background every frame
  background("#d9d9d9")
  textSize(20);
  text(Math.round(frames), 20, 30);

  push();

    textSize(40);
    text(`${score}`, 400,50);

  pop();

  push();

    textSize(40);
    text(`${kills} kills`, 250, 50)

  pop();

  // Bullet for loop \\

  // Traverse the bullets in the draw function. Check if a bullet has hit an enemy or has left the screen. Keep the bullets for next run of draw
  for (let i=0; i < bullets.length; ++ i) {
    
    bullets[i].toMouse()

    let hit = dist(bullets[i].x, bullets[i].y, enemyController.enemyX, enemyController.enemyY) <= enemyController.enemyR;
    anyBullethit = anyBullethit || hit

    // If bullets didn't hit and bullets are on screen then push bullets into keepbullets and show all bullets in array
    if (!hit && bullets[i].onScreen()) {
        keepbullets.push(bullets[i]);
        bullets[i].show();
    }
    bullets = keepbullets;

    if (anyBullethit) {
      score += 100;
      kills += 1;
      enemyController = new Enemy();
  }

} 

  //Rendering Player, Player GUI and Enemy
  playerController.renderPlayer();
  playerUI.renderGUI();
  enemyController.renderEnemy();


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


// function startGame(){
//   loop();
//   canvasX.show();canvasY.show();

//   console.log("Start Game")
// }



setInterval(() => frames = frameRate(), 500);