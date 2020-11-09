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

  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;

}

function draw() {
  background(0,0,0);  

  if (wall.x - bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22500;

    if (deformation > 180)
    {
      bullet.shapeColor=color(225,0,0);
    }

    if (deformation < 180 && deformation > 100)
    {
      bullet.shapeColor = color(230,230,0);
    }

    if (deformation<100)
    {
      bullet.shapeColor = color(0,255,0);
    }
  }

if (hasCollided(wall,bullet))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);


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