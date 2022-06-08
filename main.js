x = 0;
y = 0;
screenw=0;
screenh=0;
appol="";
to_no=0;
function preload() {
  appol=loadImage("apple.png");
}
function setup() {
  console.log("chekcing")
  screenw=window.innerWidth;
  console.log(screenw)
  screenh=window.innerHeight;
  console.log(screenw+"h"+ screenh)
  canvas=createCanvas(screenw, screenh-150);
  
}

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
console.log("chekinggg")
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
     to_no=Number(content);
     if (Number.isInteger(to_no)) {
       draw_apple="set";
     }
}



function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_no + " Apples drawn";
    draw_apple = "";

    for (let i = 1; i <=to_no; i++){
      x= Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
    image(appol, x,y,50,50)
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
