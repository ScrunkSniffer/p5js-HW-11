let beat;
let isLooping = false;

function setup() {
  background(0);
  let cnv = createCanvas(400, 400);
  cnv.center();

  beat = createAudio('/assets/robotSpeak.wav');
}

function draw() {
  if (mouseIsPressed) {
    for (let i = 0; i < 50; i++) {
      let x = random(width);
      let y = random(height);
      let size = random(5, 35);

      fill(0, random(350), random(350));
      circle(x, y, size);
    }
  }

  if (isLooping) {
    fill(255);
    text('Click to stop', 50, 50);
  } else {
    fill(255);
    text('Click to loop', 50, 50);
  }
}

function mousePressed() {
  if (isLooping) {
    beat.stop();
    isLooping = false;
  } else {
    beat.loop();
    isLooping = true;
  }
}
