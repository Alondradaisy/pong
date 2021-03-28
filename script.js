//Game frame
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;


let positionX = 100;
let positionY = 100;
let velocityX = 1; // controls direction
let velocityY = 4; // pos/neg opposite directions

// get the ball DOM element
const ball = document.querySelector('.ball');

function update() {
    positionX += velocityX; // to increment
    positionY += velocityY;

    if(positionY >= GAME_AREA_HEIGHT - BALL_SIZE) { // bottom ball bounce
        velocityY = -velocityY;
    }

    if(positionY <= 0) {
        velocityY = -velocityY; //top ball bounce
    }

    ball.style.top = `${positionY}px`;
    ball.style.left = `${positionX}px`; // remember this is template string syntax
}

function loop() {
update();
window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);





// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;