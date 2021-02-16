var canvas,surface1,surface2,surface3,surface4,Box,topEdge,leftEdge,rightEdge;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,530,180,30);
    surface1.shapeColor="blue"

    surface2 = createSprite(300,530,180,30);
    surface2.shapeColor="darkGreen"

    surface3 = createSprite(500,530,180,30);
    surface3.shapeColor="red"

    surface4 = createSprite(700,530,180,30);
    surface4.shapeColor="orange"

    rightEdge = createSprite(800,300,10,800)
    leftEdge = createSprite(1,300,10,800)
    topEdge = createSprite(400,1,800,5)

    //create box sprite and give velocity
    Box = createSprite(400,100,50,50)
    Box.shapeColor="magenta"


}

function draw() {
    background("grey");
    //create edgeSprite
    createEdgeSprites();

    if(keyDown("left")){
    Box.velocityX=-6;
    }
    if(keyDown("right")){
    Box.velocityX=6;
    }

    Box.velocityY=Box.velocityY+0.1

    //add condition to check if box touching surface and make it box
    //Box.velocityX=-8;

    Box.bounceOff(leftEdge);
    Box.bounceOff(rightEdge);
    Box.bounceOff(topEdge);

    if(surface1.isTouching(Box) && Box.bounceOff(surface1)){
    Box.shapeColor="blue"
    }
    if(surface2.isTouching(Box) && Box.bounceOff(surface2)){
    Box.shapeColor="darkGreen"
    }
    if(surface3.isTouching(Box)){
    Box.velocityX=0;
    Box.velocityY=0;
    Box.shapeColor="red";
    }
    if(surface4.isTouching(Box) && Box.bounceOff(surface4)){
    Box.shapeColor="orange"
    }
    
    Box.bounceOff(surface1)
    Box.bounceOff(surface2)
    Box.bounceOff(surface3)
    Box.bounceOff(surface4)

    drawSprites();
}
