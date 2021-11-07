
var sea, seaImg;
var ship1,shipImg1;


function preload(){
seaImg=loadImage("sea.png");
shipImg1=loadImage("ship-1.png,ship-2.png");
}

function setup(){
  createCanvas(400,400);
  ship1 = createSprite(50,150,20,30);
  ship1.addAnimation(shipImg1);
  ship1.scale = 0.5;
  
  sea=createSprite(400,400,400,400);
  sea.addAnimation(seaImg);
  sea.velocityX = -2;

if(sea.x<0){

  sea.x = sea.whidth/2;
}

}

function draw() {
  background("blue");
     setup();
    drawSprites();

 
}
