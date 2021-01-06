const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var rainArray = []
var bataman


function preload() {
}

function setup(){
   
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,390,1200,20);
    bataman = new Batman(600,100,30,100)
    if(frameCount%100 ===0){

        for(var i = 0;i<100;i++){
         rainArray.push(new Rain(random(1,1199),random(1,200)))
     }
     }
}

function draw(){
    
        background(0, 14, 89);
        
        noStroke();
        textSize(35)
        fill("white")
    
    Engine.update(engine);
    //strokeWeight(4);
   ground.display() 
   bataman.display();
   


   for(var i = 0;i<100;i++){
rainArray[i].display()
rainArray[i].updateY()
   }
}

