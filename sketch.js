var A;
var L;
var E;


function setup() {
  createCanvas(1000, 400);
  //Crea los sprites necesarios para formar tu nombre
  A= createSprite(250, 200, 20, 20);
  L= createSprite(300, 250, 20, 20);
  E= createSprite(350, 300, 20, 20);
}


function draw() {
  background("black");

  drawSprites();
  
}