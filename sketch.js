var canvas, backgroundImage;

var gameState = 0;
var distance = 0
var playerage = 0;
var allPlayers;
var mybutton;
var signs;
var button1, button2, button3, button4;
var question;

var traffic, trafficimg;
var traffic2, traffic2img;
var timeset=60;
var database;

var form, player, game;

function preload(){
  traffic2img = loadImage('images/oneway.png');
  trafficimg = loadImage('images/uturn no.png');
}


function setup(){
  canvas = createCanvas(displayWidth-100, displayHeight-200);
  database = firebase.database();
  

  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  background(124,196,125);


  if(gameState===1){
    clear();
    game.play();
  }

 
  

}
