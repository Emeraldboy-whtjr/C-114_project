var noseX; 
var noseY; 
var mous;



function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);




}


function modelLoaded() {
    console.log("model loaded");

}

function gotposes(results) {

    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("nose X is = " + noseX);
        console.log("nose Y is = " + noseY);



    }
}



function preload(){
    mous = loadImage("moustache-removebg-preview.png");

}


function draw(){
    image(video, 0, 0, 300, 300);
    image(mous,noseX-50,noseY-10,100,100);


    
}

function takepicture(){
    
    save("download.png");



}