function setup() {
  createCanvas(380, 240);
}

function draw() {
if (mouseIsPressed) {
    fill(255,0,255);
  } else {
    fill(255,0,0);
  }
  ellipse(mouseX, mouseY, 80, 80);  
}
