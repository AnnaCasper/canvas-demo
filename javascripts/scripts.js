var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.addEventListener('click', function(){
  var shape = document.getElementById('shape').value
  var color = document.getElementById('color').value
  var width = document.getElementById('width').value
  position(width, color, shape);
});

var position = function(width, color, shape){
  var x = event.x;
  var y = event.y;
  if(shape === 'Square'){
    console.log('hello');
    drawSquare(x, y, width, width, color);
  } else if(shape === 'Circle'){
    drawCircle(x, y, width, color);
  }
};

var drawSquare = function(x, y, width, width, color){
  ctx.fillStyle = color;
  ctx.fillRect (x, y, width, width);
};

var drawCircle = function(x, y, width, color){
  ctx.beginPath();
  ctx.arc(x,y,width/2,0,2*Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
