
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftSide;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    var ball_options={
    isStatic:false,
    restitution:0.2,
	friction:0,
	density:1.2
	}

	//Create the Bodies Here.
    ball=Bodies.circle(150,10,10,ball_options);
    World.add(world,ball);
	ellipseMode(RADIUS);
    ground=new Ground(400,370,1500,5);
	leftSide= new Ground(555,345,10,50);
	rightSide=new Ground(650,345,10,50)
	Engine.run(engine);
  
}


function draw() {
	createCanvas(800,400);
    background(0);
	ground.show();
	leftSide.show();
	rightSide.show();
	ellipse(ball.position.x,ball.position.y,10);
	drawSprites();
 
}


function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:-25})


}



}
