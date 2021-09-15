leftEyeX = 0;
leftEyeY = 0;
leftEye = "";
function preload() {
  leftEye = loadImage("hat.png");
}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(450, 200);
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("poseNet is Intialized");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    leftEyeX = results[0].pose.leftEye.x - 25;
    leftEyeY = results[0].pose.leftEye.y - 140;
  }
}

function draw() {
  image(video, 0, 0, 400, 400);
  image(leftEye, leftEyeX, leftEyeY, 140, 140);
}

function takeSnapshot() {
  save("myFilterImage.png");
}
