var bullet, wall;
var thickness, speed, weight;

function setup(){
    createCanvas(1600,400);

   speed=random(223,321);
  weight=random(30,52);
  thickness = random(40,70);

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "white";
 }

function collided(bullet,wall){
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;

    if(bulletRightEdge >= wallLeftEdge){
        return true;
    }
    else{
        return false;
    }
}

function draw(){
    background("black");
    bullet.velocityX = speed;

    if(collided(bullet,wall)) { 
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if(damage > 10){
        wall.shapeColor = "red";
        bullet.shapeColor = "red";
        bullet.velocityX = 0;
    }
    if(damage < 10){
        wall.shapeColor = "green";
        bullet.shapeColor = "green";
        bullet.velocityX  = 0;
    }

    }

    drawSprites();
}
