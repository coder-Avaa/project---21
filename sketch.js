var canvas;
var music;
var rect1, rect2;
var rect3, rect4;
var square;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
  canvas = createCanvas(800,600);
   //create 4 different surfaces
    rect1 = createSprite(165, 560, 65, 20);
    rect1.shapeColor = "blue";
    rect1.debug = true;
    rect1.visible = true;

    rect2 = createSprite(365, 560, 65, 20);
    rect2.shapeColor = "red";
    rect2.debug = true;
    rect2.visible = true;

    rect3 = createSprite(565, 560, 65, 20);
    rect3.shapeColor = "orange";
    rect3.debug = true;
    rect3.visible = true;

    rect4 = createSprite(765, 560, 65, 20);
    rect4.shapeColor = "purple";
    rect4.debug = true;
    rect4.visible = true;
     //create box sprite and give velocity
      square = createSprite(random(20, 700), random(50, 680), 25, 25);
      square.shapeColor = "black";
      square.debug = true;
      square.visible = true;
      square.x = World.mouseX;
      square.y = World.mouseY;
}
function draw() {
    background(150);
 
    if(square.x - rect1.x < rect1.width/2 + square.width/2 && 
        rect1.x - square.x < rect1.width/2 + square.width/2 &&
        square.y - rect1.y < rect1.height/2 + square.height/2 &&
        rect1.y - square.y < rect1.height/2 + square.height/2) {
        square.shapeColor = "blue";
      }
      else{
       square.shapeColor = "black";
      }
      if(square.x - rect2.x < rect2.width/2 + square.width/2 && 
        rect2.x - square.x < rect2.width/2 + square.width/2 &&
        square.y - rect2.y < rect2.height/2 + square.height/2 &&
        rect2.y - square.y < rect2.height/2 + square.height/2) {
        square.shapeColor = "red";
      }
      else{
       square.shapeColor = "black";
      }
      if(square.x - rect3.x < rect3.width/2 + square.width/2 && 
        rect3.x - square.x < rect3.width/2 + square.width/2 &&
        square.y - rect3.y < rect3.height/2 + square.height/2 &&
        rect3.y - square.y < rect3.height/2 + square.height/2) {
        square.shapeColor = "orange";
      }
      else{
       square.shapeColor = "black";
      }
      if(square.x - rect4.x < rect4.width/2 + square.width/2 && 
        rect4.x - square.x < rect4.width/2 + square.width/2 &&
        square.y - rect4.y < rect4.height/2 + square.height/2 &&
        rect4.y - square.y < rect4.height/2 + square.height/2) {
        square.shapeColor = "purple";
      }
      else{
       square.shapeColor = "black";
      }
    drawSprites();
}
