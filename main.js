var canvas = new fabric.Canvas( "myCanvas");
var blockimagewidth=30;
var blockimageheight=30 ;
var player_x =10;
var player_y =10;
var player_object ="";
var block_object ="";
function player_update()
{
    fabric.Image.fromURL("superhero.jpg", function(Img) {
player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);
});
}
function block(get_Image)
{
    fabric.Image.fromURL(get_Image, function(Img) {
block_object = Img;
	block_object.scaleToWidth(blockimagewidth);
	block_object.scaleToHeight(blockimageheight);
	block_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_object);
});
}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
	keyPressed= e.keyCode
	console.log(keyPressed)
	if(e.shiftKey== true && keyPressed== '80')
	{
		console.log("p and shift are pressed together")
		blockimagewidth+=10;
blockimageheight+=10;
document.getElementById("current-width").innerHTML=blockimagewidth;
document.getElementById("current-height").innerHTML=blockimageheight;
	}
		if(e.shiftKey== true && keyPressed== '77')
		{
			console.log("m and shift are pressed together")
			blockimagewidth-=10;
			blockimageheight-=10;
document.getElementById("current-width").innerHTML=blockimagewidth;
document.getElementById("current-height").innerHTML=blockimageheight;
	}
	
if(keyPressed =='38')
{
	up();
	console.log("up");
}
if(keyPressed =='40')
{
	down();
	console.log("down");
}
if(keyPressed =='37')
{
	left();
	console.log("left");
}
if(keyPressed =='39')
{
	right();
	console.log("right");
}
if(keyPressed =='87')
{
	block('wall.jpg');
	console.log("w");
}
if(keyPressed =='71')
{
	block('groung.png');
	console.log("g");
}
if(keyPressed =='76')
{
	block('light_green.png');
	console.log("l");
}
if(keyPressed =='84')
{
	block('trunk.jpg');
	console.log("t");
}
if(keyPressed =='82')
{
	block('roof.jpg');
	console.log("r");
}
if(keyPressed =='89')
{
	block('yellow_wall.png');
	console.log("y");
}
if(keyPressed =='68')
{
	block('dark_green.png');
	console.log("d");
}
if(keyPressed =='85')
{
	block('unique.png');
	console.log("u");
}
if(keyPressed =='67')
{
	block('cloud.jpg');
	console.log("c");
}
}
function up()
{
	if (player_y >=0)
{
	player_y= player_y - blockimageheight;
	console.log("block image height=" +blockimageheight);
	console.log("When up key is pressed, X=" + player_x + ",Y" + player_y);
	canvas.remove(player_object);
	player_update();
}
}
function down()
{
	if (player_y <=500)
{
	player_y= player_y + blockimageheight;
	console.log("block image height=" +blockimageheight);
	console.log("When up key is pressed, X=" + player_x + ",Y" + player_y);
	canvas.remove(player_object);
	player_update();
}
}

function left()
{
	if (player_x >0)
{
	player_x= player_x - blockimagewidth;
	console.log("block image width=" +blockimagewidth);
	console.log("When up key is pressed, X=" + player_x + ",Y" + player_y);
	canvas.remove(player_object);
	player_update();
}
}
function right()
{
	if (player_x <=650)
{
	player_x= player_x + blockimagewidth;
	console.log("block image width=" +blockimagewidth);
	console.log("When up key is pressed, X=" + player_x + ",Y" + player_y);
	canvas.remove(player_object);
	player_update();
}
}