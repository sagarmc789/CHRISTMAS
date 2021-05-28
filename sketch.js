var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;

var snow = [];
var engine, world;
var run, runImg, santa, santaImg;
var bg, bgImg;
var line;
var gift;
//var santa;
//var run;

function preload() {
  bgImg = loadImage("snow1.jpg")
  santaImg = loadImage("santa.png")
runImg=loadImage("run.jpeg")
}


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  /*bg=createSprite(400,400,1000,1000)
  bg.addImage(bgImg)
  bg.scale=0.5*/

  santa = createSprite(200, 675, 50, 50)
  santa.addImage(santaImg)
  santa.scale = 0.18
  //santa=new Santa(300,650)

  run = createSprite(550, 500,30,30)
  run.addImage(runImg)
  run.scale=0.2

  line=createSprite(400,750,1000,3)
  line.visible=false

  gift=new Gift(-100,-100)
}



function draw() {
  background(bgImg);

  text("PRESS DOWN ARROW KEY TO GO TO SANTA AND PRESS SPACE TO GET GIFTS",320,20)

  Engine.update(engine);

if(keyCode===40){

  run.y=run.y+3
}




  //santa.display();
  //run.display();
  gift.display();
run.collide(line)

if(keyCode===32){

  Matter.Body.setPosition(gift.body,{x:360,y:700})
}

  if (frameCount % 100 === 0) {

    snow.push(new Snow(random(width / 4 - 400, width / 4 + 400), 30, 30))
  }

  for (var h = 0; h < snow.length; h++) {

    snow[h].display();


  }
  drawSprites();
}
