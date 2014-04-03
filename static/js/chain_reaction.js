$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

var drawCircle = function(x, y, radius, color) {
    context.fillStyle=color;
    context.beginPath();
    context.arc(x,y,radius,Math.PI/2,5*(Math.PI/2));
    context.closePath();
    context.fill();
};


var balls = [];
var numBalls = 5;
  for (var i = 0; i < numBalls; i++) {
    var b = {
    x: canvas.width * Math.random(),
    y: canvas.height * Math.random(0, canvas.height),
    vx: 5 * Math.random(),
    vy: 5 * Math.random(),
    radius: 10
  }
    balls.push(b);
}

  // Run an interation of the game
  var updateGame = function() {
    for (var i = 0; i < balls.length; i++) {
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
    if ((balls[i].x >= canvas.width-balls[i].radius) || (balls[i].x <= balls[i].radius)) {
      balls[i].vx = -balls[i].vx;
    } 
    if ((balls[i].y >= canvas.height-balls[i].radius || (balls[i].y <= balls[i].radius))) {
      balls[i].vy = - balls[i].vy;} 
    };
    // PUT STUFF HERE
    context.clearRect(0,0, canvas.width, canvas.height);
    for (var i = 0; i < balls.length; i++) {
        drawCircle(balls[i].x,balls[i].y,balls[i].radius, 'purple');
}
    requestAnimationFrame(updateGame);
};

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
      for (var i = 0; i < numBalls; i++) {
    var B = {
    x: x,
    y: y,
    vx: 5 * Math.random(),
    vy: 5 * Math.random(),
    radius: 10
  }
    balls.push(B);
}
  });

  updateGame();
});
