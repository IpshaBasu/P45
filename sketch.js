var mouse, mouseImg;
var cat, catImg;
var bg;
function preload(){

}
function preload(){
  mouseImg = loadImage("mouse.png");
  catImg = loadImage("cat.png");
  bg = loadImage("background.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  mouse = createSprite(650, 650, 100, 100);
  mouse.addImage("mouse",mouseImg);
  mouse.scale = 0.3;
  cat = createSprite(650, 400, 200, 200);
  cat.addImage("cat", catImg);
  cat.scale = 0.2;
}

function draw() {
  background(bg);  
  drawSprites();
  mouse.display();
}