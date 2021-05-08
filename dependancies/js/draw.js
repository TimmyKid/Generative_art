// lets create art
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var size = 300;
var step = 20;
var dpr = window.devicePixelRatio;

canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = "square";
context.lineWidth = 1.1;

function draw(x, y, width, height) {
  var leftToRight = Math.random() >= 0.5;

  if(leftToRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height)
  }

}
draw( 0, 0, size, size);

context.stroke();
