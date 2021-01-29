console.log("Brick Breaker");
let paddle;
var bricks = [];
var bricks2 = [];
var bricks3 = [];
var bricks4 = [];
var bricks5 = [];
let lives = 3;
let flag = 'start';
let v = 1;
var score = 0;
let pattern = prompt("Please tell the pattern you want","Pattern1,Pattern2,Pattern3");
var ds = 0;
function preload(){
tnt = loadImage('tnt.jpg')
heart = loadImage('heart.png');
boat = loadImage('boat.png');
sea = loadImage('sea.jpg');
// anchor = loadImage('anchor.png');
fish1 = loadImage("fish2.png")
}
function setup() {

    createCanvas(400, 400);
    
    paddle = createSprite(200, 60, 100, 10);
    paddle.addImage(boat)
    paddle.scale = 0.08;
    ball = createSprite(200, 200, 5, 5);
   
    reset = createSprite(200, 200, 10, 10);
    reset.visible = 0;
    if (pattern.toLowerCase() ===  "pattern1"){
        brick4 = createSprite(200,300,20,10);
        brick4.addImage(tnt)
        brick4.scale =0.06;
        brick5 = createSprite(200,250,20,10);
        brick5.addImage(tnt)
        brick5.scale =0.06;
        brick6 = createSprite(100,300,20,10);
        brick6.addImage(tnt)
        brick6.scale =0.06;
       

    for (i = 0; i < 400; i = i + 50) {

        brick = createSprite(i + 70, 360, 20, 10);
        brick.addImage(fish1)
        brick.scale = 0.5;

brick1 = createSprite(i + 70, 280, 20, 10);

        brick2 = createSprite(i + 70, 340, 20, 10);
        brick3 = createSprite(i + 70, 310, 20, 10);
       
        

        brick.shapeColor = "yellow"
        bricks.push(brick);
        
        bricks2.push(brick1);
        bricks3.push(brick2);
        bricks4.push(brick3);
        bricks5.push(brick4);
    }
}
if (pattern.toLowerCase() ===  "pattern2"){
    brick4 = createSprite(100,250,20,10);
    brick4.addImage(tnt)
    brick4.scale =0.06;
    brick5 = createSprite(230,290,20,10);
    brick5.addImage(tnt)
    brick5.scale =0.06;
    brick6 = createSprite(220,210,20,10);
    brick6.addImage(tnt)
    brick6.scale =0.06;
   
    for (i = 0; i < 400; i = i + 50) {

        brick = createSprite(i + 130, 300, 20, 10);
brick1 = createSprite(i + 20, 330, 20, 10);
        brick2 = createSprite(i + 80, 340, 20, 10);
        brick3 = createSprite(i + 120, 350, 20, 10);
        

        brick.shapeColor = "yellow"
        bricks.push(brick);

        bricks2.push(brick1);
        bricks3.push(brick2);
        bricks4.push(brick3);
        ds = ds + 1;
    }
}
if (pattern.toLowerCase() ===  "pattern3"){
    brick4 = createSprite(150,210,20,10);
    brick4.addImage(tnt)
    brick4.scale =0.06;
    brick5 = createSprite(210,330,20,10);
    brick5.addImage(tnt)
    brick5.scale =0.06;
    brick6 = createSprite(20,340,20,10);
    brick6.addImage(tnt)
    brick6.scale =0.06;
   
    for (i = 0; i < 400; i = i + 50) {

        brick = createSprite(i - 30, 300, 20, 10);
brick1 = createSprite(i + 100, 390, 20, 10);
        brick2 = createSprite(i + 90,210, 20, 10);
        brick3 = createSprite(i + 50, 280, 20, 10);
        

        brick.shapeColor = "yellow"
        bricks.push(brick);

        bricks2.push(brick1);
        bricks3.push(brick2);
        bricks4.push(brick3);
    }
}



}
function draw() {
    background(0);
    if (flag === 'menu'){


        
    }
    if (flag === 'start') {
        
        image(sea,0,0,400,400)
        edges = createEdgeSprites();

        ball.bounceOff(paddle)
        ball.bounceOff(edges[0])
         ball.bounceOff(edges[1])
        ball.bounceOff(edges[3])
        paddle.x = mouseX;

        if (keyDown("space")) {

            ball.setVelocity(2, -4)
        }
        if (paddle.x > 400) {

            paddle.x = 400
        }
        if (paddle.x < 0) {
            paddle.x = 0;
        }
        bricks.forEach((element) => {
            if (abs(element.x - ball.x) <= (0.50 * (element.width + ball.width)) && abs(element.y - ball.y) <= (0.50 * (element.height + ball.height))) {
                ball.bounceOff(element);
                element.destroy();
                score = score + 10;
            }
        })
        if (ball.isTouching(brick4)){
            lives = lives - 1;
            ball.x = 200;
            ball.y = 200;
                brick4.destroy();
                if (lives === 0) {
                    flag = "over";
                    paddle.visible = 0;
                    reset.visible = 1;
                    ball.setVelocity(0,0)
                    score = 0;
                }    

        } 
        if (ball.isTouching(brick5)){
            lives = lives - 1;
            ball.x = 200;
            ball.y = 200;
            brick5.destroy();
            if (lives === 0) {
                flag = "over";
                paddle.visible = 0;
                reset.visible = 1;
                ball.setVelocity(0,0)
                score = 0;
            } 
    } 
    if (ball.isTouching(brick6)){
        lives = lives - 1;
        ball.x = 200;
        ball.y = 200;    
        brick6.destroy();
        if (lives === 0) {
            flag = "over";
            paddle.visible = 0;
            reset.visible = 1;
            ball.setVelocity(0,0)
            score = 0;
        }
} 

if (ball.isTouching(brick6)){
    lives = lives + 1;
    brick9.destroy();
} 
        bricks2.forEach((element) => {
            if (abs(element.x - ball.x) <= (0.50 * (element.width + ball.width)) && abs(element.y - ball.y) <= (0.50 * (element.height + ball.height))) {
                ball.bounceOff(element);
                element.destroy();
                score = score + 10;
            }
        });
        
        bricks3.forEach((element) => {
            if (abs(element.x - ball.x) <= (0.50 * (element.width + ball.width)) && abs(element.y - ball.y) <= (0.50 * (element.height + ball.height))) {
                ball.bounceOff(element);
                element.destroy();
                score = score + 10;
            }
        })
        bricks4.forEach((element) => {
            if (abs(element.x - ball.x) <= (0.50 * (element.width + ball.width)) && abs(element.y - ball.y) <= (0.50 * (element.height + ball.height))) {
                ball.bounceOff(element);
                element.destroy();
                score = score + 10;
            }
        })
       
        if (ball.isTouching(edges[2])) {
            lives = lives - 1;
            ball.x = 200;
            ball.y = 200;
            if (lives === 0) {
                flag = "over";
                paddle.visible = 0;
                reset.visible = 1;
                ball.setVelocity(0,0)
                score = 0;
            }
        }
        if (ds === (bricks.length + bricks2.length+bricks3.length+bricks4.length)){
            flag = "win";

        }
    }
    if (flag === 'over') {

        if (keyDown("y")) {
            console.log("tarted");
            flag = "start";
            paddle.visible = 1;
            reset.visible = 0;
            ball.x = 200;
            ball.y = 200;
            lives = 3;

        }
    }
    drawSprites();

}

