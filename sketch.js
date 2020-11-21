var bullet, wall;
var speed, weight;
var deformation;

var thickness;

function setup() {
  createCanvas(1600,400);

  speed =random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  console.log(speed);

  bullet = createSprite (50,200,50,10);
  wall = createSprite (1000,200,thickness,height/2);

  wall.shapeColor = color(255);

  bullet.velocityX = speed;

}

function draw() {
  background(0,0,0);  

if (hasCollided(wall,bullet))
{
 
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  console.log(damage);

  if (damage > 10)
  {
    wall.shapeColor = color (255,0,0);
  }

  if (damage < 10)
  {
    wall.shapeColor = color(0,255,0);
  }
  
}

  drawSprites();
}