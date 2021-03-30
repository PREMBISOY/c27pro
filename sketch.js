
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bobobj1 = new Bob(280,400,30);
   bobobj2 = new Bob(340,400,30);
   bobobj3 = new Bob(400,400,30);
   bobobj4 = new Bob(460,400,30);
   bobobj5 = new Bob(520,400,30);

   roof = new Roof(400,150,400,20);
  strokeWeight(2);
   rope1 = new Rope(bobobj1.body,roof.body, -120,0);
   rope2 = new Rope(bobobj2.body,roof.body, -60,0);
   rope3 = new Rope(bobobj3.body,roof.body, 0,0);
   rope4 = new Rope(bobobj4.body,roof.body, 60,0);
   rope5 = new Rope(bobobj5.body,roof.body, 120,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  

  bobobj1.display();
  bobobj2.display();
  bobobj3.display();
  bobobj4.display();
  bobobj5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //keyPressed();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(bobobj1.body,bobobj1.body.position,{x:-50,y:-45})


	}

}

