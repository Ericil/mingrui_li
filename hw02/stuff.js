var c = document.getElementById("canvas");
var button = document.getElementById("button");
var ctx = c.getContext("2d");
var a = 0;
var b = 5;

var animate = function animate(e){
    console.log("radius:" + a);
    console.log("incrament:" + b);
    a = a + b;
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(300, 300, a, 0, 2 * Math.PI);
    ctx.fill();
    if (a <= 0 || a >= 300){
	console.log( "toggle" );
	b = b * -1;
    }
    window.requestAnimationFrame(animate);
}

var test = function test(e){
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(300, 300, 50, 0, 2 * Math.PI);
    ctx.fill();
    console.log("run");
}
button.addEventListener("click", animate);
