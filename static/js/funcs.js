$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle = color;
    context.beginPath();
    context.strokeRect(x, y, sideLen, sideLen);
    context.closePath();
    context.stroke();
  };

  var drawCircle = function(x, y, radius, color) {
    context.strokeStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
  };

  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  //---------------------------------------------------------------------------
  $('#p5').click(function() {
    drawSquare(100, 100, 100, 'red');
    drawCircle(150, 150, 50, 'blue');
    drawCircle(100, 150, 50, 'green');
    drawCircle(200, 150, 50, 'green');
    drawCircle(150, 100, 50, 'green');
    drawCircle(150, 200, 50, 'green');
  });

});
