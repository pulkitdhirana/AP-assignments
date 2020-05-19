var dice1=document.querySelector("#b1");
var dice2=document.querySelector("#b2");

var six1=0;
var six2=0;
var p1=0;
var pp1=0;
var p2=0;
var pp2=0;
var block1,bblock1;
var block1,bblock1;
var i=1;
function chance(){
	if(i%2==1){
 dice1.addEventListener("click",dicee);
dice2.removeEventListener("click",dicee2)
i++;}
else{
 dice2.addEventListener("click",dicee2);
 dice1.removeEventListener("click",dicee);
 i++;
}

}
function snake(num)
{  
	pp1=p1;
p1=p1+num;

 bblock1=document.getElementById(pp1);
 block1=document.getElementById(p1);
console.log(p1);
block1.style.backgroundColor="red";
bblock1.style.backgroundColor="transparent";
check(p1);
}
function snake1(num)
{  
	pp2=p2;
p2=p2+num;

 bblock2=document.getElementById(pp2);
 block2=document.getElementById(p2);
console.log(p2);
block2.style.backgroundColor="green";
bblock2.style.backgroundColor="transparent";
check1(p2);
}
function check(pos){ var d=pos;
	if(pos==5)
{pos=25;}
else if(pos==10)
{pos=29;}
else if(pos==28)
{pos=55;}
else if(pos==22)
{pos=41;}
else if(pos==31)
{pos=14;}
else if(pos==37)
{pos=17;}
else if(pos==70)
{pos=89;}
else if(pos==73)
	{pos=53;}
 else if(pos==78)
	{pos=39;}
else if(pos==79)
{	pos=81;}
else if(pos==92)
{pos=35;}
else if(pos==99)
	{pos=7;}
else 
return ;
if(d!==pos){ pp1=d;
	p1=pos;
bblock=document.getElementById(d);
 block=document.getElementById(pos);
block.style.backgroundColor="red";
bblock.style.backgroundColor="transparent";
console.log(pos);}
};
function check1(pos){ var d=pos;
	if(pos==5)
{pos=25;}
else if(pos==10)
{pos=29;}
else if(pos==28)
{pos=55;}
else if(pos==22)
{pos=41;}
else if(pos==31)
{pos=14;}
else if(pos==37)
{pos=17;}
else if(pos==70)
{pos=89;}
else if(pos==73)
	{pos=53;}
 else if(pos==78)
	{pos=39;}
else if(pos==79)
{	pos=81;}
else if(pos==92)
{pos=35;}
else if(pos==99)
	{pos=7;}
else 
return ;
if(d!==pos){ pp2=d;

	p2=pos;
bblock2=document.getElementById(d);
 block2=document.getElementById(pos);
block2.style.backgroundColor="green";
bblock2.style.backgroundColor="transparent";
console.log(p2);}
};
function dicee() {
 	var b=Math.floor(Math.random()*6+1);
 	dice1.textContent=b;
 	if(b==6)
 		six1=six1+1;
 	else
 	{
 		if(six1>=1)
 			six1++;
 	}
 	if (six1>1 )
 	{ if( (p1+b)<100)
 	snake(b);
 	else
 	if(p1+b==100) 
 		{snake(b);
 		alert("congrats you are a winner");}
 }
 chance();
 }
 function dicee2() {
 	var b=Math.floor(Math.random()*6+1);
 	dice2.textContent=b;
	if(b==6)
 		six2=six2+1;
 	else
 	{
 		if(six2>=1)
 			six2++;
 	}
 	if (six2>1 )
 	{ if( (p2+b)<100)
 	snake1(b);
 	else
 	if(p2+b==100) 
 		{snake1(b);
 		alert("congrats you are a winner");}

 }
 chance();
 }
 chance();