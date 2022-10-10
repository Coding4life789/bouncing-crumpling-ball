const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  bottomGround=new Ground(199,387,400,10);
  leftGround=new Ground(2,198,10,398);
  topGround = new Ground(205,6,400,10);
  rightGround = new Ground(390,179,10,400)


 button=createImg("push.png")
 button.position(10,10);
 button.size(40,40)
  button.mouseClicked(force);

  
  



  var options={
    restitution:1
    
    
  }
ball=Bodies.circle(10,100,20,options);
World .add(world,ball);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  bottomGround.show()
  leftGround.show()
  topGround.show()
  rightGround.show()
  ellipse (ball.position.x,ball.position.y,20,20);
  text(mouseX+","+mouseY,mouseX,mouseY);
}
function force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

