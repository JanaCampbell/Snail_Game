function wormMovement(){
    if(keyDown("right")){
        worm.x=worm.x+5;
        worm.width=30
        worm.height=5
        worm.addImage(wormRight)
        worm.scale=0.1
      }
      if(keyDown("down")){
        worm.y=worm.y+5;
        worm.width=5
        worm.height=30
        worm.addImage(wormDown)
        worm.scale=0.1
      }
      else if(collision()){
          worm.width=30;
          worm.height=150;
      }
      if(keyDown("up")){
        worm.y=worm.y-5;
        worm.width=5
        worm.height=30
        worm.addImage(wormUp)
        worm.scale=0.1
      }
      else if(collision()){
        worm.width=30;
        worm.height=5;
    }
      if(keyDown("left")){
        worm.x=worm.x-5;
        worm.width=30
        worm.height=5
        worm.addImage(wormLeft)
        worm.scale=0.1
      }
      
}
function wormSize(){
  if(score> 50){
    worm.scale=+0.2
  }
}

function collision(){
    if(worm.isTouching(c1)||worm.isTouching(c2)||worm.isTouching(c3)||worm.isTouching(c4)||worm.isTouching(c5)||worm.isTouching(c6)
    ||worm.isTouching(c7)||worm.isTouching(c8)||worm.isTouching(c9)||worm.isTouching(c10)||worm.isTouching(c11)||worm.isTouching(c12)
    ||worm.isTouching(c13)||worm.isTouching(c14)||worm.isTouching(c15)||worm.isTouching(c16)||worm.isTouching(c17)||worm.isTouching(c18)
    ||worm.isTouching(c19)||worm.isTouching(c20)){
        worm.x=20;
        worm.y=20;
        worm.width=30;
        worm.height=5;
    }
}

function foodItems(){
    if(frameCount%80===0){
        food=createSprite(random(10,100),random(10,100),10,10);
        food.lifetime=200;

        var r=round(random(1,7))
        switch(r){
          case 1:{food.x=284,food.y=25}
          break;
          case 2:{food.x=517,food.y=91}
          break;
          case 3:{food.x=162,food.y=197}
          break;
          case 4:{food.x=252,food.y=312}
          break;
          case 5:{food.x=522,food.y=285}
          break;
          case 6:{food.x=51,food.y=474}
          break;
          case 6:{food.x=270,food.y=570}
          break;
          case 7:{food.x=550,food.y=450}
        }
        food.addImage(apple)
        food.scale=0.2
        foodGroup.add(food)
    }
}