var wall, thickness;
var bullet, speed, weight;

function setup(){
  createCanvas(1600,400);
 speed = random(223,321);
 thickness = random(22,83);
 weight = random(30,52);
 bullet = createSprite(50,200,50,10);
 wall=createSprite(1500,200,thickness,height/2);
}

function draw(){
  background(0,0,0);
  bullet.velocityX = speed;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      bullet.shapeColor=color("green");
    }
    if(damage<10){
      bullet.shapeColor=color("red");
    }
  }
    drawSprites();
}