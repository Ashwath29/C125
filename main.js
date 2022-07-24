noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background("#969A97");
    fill("#F90093");
    stroke("#F90093");
    text("Peter", 100, 300);
    textSize(difference);
}