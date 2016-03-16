var c = document.getElementById("canvas");
var start = document.getElementById("button");
var stop = document.getElementById("button1");
var ctx = c.getContext("2d");
var xd = 5;
var yd = 5;
var x = Math.floor(Math.random() * 600);
var y = Math.floor(Math.random() * 600);
var image = new Image();
image.src = "cookie.jpg";
var frame;

var bounce = function bounce(){
    ctx.clearRect(0, 0, 600, 600);
    ctx.beginPath();
    ctx.drawImage(image, x, y, 50, 50);
    x = x + xd;
    y = y + yd;

    if (x <= 0 || x >= 600){
	console.log("trigger x");
	xd = xd * -1;
    }
    if (y <= 0 || y >= 600){
	console.log("trigger y");
	yd = yd * -1;
    }
    console.log("x, y:" + x + "," + y);
    console.log("xd, xy:" + xd + "," + yd);

    frame = window.requestAnimationFrame(bounce);
}

var stoppp = function stoppp(){
    frame = window.cancelAnimationFrame(frame);
}

button.addEventListener("click",bounce);
button1.addEventListener("click",stoppp);
