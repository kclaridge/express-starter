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

  var drawTriplet = function(x, y, color) {
    drawCircle(x, y, 10, color);
    drawCircle(x - 10, y - 10, 10, color);
    drawCircle(x - 20, y, 10, color);
  };

  var drawTriangle = function(x, y, sideLen, color) {
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x,y)
    context.lineTo(x + Math.sqrt(3)/2, y + Math.sqrt(3)/2);
    context.closePath();
    context.stroke();
  };

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

  $('#p6').click(function(){
    drawTriplet(100, 100, 'green');
  });
  
  $('#p7').click(function(){
    drawTriplet(400, 400, 'blue');
  });

    $('#p8').click(function(){
    drawTriplet(100, 100, 'red');
    drawTriplet(200, 200, 'orange');
    drawTriplet(300, 300, 'pink');
    drawTriplet(400, 400, 'purple');
  });
});
