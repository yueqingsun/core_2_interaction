function setup(){
    createCanvas(800,800);
}

function draw(){
    background(220,220,220,0);

    fill("#f4caa2");
    stroke("#f4caa2");
    strokeWeight(50);
    strokeJoin(ROUND);
    triangle(295,125,375,170,285,220);
    //左耳底色

    fill("#d78042");
    stroke("#d78042");
    strokeWeight(35);
    strokeJoin(ROUND);
    triangle(292,148,330,170,285,220);
    //左耳内

    fill("#f4caa2");
    stroke("#f4caa2");
    strokeWeight(50);
    strokeJoin(ROUND);
    triangle(505,125,425,170,515,220);
    //右耳底色

    fill("#d78042");
    stroke("#d78042");
    strokeWeight(35);
    strokeJoin(ROUND);
    triangle(508,148,470,170,515,220);
    //右耳内

    noStroke();
    fill("#f4caa2");
    ellipse(400,310,360,330);
    //上半张脸

    noStroke();
    fill("#f4caa2");
    ellipse(400,390,455,290);
    //下半张脸

    noStroke();
    fill("#623037");
    ellipse(400,400,58,60);
    //鼻子

    noStroke();
    fill("#623037");
    ellipse(330,375,40,63);
    //左眼

    noStroke();
    fill("#623037");
    ellipse(470,375,40,63);
    //右眼

    rectMode(CENTER);
    strokeJoin(ROUND);
    strokeWeight(10);
    stroke("#623037");
    fill(255);
    rect(400,460,35,20);
    //牙

    stroke("#623037");
    strokeWeight(10);
    line(373,450,427,450)
    //嘴

    noStroke();
    fill("#623037");
    ellipse(470,440,10,10);
    //痣

    noFill();
    strokeWeight(10);
    stroke("#d9a472");
    curve(480, 10, 340, 210, 400, 280, 500, 230);
    //刘海1

    noFill();
    strokeWeight(10);
    stroke("#d9a472");
    curve(450, 200, 390, 240, 400, 280, 530, 350);
    //刘海2

    noFill();
    strokeWeight(10);
    stroke("#d9a472");
    curve(440, 140, 390, 240, 470, 275, 530, 150);
    //刘海3

    noFill();
    strokeWeight(10);
    stroke("#d9a472");
    curve(500, 150, 450, 220, 470, 275, 580, 290);
    //刘海4   
}
