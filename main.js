function preload(){}
function setup(){
    canvas=createCanvas(800,600);
    canvas.position(390,300);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,200,150,400,300);

    fill(0, 255, 85);
    stroke(0, 255, 85);
    circle(100,75,150);

    fill(0, 255, 85);
    stroke(0, 255, 85);
    circle(700,75,150);

    fill(0, 255, 85);
    stroke(0, 255, 85);
    circle(100,525,150);

    fill(0, 255, 85);
    stroke(0, 255, 85);
    circle(700,525,150);

    fill(255, 179, 0);
    stroke(255, 179, 0);
    rect(75,75,50,450,10);

    fill(255, 179, 0);
    stroke(255, 179, 0);
    rect(675,75,50,450,10);

    fill(255, 179, 0);
    stroke(255, 179, 0);
    rect(75,50,650,50,10);

    fill(255, 179, 0);
    stroke(255, 179, 0);
    rect(75,500,650,50,10);
}
function take_snapshot(){
    save('picture.png');
}