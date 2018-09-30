var x; //increment variable for width for bottom curves
var y; //increment variable for height for bottom curves
var a; //increment variable for width for top curves
var b; //increment variable for height for top curves
var angleIncrement; //location for where to draw line in circle
var r; //radius of the center strings forming circle

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    //background(0);
    x = width / mouseX * 5;
    y = height / mouseY * 5;
    a = width / mouseY * 10;
    b = height / mouseX * 10;
    angleIncrement = mouseX / 100;
    r = width;

    //center circle
    if (mouseIsPressed) {
        for(var angle = 0; angle < 360; angle += mouseX / 100) {
            stroke(0, 0, 255);
            push();
            translate(width / 2, height / 2);
            line((r * sin(angle)) / tan(angle),
                  r * sin(angle),
                  r * sin(angle + angleIncrement) / tan(angle + angleIncrement),
                  r * sin(angle + angleIncrement));
            pop();
        }
    }

    //drawing the four curves on each corner of the canvas
    for(var i = 0; i < 50; i ++) {
        strokeWeight(1);

        //draws the first 20 red lines on the bottom left corner
        //draws green lines for the rest
        if (i >= 30) {
            stroke(0, 255, 0);
            line(0, y * i, x * i, height);
        }else {
            strokeWeight(1);
            stroke(i * 30, 0, 0);
            line(0, y * i,  (x * i), height);
        }

        //red on bottom right hand side 
        //stroke(255,0,0);
        stroke(i * 15, 0, 0);
        line(width, y * i, width - (x * i), height);

        //color changing curves on top 
        stroke(mouseX, 0, 255);
        line(0, height - (a * i), b * i, 0);
        line(width - (b * i), 0, width, height - (a * i));     
    }
}
