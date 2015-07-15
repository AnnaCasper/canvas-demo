var canvas = document.getElementById('canvas');
var change_color = document.getElementById('change_color')
var ctx = canvas.getContext('2d');
var shapesArray = [];

canvas.addEventListener('click', function(){
  var shape = document.getElementById('shape').value
  var color = document.getElementById('color').value
  var width = document.getElementById('width').value
  position(width, color, shape);
});

change_color.addEventListener('click', function(){
  shapesArray.reColor
});

function Shape(width, color, shape){
  this.width = width,
  this.color = color,
  this.shape = shape
};

Shape.prototype.reColor = function(){
  this.color = document.getElementById('color');
};

function Square(width, color){
  Shape.call(this, width, color, 'Square');
};

Square.prototype = new Shape();
Square.prototype.constructor = Square;

Square.prototype.drawSquare = function(x, y, width, width, color){
  ctx.fillStyle = color;
  ctx.fillRect (x, y, width, width);
};

function Circle(width, color){
  Shape.call(this, width, color, 'Circle');
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
    var square = new Square(width, color);
    shapesArray.push(square);
    square.drawSquare(x, y, width, width, color);
  } else if(shape === 'Circle'){
    var circle = new Circle(width, color);
    shapesArray.push(circle);
    console.log(shapesArray);
    circle.drawCircle(x, y, width, color);
  }
};
