var dropy = 130;
var dropx = 300;
var dropy2 = 190;
var dropx2;
//var dropg = random(130,300);
//var droph = random(100,400);
var r =255;
var g = 255;
var b = 255;
var down = 0;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background('#697CAD');

   /* fill(255);
    ellipse (droph,dropg, 10, 15);
    droph = droph+2;*/
    
    //blue rain drop
    fill('#A3D9FF');
    ellipse (dropx, dropy, 10, 15);
    dropy = dropy+down;
    //white rain drop
    fill(255);
    ellipse (100, dropy2, 10, 15);
    dropy = dropy+down;
    dropy2 = dropy2 + 5;
    if (dropy2>600){
       dropy2 = 190; 
    }
    //white rain drop
    fill(255);
    ellipse (300, dropy2-10, 10, 15);
    ellipse (400, dropy2-20, 10, 15);
    ellipse (200, dropy2, 10, 15);
    ellipse (150, dropy2-30, 10, 15);
    ellipse (280, dropy2+220, 10, 15);
    ellipse (450, dropy2+150, 10, 15);
    ellipse (343, dropy2+340, 10, 15);
    ellipse (173, dropy2+195, 10, 15);
    ellipse (403, dropy2-200, 10, 15);
    ellipse (143, dropy2-170, 10, 15);
    ellipse (383, dropy2+40, 10, 15);
    ellipse (267, dropy2+90, 10, 15);
    ellipse (373, dropy2+15, 10, 15);
    ellipse (153, dropy2+380, 10, 15);
    dropy = dropy+down;
    dropy2 = dropy2 + 2;
    if (dropy2>650){
       dropy2 = 190; 
    }

    //This series of ellipse is the rain cloud
    fill(r,g,b);
    noStroke();
    ellipse(100, 100, 120, 100);
    ellipse(160, 70, 120, 100);
    ellipse(180, 120, 120, 100);
    ellipse(260, 125, 120, 100);
    ellipse(230, 60, 130, 100);
    ellipse(320, 60, 120, 100);
    ellipse(350, 130, 120, 100);
    ellipse(430, 125, 120, 100);
    ellipse(400, 70, 120, 100);
    ellipse(480, 100, 120, 100);
}
function mousePressed() {
    down = 2;
    if (dropy>height) {
        dropy = 190;
        dropx = random(100,400);
    }
    r = 126;
    g = 107;
    b = 143;
}

//#697CAD is gray blue #7E6B8F is purple for cloud? #A3D9FF is lightblue
//126 107 143