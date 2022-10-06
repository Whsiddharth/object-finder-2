input="";
status="";
function setup(){
    canvas=createCanvas(500,300);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects..";
    input=document.getElementById("input_text").value;
    console.log(input);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
}
function draw(){
    image(video,0,0,500,300);
}