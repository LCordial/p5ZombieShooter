/// <reference path="./modules/p5.d.ts" />

//Creating Variables
var playerController; //Contains the Player.js class
var enemyController;

var originalFr = 60; // Capping Frame Rate

var canvasX = 1200;
var canvasY = 800;

function preload(){

}

function setup() {
  //Window Width of Canvas
  createCanvas(canvasX, canvasY);
  //Framerate
  frameRate(originalFr); 
  //Classes
  playerController = new Player();
  enemyController = new Enemy();
  //Changing Modes
  rectMode(CENTER);
  angleMode(RADIANS);
}
//Changing Canvas Size on window resize
// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }

function draw() {
  //Rounding Frames
 //var roundedFrame = Math.round(frameRate())

  //Drawning Canvas Background every frame
  background("#e0e0e0");
  //textSize(20);
  //text(roundedFrame, 10, 30)
  
  //Rendering Player and Enabling Player Controller
  playerController.angleCalculation();
  playerController.show();
  enemyController.renderEnemy();
  
}
