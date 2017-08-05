function drawLine() {
    var c = document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}
function circle() {
    var c = document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,120,70,0,2*Math.PI);
    ctx.stroke();
}
function hcn() {
    var c=document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    ctx.fillStyle="red";
    ctx.fillRect(0,0,200,300);
}
function text() {
    var c = document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    ctx.font=" 50px arial";
    ctx.fillStyle="blue";
    ctx.textAlign="center";
    //ctx.fillText("Thu Hoai", canvas1.width/2, canvas1.height/2);
    ctx.strokeText("Thu Hoai", canvas1.width/2, canvas1.height/2);
}