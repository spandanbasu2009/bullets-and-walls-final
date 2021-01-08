var bulletPart1,bulletPart2;
var wall,thickness;
var speed, weight;        

function setup() {
    createCanvas(1600,400);
 
    speed = random(223,321);
    weight = random(30,52);
    thickness = random(22,83)

    bulletPart1 = createSprite(100,200,100,20);
    bulletPart1.velocityX = speed;
    bulletPart2 = createSprite(bulletPart1.x+40,bulletPart1.y,20,20);
    bulletPart2.velocityX = bulletPart1.velocityX;
    bulletPart1.shapeColor = color("pink");
    bulletPart2.shapeColor = color("orange");
    wall = createSprite(1200,200,thickness,height/2);
    wall.shapeColor = color("yellow");
}

function draw() {
       background("blue");

     if(hasCollided(bulletPart1,wall)){
         bulletPart1.velocityX=0;
         bulletPart2.velocityX = 0;
         var damage = (0.5*weight*speed*speed)/(wall.width*wall.width*wall.width);

         if(damage > 10){
             bulletPart1.shapeColor = color("green");
             bulletPart2.shapeColor = color("red");
             wall.shapeColor = color("red");
         }
         //if(deformation < 180 && deformation > 100){
             //car.shapeColor = color(230,230,0);
         //}
         if(damage < 10){
             bulletPart1.shapeColor = color("red");
             bulletPart2.shapeColor = color("green");
             wall.shapeColor = color("green");
         }
     }


    drawSprites();
}

function hasCollided(lbullet,lwall){
    bulletRightEdge = lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
        return true
    }
    return false;
}