
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
ground=new Ground(400,380,800,20);
paper=new Paper(200,200,20);
dustbin=new Dustbin(600,300);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  ground.display();
  paper.display();
  drawSprites();
 
}
function keyPressed()
{ if (keyCode===UP_ARROW)
  { Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-60}); 
} 
}


