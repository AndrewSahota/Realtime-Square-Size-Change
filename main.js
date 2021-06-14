function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    document.getElementById("square_side").innerHTML="Width and Height of the square will be= "+difference+"px";
    background('#969A97');
    fill('#F900F3');
    stroke('#F900F3');
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log('PoseNet is initialised!')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("NoseX= "+ noseX+"noseY= "+ noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.y;
        difference=floor(leftWristX-rightWristX);
    }
}

noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristY=0;
