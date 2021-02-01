var database;
var player,form, game;
var gameState = 0;
var playerCount;
var allPlayers;

var cars,car1,car2,car3,car4;

function setup() {
    database = firebase.database();
    //to fit all screen sizes
    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    if(playerCount === 4) {
        game.update(1);
    }
    //plays the game
   if(gameState === 1) {
       clear();
       game.play();
   }
}