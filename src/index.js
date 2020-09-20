/// <reference path="./modules/p5.d.ts" />

//Creating Variables
var playerController; //Contains the Player.js class
var originalFr = 60; // Capping Frame Rate


function preload(){

}

function setup() {
  //Window Width of Canvas
  createCanvas(windowWidth, windowHeight);
  //Framerate
  frameRate(originalFr); 
  //Classes
  playerController = new Player();
}
//Changing Canvas Size on window resize
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //Rounding Frames
  var roundedFrame = Math.round(frameRate())

  //Drawning Canvas Background every frame
  background("#e0e0e0");
  textSize(20);
  text(roundedFrame, 10, 30)
  
  //Rendering Player and Enabling Player Controller
  playerController.show();
}
