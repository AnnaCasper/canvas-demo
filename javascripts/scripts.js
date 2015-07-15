var canvas = document.getElementById('canvas');
var change_color = document.getElementById('change_color');
var erase = document.getElementById('erase');
var random = document.getElementById('random');
var randomChange = document.getElementById('random_change');
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

Shape.prototype.reColor = function(color){
  this.color = color;
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

function Square(x, y, width, color){
  Shape.call(this, x, y, width, color, 'Square');
};

Square.prototype = new Shape();
Square.prototype.constructor = Square;

Square.prototype.draw = function(x, y, width, width, color){
  ctx.fillStyle = color;
  ctx.fillRect (x, y, width, width);
};

function Circle(x, y, width, color){
  Shape.call(this, x, y, width, color, 'Circle');
};

Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function(x, y, width, color){
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
    square.draw(x, y, width, width, color);
  } else if(shape === 'Circle'){
    var circle = new Circle(x, y, width, color);
    shapesArray.push(circle);
    circle.draw(x, y, width, color);
  }
};

change_color.addEventListener('click', function(){
  for (var i = 0; i < shapesArray.length; i++) {
    var shapes = shapesArray[i];
    shapes.reColor.call(shapesArray[i], document.getElementById('color').value);
  }
});

erase.addEventListener('click', function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  shapesArray = [];
});

var randomColor = function(){
  return "#"+((1<<24)*Math.random()|0).toString(16)
};

randomChange.addEventListener('click', function(){
  for (var i = 0; i < shapesArray.length; i++) {
    var shapes = shapesArray[i];
    shapes.reColor.call(shapesArray[i], randomColor());
  }
})

random.addEventListener('click', function(){
  for (var i = 0; i < 100; i++) {
    var type = Math.floor(Math.random() * 2);
    var x = Math.floor(Math.random() * canvas.width);
    var y = Math.floor(Math.random() * canvas.height);
    var width = Math.floor(Math.random() * 300);
    var color = randomColor();
    if (type === 0) {
      var shape = new Square(x, y, width, color);
    } else if (type === 1) {
      var shape = new Circle(x, y, width, color);
    }
    shape.draw(x, y, width, width, color);
  }
});
