let BotonActivar;
let Botonapagar;
let EstadoFondo = false;

var client = mqtt.connect('wss:JavierRecinos:1AECA1234basagei@broker.shiftr.io'; {
  clientId:'ControladorWeb'
})

function draw (){
  if (EstadoFondo) {
    background(0);
  }
  else{
    background (255);
  }
}

function setup (){
  createCanvas (200,200);
  createP();
  BotonActivar = createButton ("ActivarLed");
  BotonApagar = createButton ("ApagarLed");
  BottonActivar.mousePressed (ActivarLed);
  BottonApagar.mousePressed (ApagarLed);

}
function ApagarLed (){
  console.log ("Apagar Led");
  client.publish ('/JavierRecinos/Led', '1');

}

function ActivarLed (){
  console.log ("Encender Led");
  client.publish ('/JavierRecinos/Led','1');
}

client.on ('connect', function (){
  console.log('MQTT conectado');
  client.suscribe ('/JavierRecinos/Boton');
}
);
