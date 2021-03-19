
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;
var mConstraint,pen;
var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;

function setup()
 {
	createCanvas(1200,800);
	engine = Engine.create();
	world = engine.world;
  
bob1=new Bob(100,100,80,80);

bob2=new Bob(200,200,80,80);
bob3=new Bob(300,300,80,80);
bob4=new Bob(400,400,80,80);
bob5=new Bob(500,500,80,80);
bob6=new Bob(600,600,80,80);
bob7 = new Bob(700,700,80,80);
bob8 = new Bob(800,800,80,80);

 // ground1 = new roof(400,100,300,40);
  rope1= new ropes(bob1.body,{x : 300, y : 50});
  rope2= new ropes(bob2.body,{x : 380, y : 50});
  rope3= new ropes(bob3.body,{x : 460, y : 50});
  rope4= new ropes(bob4.body,{x : 540, y : 50});
  rope5= new ropes(bob5.body,{x : 620, y : 50});
  rope6= new ropes(bob6.body,{x : 700, y : 50});
  rope7= new ropes(bob7.body,{x : 780, y : 50});
  rope8= new ropes(bob8.body,{x : 860, y : 50});
	Engine.run(engine);  
}


function draw() 
{
  background(100);
//	ground.fill(48,22,8);
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  rope8.display();

  fill("red");
  bob1.display();
  fill("green");
  bob2.display();
  fill("blue");
  bob3.display();
  fill("yellow");
  bob3.display();
  fill("white");  
  bob4.display();
  fill("orange");
  bob5.display();
  fill("purple");
  bob6.display();
  fill("violet");
  bob7.display();
  fill("lightblue");
  bob8.display();
  //bob6.display();
  //ground1.display();
  
  //sling6.display();

 // mouseDragged();
  drawSprites ();
}

/*function mouseDragged() { 
  if (keyCode === UP_ARROW)
   {
    Matter.Body.setPosition(bob1.body, bob1.body.position,{x:-75,y:75});
   }

} */

function mouseDragged()
{
 //Matter.body.setPosition(bob1.body,{x: mouseX,y: mouseY});
 Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}