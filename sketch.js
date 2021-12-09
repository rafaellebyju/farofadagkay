var tokinho;
var tokinhoimg;
var pequenalo, kefera, alvaro;
var farofa;
var farofaimg;

function preload(){
  tokinhoimg = loadImage("tokinho.png");
  
  pequenalo = loadImage("pequenalo.png");
  kefera = loadImage("kefera.png");
  alvaro = loadImage("alvaro.png");
  
  farofaimg = loadImage("farofa.jpeg");

}
function setup() {
  createCanvas(600, 200);

  farofa = createSprite(200,180,400,20);
  farofa.addImage("ground",farofaimg);
  
  
  barreira = createSprite(200,190,400,10);
  barreira.visible = false;
  
  tokinho = createSprite(50,160,20,50);
  tokinho.scale = 0.35
  tokinho.addImage("running", tokinhoimg);
  //olha aqui eu coloquei 'running' porque eu nem sei oq é pra colocar ali entao vou copiar do projeto que nos ja fez bjss

}

function drawn(){
  obs();
  drawSprites();

  //pqp mano aaaaaaaaa eu apaguei alguma coisa e essa @#!!&%* parou de funcionar :( e como eu desisto de tudo que eu faço é isso que vou fazer agora desculpa te decepicionar mas eu nao faço a minima ideia do que fazer
  // a cara tava tudo tao perfeitinho eu sinto muito 
}



function obs(){

  if(frameCount % 80 === 0){
   var povo = createSprite(600,165,10,40);
   povo.velocityX = -2

  var troca = Math.round(random(1,3))

 switch(troca){
  case 1 : povo.addImage(pequenalo)
  break;
  case 2 : povo.addImage(kefera)
  break;
  case 3 : povo.addImage(alvaro)
  break;
 
  default: break;


 }

povo.scale = 0.15
povo.lifetime = 205



  }
  
}