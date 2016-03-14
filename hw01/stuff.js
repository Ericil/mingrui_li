var c = document.getElementById("canvas");
var button = document.getElementById("button");
var ctx = c.getContext("2d");


ctx.beginPath();
var point = function point(a){
    a.preventDefault();
    ctx.lineTo(a.offsetX, a.offsetY);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(a.offsetX,a.offsetY, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.moveTo(a.offsetX, a.offsetY);
};

var clear = function clear(){
    ctx.clearRect(0, 0, 600, 600);
    ctx.beginPath();
};

c.addEventListener("click", point);
button.addEventListener("click", clear);
