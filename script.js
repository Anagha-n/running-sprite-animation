var canvasWidth = 650 
var canvasHeight = 350 

var spriteHeight = 280
var spriteWidth = 864

var row = 2
var columns = 8

var width = spriteWidth/columns 
// 108, 864/8
var height = spriteHeight/row 
// 140, 280/2

var curFrame = 0
var frameCount = 8

var x = 0 ,y = 0 
// render entire sprite

var srcX = 0,srcY = 0
// only single sprite render

var left = false, right = true

var trackLeft = 1, trackRight = 0

var speed = 12

var canvas = document.getElementById("canvas");
canvas.width = canvasWidth
canvas.height = canvasHeight

var context = canvas.getContext("2d");

var character = new Image()
character.src = "character.png"
// getting the character

setInterval(draw,100)

function draw(){
    updateFrame()
    context.drawImage(character,srcX,srcY,width,height,x,y,width,height)
}

function updateFrame(){
    curFrame = ++curFrame % frameCount
    // 1%8 = 8 8%8 = 0
    srcX = curFrame * width
    context.clearRect(x,y,width,height)
    // clears previous image
    if (left&& x>0){
        srcY = trackLeft * height
        x -=speed
    }
    if(right && x<(canvasWidth-width)){
        srcY = trackRight * height
        x +=speed
        //x= x+speed
    }
}

function moveLeft(){
    left = true
    right = false
}
function moveRight(){
    left = false
    right = true
}