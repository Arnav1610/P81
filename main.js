canvas =
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

//rectangle<
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.rect(100, 143, 600, 300);
ctx.stroke();
//rectangle>

ctx.beginPath();
ctx.strokeStyle = "deepskyblue";
ctx.lineWidth = 5;
ctx.arc(290, 260, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(400, 260, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(510, 260, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "gold";
ctx.lineWidth = 5;
ctx.arc(345, 317, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "lightgreen";
ctx.lineWidth = 5;
ctx.arc(455, 317, 50, 0, 2 * Math.PI);
ctx.stroke();



