let clock = ["&#128347;","&#128336;","&#128337;","&#128338;","&#128339;","&#128340;","&#128341;","&#128342;","&#128343;","&#128344;","&#128345;","&#128346;"];

let counter = 0;
setInterval( function(){
  
document.getElementById("clock").innerHTML = clock[counter%clock.length];  
  counter++;
}, 100);