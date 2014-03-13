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
  	context.arc(100, 100, 50, 0, Math.PI);
  	context.closePath();
  	context.stroke();
});

$('#p4').click(function() {
	context.beginPath();
  	context.arc(200, 200, 50, 0, 2*Math.PI);
  	context.closePath();
  	context.stroke();
});

$('#p5').click(function() {
	context.beginPath();
  	context.moveTo(10, 10);
  	context.lineTo(1000, 1000);
  	context.closePath();
  	context.stroke();
});

$('#p6').click(function() {
	context.strokeStyle = 'green';
  	context.strokeRect(150, 150, 50, 30);
});

$('#p7').click(function() {
	context.fillStyle = 'red';
	context.beginPath();
  	context.arc(300, 300, 50, 0, 2*Math.PI);
  	context.closePath();
  	context.fill();
});

$('#p8').click(function() {
	context.fillStyle = 'yellow';
	context.strokeStyle = 'blue';
  	context.fillRect(250, 250, 80, 50);
  	context.strokeRect(250, 250, 80, 50);
});

$('#p9').click(function() {
	var row = function(num) {
		for (var i = 0; i < num; i++) {
			context.strokeRect(i * 50, 0, 50, 50);
		}
	}
	row(5);
});

$('#p10').click(function() {
	var row = function(num) {
		for (var i = 0; i < num; i++) {
			context.strokeRect(i * 50, 0, 5, 5);
		}
	}
	row(100);
});

});