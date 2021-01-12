var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20;
var worm,food,door,score;

function preload(){

  wormRight=loadImage("wormRight.png")
  wormDown=loadImage("wormDown.png")
  wormLeft=loadImage("worm.png")
  wormUp=loadImage("wormUp.png")
  apple=loadImage("apple..png")
}
function setup(){
  createCanvas(600,600)
  c1=createSprite(65,153,10,100);
  c1.shapeColor=("white");
  c2=createSprite(165,153,100,10);
  c2.shapeColor=("white");
  c3=createSprite(75,250,100,10);
  c3.shapeColor=("white");
  c4=createSprite(174,289,10,100);
  c4.shapeColor=("white");
  c5=createSprite(75,371,100,10);
  c5.shapeColor=("white");
  c6=createSprite(131,470,10,100);
  c6.shapeColor=("white");
  c7=createSprite(62,561,100,10);
  c7.shapeColor=("white");
  c8=createSprite(153,64,10,100);
  c8.shapeColor=("white");
  c9=createSprite(252,200,10,100);
  c9.shapeColor=("white");
  c10=createSprite(242,389,100,10);
  c10.shapeColor=("white");
  c11=createSprite(262,490,10,100);
  c11.shapeColor=("white");
  c12=createSprite(352,303,10,100);
  c12.shapeColor=("white");
  c13=createSprite(286,71,100,10);
  c13.shapeColor=("white");
  c14=createSprite(383,170,100,10);
  c14.shapeColor=("white");
  c15=createSprite(376,490,100,10);
  c15.shapeColor=("white");
  c16=createSprite(473,410,100,10);
  c16.shapeColor=("white");
  c17=createSprite(462,290,10,100);
  c17.shapeColor=("white");
  c18=createSprite(448,81,10,100);
  c18.shapeColor=("white");
  c19=createSprite(370,560,10,140);
  c19.shapeColor=("white");
  c20=createSprite(495,526,10,100);
  c20.shapeColor=("white");

  score=0

  worm=createSprite(20,20,30,5);
  foodGroup=new Group();
  
}

function draw(){
  background("purple")
  text(mouseX+" + "+mouseY,mouseX,mouseY)
  text(score,540,16)

 // s100();
  wormMovement();
  collision();
  foodItems();
  wormSize();

  if (foodGroup.isTouching(worm)){
    foodGroup.setLifetimeEach(0)
    score+=5
  }

  drawSprites();
}