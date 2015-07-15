var canvas = document.getElementById('canvas');
var change_color = document.getElementById('change_color');
var erase = document.getElementById('erase');
var ctx = canvas.getContext('2d');
var shapesArray = [];

canvas.addEventListener('click', function(){
  var shape = document.getElementById('shape').value
  var color = document.getElementById('color').value
  var width = document.getElementById('width').value
  position(width, color, shape);
});

function Shape(x, y, width, color, shape){
  this.width = width,
  this.color = color,
  this.shape = shape,
  this.x = x,
  this.y = y
};

Shape.prototype.reColor = function(){
  this.color = document.getElementById('color').value;
  if(this.shape === 'Square'){
    ctx.fillStyle = this.color;
    ctx.fillRect (this.x, this.y, this.width, this.width);
  } else if(this.shape === 'Circle'){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width/2,0,2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

Shape.prototype.erase = function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
};

function Square(x, y, width, color){
  Shape.call(this, x, y, width, color, 'Square');
};

Square.prototype = new Shape();
Square.prototype.constructor = Square;

Square.prototype.drawSquare = function(x, y, width, width, color){
  ctx.fillStyle = color;
  ctx.fillRect (x, y, width, width);
};

function Circle(x, y, width, color){
  Shape.call(this, x, y, width, color, 'Circle');
};

Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

Circle.prototype.drawCircle = function(x, y, width, color){
  ctx.beginPath();
  ctx.arc(x,y,width/2,0,2*Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};

var position = function(width, color, shape){
  var x = event.x;
  var y = event.y;
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  if(shape === 'Square'){
    var square = new Square(x, y, width, color);
    shapesArray.push(square);
    square.drawSquare(x, y, width, width, color);
  } else if(shape === 'Circle'){
    var circle = new Circle(x, y, width, color);
    shapesArray.push(circle);
    circle.drawCircle(x, y, width, color);
  }
};

change_color.addEventListener('click', function(){
  for (var i = 0; i < shapesArray.length; i++) {
    var shapes = shapesArray[i];
    shapes.reColor.call(shapesArray[i]);
  }
});

erase.addEventListener('click', function(){
  for (var i = 0; i < shapesArray.length; i++) {
    var shapes = shapesArray[i];
    shapes.erase.call(shapesArray[i]);
  }
})
