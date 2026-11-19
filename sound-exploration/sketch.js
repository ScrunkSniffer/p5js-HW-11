let robotSpeak;

async function setup() {
  describe("a sketch that loads and plays a sound file");
  robotSpeak = await loadSound('./assets/robotSpeak.mp3');
  cnv = createCanvas(300, 500);
  
  background(220);
  text('tap here to play', 10, 20);
  robotSpeak.loop(true)

}

function draw() {
 background(0);
 if (!robotSpeak.playing) {
   text("click to play the sound and it will loop", 0, 20, width);
 }
 else {
   text("click to stop the looping", 0, 20, width);
 }

  if (mouseIsPressed) {
    robotSpeak.amp(1)
    for (let x = 0; x <= 8; x++) {
      for (let y = 0; y <= 15; y++) {
        let rectX = 15 + (x * 30);
        let rectY = 15 + (y * 30);
        fill(0, 200, random(255));
        rect(rectX, rectY, 20, 20);
      }

      for (let i = 1; i <= 50; i++) {
        let circleX = random(width);
        let circleY = random(height);
        let size = random(5, 35);
        fill(0, random(350), random(350));
        circle(circleX, circleY, size);
      }
    }
  } else{
    robotSpeak.amp(0)
  }
}

function mousePressed() {
 if (!robotSpeak.playing) {
   robotSpeak.start();
 }
}

function stopSound() {
 //stop the sound when the loop ends
 robotSpeak.stop();
}