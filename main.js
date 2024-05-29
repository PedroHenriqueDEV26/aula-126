var music1 = ""


function preload(){
    music1 = loadSound("musicID.mp3");
}

function setup(){
    canvas = createCanvas(450,320);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,450,320);
    
}

function playM(){
    music1.play();
}