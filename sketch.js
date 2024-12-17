var hrAngle;
var mnAngle;
var scAngle;
function setup() {
  canvas = createCanvas(displayWidth - 100, displayHeight-150);
  }

function draw() {
  background(0);  
  drawSprites();
  angleMode(DEGREES);
  translate(width/2,250);
  rotate(0);
  push();
  scAngle=map(second(),0,60,0,360);
  rotate(scAngle-90);
  stroke(255,0,0);
  strokeWeight(7);
 // line(0,0,180,0);
  pop();
  push();
  mnAngle=map(minute(),0,60,0,360);
  rotate(mnAngle-90);
  stroke(0,255,0);
  strokeWeight(7);
//  line(0,0,150,0);
  pop();
  push();
  hrAngle=map(hour(),0,12,0,360);
  rotate(hrAngle-90);
  stroke(0,0,255);
  strokeWeight(7);
//  line(0,0,100,0);
  pop();
  stroke(0);
  strokeWeight(7);
//  line(0,0,0,0);
  noFill();
  stroke(255,0,0)
  rotate(0);
  arc(0,0,400,400,-90,scAngle-90,OPEN);
  stroke(0,255,0)
  rotate(0);
  arc(0,0,420,420,-90,mnAngle-90,OPEN);
  stroke(0,0,255)
  rotate(0);
  arc(0,0,440,440,-90,hrAngle-90,OPEN);
if(hour() > 12){
  textSize(20);
  stroke("white");
  fill("white")
  strokeWeight(1);
  text("PM",-20,250)
}else{
  textSize(20);
  stroke("white");
  fill("white")
  strokeWeight(1);
  text("PM",-20,250)
}
}
