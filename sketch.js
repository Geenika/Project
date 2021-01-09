
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var boy, mango;
var tree, stone;

function preload()
{
	//	getBackgroundImg();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground = new Ground(600,height,1200,20);
	tree = new Tree(400,350,50,50);
	mango = new mango(250,550,10,10);
	boy = new boy(200,175,25,25);
	stoneObj = new stone(100,50,12,12);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



