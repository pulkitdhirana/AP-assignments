
 var square=document.querySelectorAll(".square");
var colors= generateRandomColors(6);
var pickedcolor=colors[Math.floor(Math.random()*square.length)];
var trytry=document.querySelector("#try");
var header=document.querySelector("#header");
var button=document.querySelector("button");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var number=document.querySelector("#number");
var j=5, m=5;
number.textContent= "chances:" +j;
easy.addEventListener("click",function ()
{      j=2;m=2;
	number.textContent="chances:" +j;
	colors= generateRandomColors(3);
pickedcolor=colors[Math.floor(Math.random()*square.length)];
rgb.textContent=pickedcolor;
for(var i=0;i<3;i++)
{
	square[i].style.backgroundColor=colors[i];}
	for(var i=3;i<6;i++)
{
	square[i].style.display="none";}
	header.style.backgroundColor="blue";
trytry.textContent=("CLICK ????");

});
hard.addEventListener("click",function ()
{    m=5;
	j=5;
	number.textContent="chances:" +j;
	for(var i=3;i<6;i++)
{
	square[i].style.display="block";}
colors= generateRandomColors(6);
for(var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=colors[i];}
pickedcolor=colors[Math.floor(Math.random()*square.length)];
rgb.textContent=pickedcolor;
header.style.backgroundColor="blue";
trytry.textContent=("CLICK ????");
});



 	for(var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function(){
		
		var clickcolor=this.style.backgroundColor;
		if(clickcolor===pickedcolor)
			{all();
				header.style.backgroundColor=clickcolor;
		trytry.textContent=("PLAY AGAIN");

		number.textContent="WINNER";}
		else
			{this.style.backgroundColor="#232323";
		trytry.textContent=("Try again!! ");
	j--;

		number.textContent="chances:" +j;}
	});
}


var rgb=document.querySelector("#span");
rgb.textContent=pickedcolor;
function all(){

	for(var i=0;i<square.length;i++)
	{
	square[i].style.backgroundColor=pickedcolor;	
	}
}

function generateRandomColors(num)
{
	var color=[];
	for(var i=0;i<num;i++)
	{
		var r=Math.floor(Math.random()*255);

		var g=Math.floor(Math.random()*255);

		var b=Math.floor(Math.random()*255);
		color[i]="rgb(" + r + ", " + g + ", " + b + ")";

	}
	return color;
}
button.addEventListener("click",function (){
	j=m;
		number.textContent="chances:" +j;
colors= generateRandomColors(6);
for(var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=colors[i];}
pickedcolor=colors[Math.floor(Math.random()*square.length)];
rgb.textContent=pickedcolor;
header.style.backgroundColor="steelblue";
trytry.textContent=("CLICK ????");
});

