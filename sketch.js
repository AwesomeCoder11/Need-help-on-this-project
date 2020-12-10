
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof1 = new Roof(400,100,700,30);
	
	bobObject1 = new Bob(140,300,30);

	bobObject2 = new Bob(280,300,30);
	
	bobObject3 = new Bob(420,300,30);
	
	bobObject4 = new Bob(560,300,30);
	
	bobObject5 = new Bob(700,300,30);

	rope1 = new Rope(bobObject1.body,roof1.body,70,0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 roof1.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
}



