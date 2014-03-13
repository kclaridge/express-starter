$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  $('#p1').click(function() {
  	context.strokeRect(10, 20, 50, 30);
});

  $('#p2').click(function() {
  	context.strokeRect(80, 60, 50, 50);
});
  //

$('#p3').click(function() {
	context.beginPath();
  	context.arc(100, 100, Math.PI, Math.PI);
  	contextclosePath();
  	context.stroke();
});

$('#p4').click(function() {
	context.beginPath();
  	context.arc(200, 200, 10, 0, 2*Math.PI);
  	contextclosePath();
  	context.stroke();
});

$('#p5').click(function() {
	contextbeginPath();
  	context.moveTo(10, 10);
  	context.lineTo(1000, 1000);
  	contextclosePath();
  	context.stroke();
});

$('#p6').click(function() {
	context.strokeStyle = 'green';
  	context.strokeRect(150, 150, 50, 30);
});

$('#p7').click(function() {
	context.fillStyle = 'red';
  	context.fillarc(300, 300, Math.PI, Math.PI);
});

$('#p8').click(function() {
	context.fillStyle = 'yellow';
	context.strokeStyle = 'blue';
  	context.fillRect(300, 300, Math.PI, Math.PI);
  	context.stroke();
});

$('#p9').click(function() {
	var rectangle = function(x,y,w,h,){
		context.beginPath();
	for (var row = function(num) {
        for (var i = 0; i < num; i++) {
        	rectangle(i * 5, 0, 5);
        }
});

$('#p10').click(function() {
	for (var row = function(num) {
        for (var i = 0; i < num; i++) {
        	square(i * 100, 100, 100);
        }
});