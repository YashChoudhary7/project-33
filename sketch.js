const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//var snow = [];
function preload(){
  backgroundImg = loadImage("snow3.jpg");
  childImg = loadImage("child.png");
}

function setup() {
  createCanvas(1500,700);
  engine = Engine.create()
  world = engine.world;
 child = createSprite(1350, 550, 50, 50);
 child.addImage(childImg);
 child.scale=0.2;
snow1 = new Snow(200, 100, 100, 100);
snow2 = new Snow(1000, 100, 100, 100);

ground=createSprite(750, 670, 2000, 10);
}

function draw() {
  background(backgroundImg); 
   fill("yellow"); textSize(20); text("Move the Child by Arrow keys", 400,70);
   fill("yellow"); textSize(20); text("AND", 500,100);
   fill("yellow"); textSize(20); text("Make him Jump by Space key", 400,130);
  if(keyDown("space") && child.y >= 559) {
    child.velocityY = -12;
  }

  child.velocityY = child.velocityY + 0.6
  child.collide(ground);
  if(keyDown("left_arrow")){
    child.x = child.x - 3;
  }
  if(keyDown("right_arrow")){
    child.x = child.x + 3;
  }
  snow1.display();
  snow2.display(); 
  //if(frameCount%60===0){
    //snow.push(new Snow(random(width/2-30, width/2+30), 10,10));
  
  //}

 //for (var j = 0; j < snow.length; j++) {
  
   // snow[j].display();
  //}
  drawSprites();
}
