var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.arc(256, 128, 128, Math.PI, 0, false);
context.lineTo(128, 128)
context.fill()
context.stroke();