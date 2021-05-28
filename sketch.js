//matter.js is a physics engine

//const means constant
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

/*
//DISCUSSION ON ARRAY(DON'T DELETE)
var arr = [120, 230, 370, 104]
console.log(arr[1])
console.log(arr[3])

var arr1 = ["sankalp", 12, 40.3]
console.log(arr1[0])

var arr2 = [ ["sankalp", "ridima", "yash"], 
            [20, 30, 40, 50],
            [2.3, 4.5, 20.5]
          ]

console.log(arr2[0][1])
console.log(arr2[1][3])
*/

var box; 
var ground;
var ball1;
var ball2;
var ball3;
var constrainedLog;
var chain;
var state= 0;

function preload() {
  //bg = loadImage("sprites/bg.png")
  //night_bg = loadImage("sprites/night.jpg")
  getBgImage();
}

function setup() {
  createCanvas(1370,500);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  bird = new Bird(200, 128, 50, 50)

  chain = new Chain(bird.body, {x:200, y:128})

  box = new Box(800, 150, 70, 70);
  box1 = new Box(1000, 150, 70, 70);

  box2 = new Box(850, 100, 70, 70);
  box3 = new Box(950, 100, 70, 70);

  box4 = new Box(900, 50, 70, 70);

  pig1 = new Pig(900,150)
  pig2 = new Pig(900,100)

  log1 = new Log(900, 110, 350, PI/2)
  log2 = new Log(900, 90, 300, PI/2)
  log3 = new Log(870, 50, 150, PI/4)
  log4 = new Log(930, 50, 150, 3*PI/4)

  //constrainedLog = new Log(200, 200, 200, PI/2)

  ground = new Ground(700,490,1400,20);

  platform = new Ground(120, 390, 230, 187)

  /*
  ball1 = Bodies.circle(200, 50, 49, {restitution:1.5})
  World.add(myWorld, ball1);

  ball2 = Bodies.circle(250, 50, 35, {restitution:1.5})
  World.add(myWorld, ball2);

  ball3 = Bodies.circle(280, 50, 35, {restitution:1.5})
  World.add(myWorld, ball3);
  */

}

function draw() {
  
  background(bgImage); 

  if(state===1) {
    fill("black")
    textSize(25)
    textFont("Comic Sans MS")
    text("Press Space to Restart", 750, 30)
  }

  Engine.update(myEngine);

  rectMode(CENTER)
  bird.display();
  
  box.display();
  box1.display();

  box2.display();
  box3.display();
  box4.display();

  pig1.display();
  pig2.display();


  log1.display();
  log2.display();
  log3.display();
  log4.display();

  //constrainedLog.display();

  chain.display();

  ground.display();

  platform.display();
  

/*
  ellipseMode(RADIUS)
  fill("red")
  ellipse(ball1.position.x, ball1.position.y, 49, 49)

  fill("pink")
  ellipse(ball2.position.x, ball2.position.y, 35, 35)

  fill("yellow")
  ellipse(ball3.position.x, ball3.position.y, 28, 28)
*/

}
function mouseDragged() {
  //mouseDragged, mouseReleased, keyPressed are called JavaScript events
  Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY})
}

function mouseReleased() {
  state = 1;
  chain.fly()
}
function keyPressed() {
  //32 is the keyCode 0f "space" key
  if(keyCode === 32) {
    Matter.Body.setPosition(bird.body, {x:200, y:218})
    chain.attach(bird.body)
    state =0
    bird.tra();
  }
}
 function getBgImage() {

  var today=new Date() 
  var time = today.getHours()// + ":" + today.getMinutes() + ":" +today.getSeconds()
  console.log(time)

  if(time>=6 && time<= 19){
    bg = "sprites/bg.png"
  }

  else {
    bg = "sprites/night.jpg"
  }
    bgImage = loadImage(bg)
 }