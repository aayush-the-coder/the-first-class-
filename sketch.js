var car ; 
function setup() {
  createCanvas(400,400);
   car = createSprite(200,200,16,10);

}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
car.position.x=car.position.x+2;
  }
drawSprites();
}




