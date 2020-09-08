var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83); 
  speed=random(223,321);
  weight =random(30,52);
  bullet = createSprite(50, 200, 50,10);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor =(80,80,80);
}

function draw() {
  background("black"); 
  if(hasCollided(bullet,wall))
  {
   bullet.velocityX=0;
   var damage =0.5 * weight* speed* speed/(thickness*thickness*thickness);
   if(damage>10)
   {
     wall.shapeColor="blue";
   }
   if(damage<10)
   {
    wall.shapeColor="red";
   }
   if(damage<18 && damage>10)
   {
wall.shapeColor="green";
   }
  }
  drawSprites();
}

function hasCollided(bullet,wall)
{
bulletRightEdge=1*bullet.x + 1*bullet.width;
wallLeftEdge=1*wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;
}


