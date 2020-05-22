var obj2, movingRect,obj1,obj2;

function setup() {
  createCanvas(1200,800);
  //obj2 = createSprite(400, 100, 50, 80);

  obj1 = createSprite(200, 100, 50, 80);
  obj1.shapeColor="white";

  obj2 = createSprite(400, 100, 50, 80);
  obj2.shapeColor="yellow";

  //obj2.shapeColor = "green";
  obj2.debug = true;

 // movingRect = createSprite(400, 800,80,30);
  //movingRect.shapeColor = "red";
  
  obj1.velocityX = +5;
  obj2.velocityX = -5;
}

function draw() {
  background(0,0,0);  


  bounceOff(obj1,obj2);
  drawSprites();
}

