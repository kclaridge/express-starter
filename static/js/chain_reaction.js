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
  var b0 = {
    x: 100,
    y: 100,
    radius: 10
  };

    var b1 = {
    x: 300,
    y: 100,
    radius: 20
  };

    var b2 = {
    x: 500,
    y: 300,
    radius: 30
  };

  balls.push(b0);
  balls.push(b1);
  balls.push(b2);


  // Run an interation of the game
  var updateGame = function() {
    // PUT STUFF HERE
    for (var i = 0; i < balls.length; i++) {
        drawCircle(balls[i].x,balls[i].y,balls[i].radius, 'purple');
};
};

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});
