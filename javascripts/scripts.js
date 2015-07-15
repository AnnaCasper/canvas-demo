var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.addEventListener('click', function(){
  position(50);
});

var position = function(width){
  var x = event.x;
  var y = event.y;
  drawShape(x, y, width, width);
};

var drawShape = function(x, y, width, width){
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (x, y, width, width);
};
