function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    gradientSquare(mouseX, mouseY, 30);
  }
}

function gradientSquare(x, y, size) {
  let colors = [color(random(255), random(255), random(255)),
                color(random(255), random(255), random(255))];
  
  for (let s = size; s > 0; s -= 2) {
    let inter = map(s, 0, size, 0, 1);
    let c = lerpColor(colors[0], colors[1], inter);
    stroke(c);
    strokeWeight(2);
    noFill();
    rectMode(CENTER);
    rect(x, y, s, s);
  }
}
