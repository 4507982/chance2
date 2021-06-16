var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  var division1,division2,division3,division4,division5;
 var plinko1,plinko2,plinko3,plinko4;   
var particles = [];
var plinkos = [plinko1,plinko2,plinko3,plinko4  ];
var divisions =[division1,division2,division3,division4,division5];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=100; k = k + 80) {
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  //create 1st row of plinko objects
  for (var j = 40; j <=width; j=j+50) { 
  plinkos.push(new Plinko(j,75));
  }

  
  //create 4th row of plinko objects
  


  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  

  for (var i = 0; i < plinkos.length; i++) { 
    plinkos.push(new Plinko(j,75));
    }
   
  //display the divisions
  for (var k = 0; k < division1.length; k++) {
    division1[k].display();
  }
  for (var k = 0; k < division2.length; k++) {
    division2[k].display();
  }
  for (var k = 0; k < division3.length; k++) {
    division3[k].display();
  }
  for (var k = 0; k < division4.length; k++) {
    division4[k].display();
  }
  for (var k = 0; k < division5.length; k++) {
    division5[k].display();
  }

  //display the paricles 

}