const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300

function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,690,1200,35)
  
  for (var i=0; i<= width; i = i+80){
    divisions.push(new Division(i, height - divisionHeight/2, 10, divisionHeight))

  }
   
  for (var i=40; i<= width; i = i+50){
    plinkos.push(new Plinko(i, 75))

  }

  for (var i=15; i<= width; i = i+50){
    plinkos.push(new Plinko(i, 175))

  }
  
  for (var i=40; i<= width; i = i+50){
    plinkos.push(new Plinko(i, 275))

  }

  for (var i=15; i<= width; i = i+50){
    plinkos.push(new Plinko(i, 375))

  }
 

  if(frameCount%60 === 0){
    particles.push(new Ball(random(this.width/2-10, this.width/2+10), 20))

  }


}

function draw() {
  background(22,244,195);  

  ground.display()

  for (var j =0; j<plinkos.length; j++){
    plinkos[j].display()

  }

  for (var j = 0; j<particles.length; j++){
    particles[j].display()

  }
  for (var j =0; j<divisions.length; j++){
    divisions[j].display()

  }
  //drawSprites();
}