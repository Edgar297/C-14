var ball = {
 x : 20,
 y : 45,
 r : 20,
 xspeed : 0,
 yspeed : 0,
 color : ["blue","black", "green","red"]
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.color[2])
  ball.xspeed = 1
  ball.x = ball.x + ball.xspeed
}