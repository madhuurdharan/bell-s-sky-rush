var PLAY = 1;
var END = 0;
var gameState = PLAY;
var blueSky,sky;
var back,backImg;
var tinkerBell,bell;
var pinkTree,tree,pinkey;
var badPotion,badPotionImg;
var stonesImg,stones;
var gameOver,gameOverImg;
var potion,potionImg;
var bird,birdImg;
var retry,retryImg;
var inivisibleBottom,inivisiblesky;
var score =0;
var gameOverSound,coinSound;
var losingSound;
function preload(){
 sky=loadImage("skyF.png");
 Bell=loadImage("bell.png");
 pink=loadImage("pink.jfif");
 stonesImg=loadImage("rock.png");
 gameOverImg=loadImage("gameOver.png");
 potionImg=loadImage("potion.png");
  retryImg=loadImage("retry.png");
  gameOverSound = loadSound("gameOver.wav");
 coinSound = loadSound("coins.wav");
  backImg=loadImage("back.jpg");
  badPotionImg=loadImage("redpo.png");
  birdImg=loadImage("bird.png");
losingSound=loadSound("426596__mootmcnoodles__clink.wav");
}

function setup() {
  createCanvas(600,480);
  
   blueSky=createSprite(300,200);
   blueSky.addImage(sky);
   blueSky.velocityX=-2;
   blueSky.scale=1;
 
    back=createSprite(300,200);
   back.addImage(backImg);
  back.scale=1.3;
  back.visible=false;
  
   tinkerBell=createSprite(130,200);
   tinkerBell.addImage(Bell);
   tinkerBell.scale=0.2;
  
  inivisibleBottom=createSprite(300,485,598,50)
  inivisibleBottom.visible=false;
  
  inivisiblesky=createSprite(300,-18,598,50)
inivisiblesky.visible=false;
  
 retry=createSprite(280,350);
  retry.addImage(retryImg);
  retry.scale=0.3;
retry.visible=false;
  
  gameOver=createSprite(300,200);
  gameOver.addImage(gameOverImg);
  gameOver.scale=0.3;
gameOver.visible=false;
   stonesGroup=createGroup();
    birdsGroup=createGroup();
    redPotionGroup=createGroup();
    potionGroup=createGroup();
score=0;

  
}

function draw() {

  background(220);
  if(gameState===PLAY){
  tinkerBell.y = World.mouseY;
      blueSky.visble=true;
     back.visible=false;
     stones();
       birds();
    redPotion();
  potion();
    if(tinkerBell.isTouching( potionGroup)){
      potionGroup.destroyEach();
      coinSound.play();
    score=score+2;
     
}
  
    
       if (blueSky.x < 0){
      blueSky.x = blueSky.width/2;
       }
    if(tinkerBell.isTouching(stonesGroup)){
     gameState=END;
        
      tinkerBell.visible=false;
      gameOverSound.play();
    }
      if(tinkerBell.isTouching(birdsGroup)){
     gameState=END;
       
      tinkerBell.visible=false;
      gameOverSound.play();
    }
      if(tinkerBell.isTouching(redPotionGroup)){
      redPotionGroup.destroyEach();
      losingSound.play();
    score=score-1;
    }

}  else if (gameState === END) {
   gameOver.visible = true;
    retry.visible = true;
  blueSky.visble=false;
   back.visible=true;
  potionGroup.destroyEach();
   stonesGroup.destroyEach(); 
  redPotionGroup.destroyEach(); 
  birdsGroup.destroyEach(); 
      tinkerBell.visible=false;
   stonesGroup.setLifetimeEach(-1);
  birdsGroup.setLifetimeEach(-1);
   redPotionGroup.setLifetimeEach(-1);
  potionGroup.setLifetimeEach(-1);
       if(mousePressedOver(retry)) {
  reset();
    }
  } 

  tinkerBell.collide(inivisibleBottom);
  tinkerBell.collide(inivisiblesky);
 
  drawSprites();
   textSize(20);
  fill(255);
  text("pixie dust potion: "+score,10,20);
  

}

function stones(){
  if(frameCount% 280===0){
   var stones=createSprite(500,285);
  stones.y = Math.round(random(100,285))
  stones.addImage(stonesImg);
    stones.scale=0.1;
    stones.velocityX=-5;
    stonesGroup.add(stones);
   stones.lifetime = 300;
      stones.depth = tinkerBell.depth;
  tinkerBell.depth = tinkerBell.depth + 1;
}}
  function potion(){
     if(frameCount% 80===0){
    var potion =createSprite(500,285);
    potion.y = Math.round(random(100,300))
    potion.addImage(potionImg);
    potion.scale=0.2;
    potion.velocityX=-2;
    potionGroup.add(potion);
     potion.lifetime = 300;
         potion.depth = tinkerBell.depth;
  tinkerBell.depth = tinkerBell.depth + 1;
  }
  
}
function reset(){
  gameState = PLAY;
  gameOver.visible = false;
 retry.visible = false;
tinkerBell.visible=true;
 
  
  score = 0;
  
}
function redPotion(){
  if(frameCount% 300===0){
   var badPotion =createSprite(700,285);
  badPotion.y = Math.round(random(100,380))
  badPotion.addImage(badPotionImg);
    badPotion.scale=0.2;
    badPotion.velocityX=-2;
    redPotionGroup.add(badPotion);
  badPotion.lifetime = 300;
      badPotion.depth = tinkerBell.depth;
  tinkerBell.depth = tinkerBell.depth + 1;
}}
function birds(){
  if(frameCount% 140===0){
   var bird=createSprite(500,285);
  bird.y = Math.round(random(100,350))
  bird.addImage(birdImg);
    bird.scale=0.1;
    bird.velocityX=-6;
    birdsGroup.add(bird);
   bird.lifetime = 300;
      bird.depth = tinkerBell.depth;
  tinkerBell.depth = tinkerBell.depth + 1;
   
}}