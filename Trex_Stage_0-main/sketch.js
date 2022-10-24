
var trex ,trexImg , ground , groundImg  ;


function preload(){
  trexImg =  loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImg = loadAnimation("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
 trex = createSprite(90,100,50,50)
trex.addAnimation ("running",trexImg)
trex.scale= .5

ground = createSprite(10,125,5,100)
ground.addAnimation ("base",groundImg)

}

function draw(){
  background("white")
  drawSprites();

}
