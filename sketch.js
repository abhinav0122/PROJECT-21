const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var b1,b2
var ball
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)

  b1=createImg("right.png")
  b1.position(220,30)
  b1.size(50,50)
  b1.mouseClicked(hforce)
   
  
  b2=createImg("up.png")
  b2.position(20,30)
  b2.size(50,50)
  b2.mouseClicked(vforce)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position .y,20,20)
}

function hforce (){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0} ) 
}
function vforce (){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05} ) 
  
  groundObj.display()
  groundObj=new ground(width/2,670,width,20);
  leftside=new ground(1100,600,20,120); 
}