let time = 0;
let rndAmt = 0;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  cnv.position(0, 0);
  cnv.style('display', 'block');
  cnv.style('z-index', '-1');
}

function draw() {
  background(255, 255, 255, 50);
  textSize(28);
  translate(height/3, 0);
  shearX(PI / -6);
  fill('black');
  text('jesse andriesse',width-mouseX,height-mouseY);

  time++;
  
  translate(width/2, height/2);

  for (let i = 1; i < 12; i++) {
    fill('yellow');

    rndAmt = random(8);

    text('★', cos( (mouseX/1000 + mouseY/1000) * i) * height/2, sin( (mouseX/1000 + mouseY/1000) * i) * height/2);
    // text('★', (width/5), (height/2));
    // text('★', (width/5) * 1.75, (height/4) * 1.25);
    // text('★', (width/5) * 4, (height/2));
    // text('★', (width/5) * 3.25, (height/4) * 1.25);
    // text('★', (width/2), (height/5));
    // text('★', (width/5) * 1.75, (height/4) * 2.75);
    // text('★', (width/2), (height/5) * 4);
    // text('★', (width/5) * 3.25, (height/4) * 2.75);
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}