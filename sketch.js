var issImg, iss, spacecraftImg, spacecraftImg2, spacecraftIm3, spacecraftImg4, spacecraft;
var hasDocked = false;
var background, backgroundImg

function preload() {
issImg = loadImage("Docking-undocking/iss.png")
backgroundImg = loadImage("Docking-undocking/spacebg.jpg")
spacecraftImg = loadImage("Docking-undocking/spacecraft1.png")
spacecraftImg2= loadImage("Docking-undocking/spacecraft2.png")
spacecraftImg3= loadImage("Docking-undocking/spacecraft3.png")
spacecraftImg4 = loadImage("Docking-undocking/spacecraft4.png")

}

function setup() {
  createCanvas(800,400);

  iss = createSprite(330,130)
  iss.addImage(issImg)
  iss.scale = 1;

  spacecraft = createSprite(285,240)
  spacecraft.addImage(spacecraftImg)
  spacecraft.scale = 0.15;
}

function draw() {
  background(backgroundImg);
  
 // spacecraft.addImage(spacecraft);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraftImg4);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraftImg3);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraftImg2);
  }
}
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}

