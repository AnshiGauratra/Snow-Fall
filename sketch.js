const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var bgimg;
var snow=[];
var olaf, img1,img2;

function preload(){
  bgimg=loadImage("bg2.jpg");
  img1=loadImage("1.png");
  // img2=loadImage("2.png")
}

function setup() {
  engine=Engine.create();
  world=engine.world;
  olaf = createSprite(1050,470,20,20)
  olaf.scale = 1.3;

  olaf.addImage(img1)
  createCanvas(1350, 640);

  if(frameCount % 50 === 0){
    for(var i=0; i<200; i++){
      snow.push(new createSnow(random(0,1350), random(0,1350)));
    }
  }
}

function draw() {
  background(bgimg);  
  Engine.update(engine);
  
  for(var i = 0; i<200; i++){
    snow[i].showDrop();
    snow[i].updateY()
  }

 /* var rand=Math.round(random(1,2))
  if(rand===1){
      olaf.addImage(img1)
  }
  if(rand===2){
    olaf.addImage(img2)
  }*/
  drawSprites();
}

