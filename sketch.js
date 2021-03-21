
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var Bob1, Bob2, Bob3, Bob4, Bob5;
var Roof;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);
	
	engine = Engine.create();
	world = engine.world;

    Bob1 = new Bob(150,250,30);
    Bob2 = new Bob(200,250,30);
	Bob3 = new Bob(250,250,30);
	Bob4 = new Bob(300,250,30);
	Bob5 = new Bob(350,250,30);
    
	hold = new roof(250,100,300,10); 

	rope1 = new Chain(Bob1.body,hold.body,-60,0);
	rope2 = new Chain(Bob2.body,hold.body,-30,0);
	rope3 = new Chain(Bob3.body,hold.body,0,0);
	rope4 = new Chain(Bob4.body,hold.body,30,0);
	rope5 = new Chain(Bob5.body,hold.body,60,0); 
 	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
 
  hold.display();

  drawSprites();
 
}



