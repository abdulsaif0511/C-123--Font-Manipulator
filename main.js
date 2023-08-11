function setup(){
    video = createCapture(VIDEO);
    video.size (500,500);

    canvas = createCanvas(500,500);
    canvas.position(560,150);

    poseNet = mle.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(){
    if(results.length>0){
        console.log(results);
    }
}

function modeloaded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    background('#969A97');
}
