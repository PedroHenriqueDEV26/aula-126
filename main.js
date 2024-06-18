var music1 = ""
var pulsoEsqX = 0;
var pulsoEsqY = 0;
var pulsoDirX = 0;
var pulsoDirY = 0;
var takePoint, removeDecimal, vol;
var takePointLeft, takePointL

function preload(){
    music1 = loadSound("musicID.mp3");
}

function setup(){
    canvas = createCanvas(450,320);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function modelLoaded(){
console.log("modelo carregado")
}

function draw(){
    image(video,0,0,450,320);
    fill("blue")
    circle(pulsoDirX,pulsoDirY, 30)
    
    if (takePointLeft < 0.2) {
        fill("red")
        circle(pulsoEsqX,pulsoEsqY,30)
        takePointL = Number(pulsoEsqY);
        removeDecimal = floor(takePointL);
        vol  = removeDecimal/500;
        document.getElementById("btnVol").innerHTML = "Volume ="+vol;
        music1.setVolume(vol)
    }
    
}

function playM(){
    music1.play();
    music1.setVolume(0.5)
    music1.rate(1)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)

        takePointLeft = results[0].pose.keypoints[9].score
        
        pulsoDirX = results[0].pose.rightWrist.x
        pulsoDirY = results[0].pose.rightWrist.y

        pulsoEsqX = results[0].pose.leftWrist.x
        pulsoEsqY = results[0].pose.leftWrist.y
    }
}

