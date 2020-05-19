var y1=-6,b1=-16,r1=-26,g1=-36;
var y2=-6,b2=-16,r2=-26,g2=-36;
var y3=-6,b3=-16,r3=-26,g3=-36;
var y4=-6 ,b4=-16;r4=-26,g4=-36;
var yellowdice=[y1,y2,y3,y4]; 
var bluedice=[b1,b2,b3,b4];
var reddice=[r1,r2,r3,r4];
var greendice=[g1,g2,g3,g4];
var yellowwin=[0,0,0,0];
var bluewin=[0,0,0,0];
var greenwin=[0,0,0,0];
var redwin=[0,0,0,0];
var flag=0;
var pointy=0,pointyb=0,pointyr=0,pointyg=0;;
var dice1=document.querySelector("#dice1");
var dice2=document.querySelector("#dice2");
var dice3=document.querySelector("#dice3");
var dice4=document.querySelector("#dice4");
chance();
function chance()
{
if(flag%4==0){
dice1.addEventListener("click",yellow);
dice2.removeEventListener("click",blue);
dice3.removeEventListener("click",red);
dice4.removeEventListener("click",green);
}
else if(flag%4==1)
{dice1.removeEventListener("click",yellow)
dice3.removeEventListener("click",red);
dice4.removeEventListener("click",green);
dice2.addEventListener("click",blue);
}
else if(flag%4==2)
{
	dice1.removeEventListener("click",yellow)
dice2.removeEventListener("click",blue);
dice4.removeEventListener("click",green);
dice3.addEventListener("click",red);
}
else
{
	dice1.removeEventListener("click",yellow)
dice3.removeEventListener("click",red);
dice2.removeEventListener("click",blue);
dice4.addEventListener("click",green);

}
}

function yellow()
{  dice2.textContent="D";dice3.textContent="D";dice4.textContent="D";
	var dice=Math.floor(Math.random()*6 +1);
	dice1.textContent=dice;
	 remover();
	 pointy=dice;
	
	if(dice!==6)
	flag++;	
yplay(dice);

   chance();
}
function blue()
{ dice1.textContent="D";dice3.textContent="D";dice4.textContent="D";
	var dice=Math.floor(Math.random()*6 +1);
	 dice2.textContent=dice;
	 removerblue();
	 pointb=dice;
	
	if(dice!==6)
	flag++;
bplay(dice);
	chance();	
   
}
function red()
{ dice1.textContent="D";dice2.textContent="D";dice4.textContent="D";
	var dice=Math.floor(Math.random()*6 +1);
	 dice3.textContent=dice;
	 removerred();
	 pointr=dice;
	
	if(dice!==6)
	flag++;
rplay(dice);
	chance();	
   
}
function green()
{ dice1.textContent="D";dice2.textContent="D";dice3.textContent="D";
	var dice=Math.floor(Math.random()*6 +1);
	 dice4.textContent=dice;
	 removergreen();
	 pointg=dice;
	
	if(dice!==6)
	flag++;
gplay(dice);
	chance();	
   
}
function yplay(py)
{   if(py===6){
		document.getElementById("y1").addEventListener("click",ph11);
		document.getElementById("y2").addEventListener("click",ph22);
		document.getElementById("y3").addEventListener("click",ph33);
		document.getElementById("y4").addEventListener("click",ph44);
} if(y1>=0)
		document.getElementById("h11").addEventListener("click",ph1);
		if(y2>=0)
		document.getElementById("h22").addEventListener("click",ph2);
	if(y3>=0)
		document.getElementById("h33").addEventListener("click",ph3);
	if(y4>=0)
     document.getElementById("h44").addEventListener("click",ph4);
}

function remover()
{   document.getElementById("y1").removeEventListener("click",ph11);
	document.getElementById("y2").removeEventListener("click",ph22);
	document.getElementById("y3").removeEventListener("click",ph33);
	document.getElementById("y4").removeEventListener("click",ph44);
	if(y1>=0)
		document.getElementById("h11").removeEventListener("click",ph1);
	if(y2>=0)
	document.getElementById("h22").removeEventListener("click",ph2);
	if(y3>=0)
		document.getElementById("h33").removeEventListener("click",ph3);
	if(y4>=0)
	document.getElementById("h44").removeEventListener("click",ph4);
	}
function ph1()
	{
	 document.getElementById("h11").remove();
      if((pointy+yellowwin[0])<57)
      { if(yellowwin[0]+pointy<51)
	    y1=y1+pointy;
	    else if(y1<60)
	    	 y1=y1+pointy+10;
	    	else
      	y1=y1+pointy;
      yellowwin[0]+=pointy; 
      yellowdice[0]=y1;
      }
      if(y1!==0 && y1!==8 && y1!==13 && y1!==21 && y1!==26 && y1!==34 && y1!==39 && y1!==47 )
      	check(y1,1);
		var value= document.getElementById(y1).innerHTML;
		if(y2==y1 || y1==y3 || y1==y4 || y2==y3 ||y2==y4 || y3==y4)
		document.getElementById(y1).innerHTML="<i class='fas fa-chess-king' id='h11'></i>"+value;
	else
		document.getElementById(y1).innerHTML="<i class='fas fa-chess-king' id='h11'></i>"
      remover();
      if(y1===66)
      {
      	flag--;
      	chance();
      }
	}
	function ph2()
	{  
       document.getElementById("h22").remove();
       if((pointy+yellowwin[1])<57)
       { if(yellowwin[1]+pointy<51)
	    y2=y2+pointy;
	    else if(y2<60)
	    	 y2=y2+pointy+10;
	    	else
	    		 y2=y2+pointy;
	    yellowwin[1]+=pointy;
	    yellowdice[1]=y2; }
	    if(y2!==0 && y2!==8 && y2!==13 && y2!==21 && y2!==26 && y2!==34 && y2!==39 && y2!==47 )
      	check(y2,1);
		var value= document.getElementById(y2).innerHTML;
		if(y2==y1 || y1==y3 || y1==y4 || y2==y3 ||y2==y4 || y3==y4)
		document.getElementById(y2).innerHTML="<i class='fas fa-chess-king' id='h22'></i>"+value;
	else
		document.getElementById(y2).innerHTML="<i class='fas fa-chess-king' id='h22'></i>";
	     remover();

      if(y2===66)
      {
      	flag--;
      	chance();
      }
	}


function ph11()
	{ y1=y1+6;
		this.textContent="";
		var value=document.getElementById(y1).innerHTML;
		document.getElementById(y1).innerHTML="<i class='fas fa-chess-king' id='h11'></i>"+value;
		remover();
	}
	function ph22()
	{ y2=y2+6;
		this.textContent="";
      var value=document.getElementById(y2).innerHTML;
		document.getElementById(y2).innerHTML="<i class='fas fa-chess-king' id='h22'></i>"+value;
		remover();
	}
	function ph3()
	{
	  document.getElementById("h33").classList.remove("fas");
      document.getElementById("h33").classList.remove("fa-chess-king");
      document.getElementById("h33").remove();
      if((pointy+yellowwin[2])<57){
      	if(yellowwin[2]+pointy<51)
	    y3=y3+pointy;
	    else if(y3<60)
	    	 y3=y3+pointy+10;
	    	else
        y3=y3+pointy;
        yellowwin[2]+=pointy;
        yellowdice[2]=y3; }
        if(y3!==0 && y3!==8 && y3!==13 && y3!==21 && y3!==26 && y3!==34 && y3!==39 && y3!==47 )
      	check(y3,1);
		var value= document.getElementById(y3).innerHTML;
		if(y2==y1 || y1==y3 || y1==y4 || y2==y3 ||y2==y4 || y3==y4)
		document.getElementById(y3).innerHTML="<i class='fas fa-chess-king' id='h33'></i>"+value;
	else
		document.getElementById(y3).innerHTML="<i class='fas fa-chess-king' id='h33'></i>"
	    remover();

      if(y3===66)
      {
      	flag--;
      	chance();
      }
	}
	function ph4()
	{  document.getElementById("h44").classList.remove("fas");
      document.getElementById("h44").classList.remove("fa-chess-king");
       document.getElementById("h44").remove();
       if(pointy+yellowwin[3]<57){
       	if(yellowwin[3]+pointy<51)
	    y4=y4+pointy;
	    else if(y4<60)
	    	 y4=y4+pointy+10;
	    	else
	    y4=y4+pointy;
	    yellowwin[0]+=pointy; 
	    yellowdice[3]=y4;}
	    if(y4!==0 && y4!==8 && y4!==13 && y4!==21 && y4!==26 && y4!==34 && y4!==39 && y4!==47 )
      	check(y4,1);
		var value= document.getElementById(y4).innerHTML;
		if(y2==y1 || y1==y3 || y1==y4 || y2==y3 ||y2==y4 || y3==y4 )
		document.getElementById(y4).innerHTML="<i class='fas fa-chess-king' id='h44'></i>"+value;
	else
		document.getElementById(y4).innerHTML="<i class='fas fa-chess-king' id='h44'></i>";
	    remover();

      if(y4===66)
      {
      	flag--;
      	chance();
      }
	}


function ph33()
	{ y3=y3+6;
		this.textContent="";
		var value=document.getElementById(y3).innerHTML;
		document.getElementById(y3).innerHTML="<i class='fas fa-chess-king' id='h33'></i>"+value;
		remover();
	}
	function ph44()
	{ y4=y4+6;
		this.textContent="";
        var value=document.getElementById(y4).innerHTML;
		document.getElementById(y4).innerHTML="<i class='fas fa-chess-king' id='h44'></i>"+value;
		remover();
	}


	function bplay(pb)
{
	if(pb===6){
		document.getElementById("b1").addEventListener("click",phb11);
		document.getElementById("b2").addEventListener("click",phb22);
		document.getElementById("b3").addEventListener("click",phb33);
		document.getElementById("b4").addEventListener("click",phb44);
} if(b1>=0)
		document.getElementById("b11").addEventListener("click",phb1);
		if(b2>=0)
		document.getElementById("b22").addEventListener("click",phb2);
	if(b3>=0)
		document.getElementById("b33").addEventListener("click",phb3);
	if(b4>=0)
     document.getElementById("b44").addEventListener("click",phb4);
}

function removerblue()
{   document.getElementById("b1").removeEventListener("click",phb11);
	document.getElementById("b2").removeEventListener("click",phb22);
	document.getElementById("b3").removeEventListener("click",phb33);
	document.getElementById("b4").removeEventListener("click",phb44);
	if(b1>=0)
		document.getElementById("b11").removeEventListener("click",phb1);
	if(b2>=0)
	document.getElementById("b22").removeEventListener("click",phb2);
	if(b3>=0)
		document.getElementById("b33").removeEventListener("click",phb3);
	if(b4>=0)
	document.getElementById("b44").removeEventListener("click",phb4);
	}
function phb1()
	{
	 document.getElementById("b11").classList.remove("fas");
      document.getElementById("b11").classList.remove("fa-chess-queen");
      document.getElementById("b11").remove();
      if((pointb+bluewin[0])<57){
      	if(bluewin[0]+pointb<51)
      b1=(b1+pointb)%52;
  else if((b1+pointb)>11 && b1<50)
  	b1=+pointb+b1+59;
  else
  	b1+=pointb;
      bluewin[0]+=pointb; 
      bluedice[0]=b1;}
      if(b1!==0 && b1!==8 && b1!==13 && b1!==21 && b1!==26 && b1!==34 && b1!==39 && b1!==47 )
      	check(b1,2);
		var value= document.getElementById(b1).innerHTML;
		if(b2==b1 || b1==b3 || b1==b4 || b2==b3 ||b2==b4 || b3==b4)
		document.getElementById(b1).innerHTML="<i class='fas fa-chess-queen' id='b11'></i>"+value;
	else
		document.getElementById(b1).innerHTML="<i class='fas fa-chess-queen' id='b11'></i>"
	
		 removerblue();

      if(b1===76)
      {
      	flag--;
      	chance();
      }
	}
	function phb2()
	{  document.getElementById("b22").classList.remove("fas");
      document.getElementById("b22").classList.remove("fa-chess-queen");
       document.getElementById("b22").remove();
       if((pointb+bluewin[1])<57){
	 if(bluewin[1]+pointb<51)
      b2=(b2+pointb)%52;
  else if((b2+pointb)>11 && b1<50)
  	b2=+pointb+b2+59;
  else
  	b2+=pointb;
	 bluewin[1]+=pointb;
	 bluedice[1]=b2;}
	 if(b2!==0 && b2!==8 && b2!==13 && b2!==21 && b2!==26 && b2!==34 && b2!==39 && b2!==47 )
      	check(b2,2); 
		var value= document.getElementById(b2).innerHTML;
		if(b2==b1 || b1==b3 || b1==b4 || b2==b3 ||b2==b4 || b3==b4)
		document.getElementById(b2).innerHTML="<i class='fas fa-chess-queen' id='b22'></i>"+value;
	else
		document.getElementById(b2).innerHTML="<i class='fas fa-chess-queen' id='b22'></i>";
	removerblue();
	if(b2===76)
      {
      	flag--;
      	chance();
      }
	}
function phb11()
	{ b1=13;
		this.textContent="";
		var value=document.getElementById(b1).innerHTML;
		document.getElementById(b1).innerHTML="<i class='fas fa-chess-queen' id='b11'></i>"+value;
		removerblue();
	}
	function phb22()
	{ b2=13;
		this.textContent="";
     var value=document.getElementById(b2).innerHTML;
		document.getElementById(b2).innerHTML="<i class='fas fa-chess-queen' id='b22'></i>"+value;
		removerblue();
	}
	function phb3()
	{ document.getElementById("b33").remove();
      if((pointb+bluewin[2])<57){
      if(bluewin[2]+pointb<51)
      b3=(b3+pointb)%52;
  else if((b3+pointb)>11 && b3<50)
  	b3=+pointb+b3+59;
  else
  	b3+=pointb;
      bluedice[2]=b3;
      bluewin[2]+=pointb;} 
      if(b3!==0 && b3!==8 && b3!==13 && b3!==21 && b3!==26 && b3!==34 && b3!==39 && b3!==47 )
      	check(b3,2);
		var value= document.getElementById(b3).innerHTML;
		if(b2==b1 || b1==b3 || b1==b4 || b2==b3 ||b2==b4 || b3==b4)
		document.getElementById(b3).innerHTML="<i class='fas fa-chess-queen' id='b33'></i>"+value;
	else
		document.getElementById(b3).innerHTML="<i class='fas fa-chess-queen' id='b33'></i>"
	    removerblue();
	    if(b3===76)
      {
      	flag--;
      	chance();
      }
	}
	function phb4()
	{  
       document.getElementById("b44").remove();
       if((pointb+bluewin[0])<57){
	   if(bluewin[3]+pointb<51)
      b3=(b4+pointb)%52;
  else if((b4+pointb)>11 && b3<50)
  	b4=+pointb+b4+59;
  else
  	b4+=pointb;
	   bluewin[3]+=pointb;
	   bluedice[3]=b4; }
	   if(b4!==0 && b4!==8 && b4!==13 && b4!==21 && b4!==26 && b4!==34 && b4!==39 && b4!==47 )
      	check(b4,2);
		var value= document.getElementById(b4).innerHTML;
		if(b2==b1 || b1==b3 || b1==b4 || b2==b3 ||b2==b4 || b3==b4 )
		document.getElementById(b4).innerHTML="<i class='fas fa-chess-queen' id='b44'></i>"+value;
	else
		document.getElementById(b4).innerHTML="<i class='fas fa-chess-queen' id='b44'></i>";
	removerblue();
	if(b4===76)
      {
      	flag--;
      	chance();
      }
	}


function phb33()
	{ b3=13;
		this.textContent="";
		var value=document.getElementById(b3).innerHTML;
		document.getElementById(b3).innerHTML="<i class='fas fa-chess-queen' id='b33'></i>"+value;
		removerblue();
	}
	function phb44()
	{ b4=13;
		this.textContent="";
     var value=document.getElementById(b4).innerHTML;
		document.getElementById(b4).innerHTML="<i class='fas fa-chess-queen' id='b44'></i>"+value;
		removerblue();
	}

	function rplay(pr)
{
	if(pr===6){
		document.getElementById("r1").addEventListener("click",phr11);
		document.getElementById("r2").addEventListener("click",phr22);
		document.getElementById("r3").addEventListener("click",phr33);
		document.getElementById("r4").addEventListener("click",phr44);
} if(r1>=0)
		document.getElementById("r11").addEventListener("click",phr1);
		if(r2>=0)
		document.getElementById("r22").addEventListener("click",phr2);
	if(r3>=0)
		document.getElementById("r33").addEventListener("click",phr3);
	if(r4>=0)
     document.getElementById("r44").addEventListener("click",phr4);
}

function removerred()
{   document.getElementById("r1").removeEventListener("click",phr11);
	document.getElementById("r2").removeEventListener("click",phr22);
	document.getElementById("r3").removeEventListener("click",phr33);
	document.getElementById("r4").removeEventListener("click",phr44);
	if(r1>=0)
		document.getElementById("r11").removeEventListener("click",phr1);
	if(r2>=0)
	document.getElementById("r22").removeEventListener("click",phr2);
	if(r3>=0)
		document.getElementById("r33").removeEventListener("click",phr3);
	if(r4>=0)
	document.getElementById("r44").removeEventListener("click",phr4);
	}
function phr1()
	{
	 
      document.getElementById("r11").remove();
      if((pointr+redwin[0])<57){
      if(redwin[0]+pointr<51)
      r1=(r1+pointr)%52;
  else if((r1+pointr)>24 && r1<50)
  	r1=+pointr+r1+56;
  else
  	r1+=pointr;
      redwin[0]+=pointr;
      reddice[0]=r1;}
      if(r1!==0 && r1!==8 && r1!==13 && r1!==21 && r1!==26 && r1!==34 && r1!==39 && r1!==47 )
      	check(r1,3);
		var value= document.getElementById(r1).innerHTML;
		if(r2==r1 || r1==r3 || r1==r4 || r2==r3 ||r2==r4 || r3==r4)
		document.getElementById(r1).innerHTML="<i class='fas fa-chess-rook' id='r11'></i>"+value;
	else
		document.getElementById(r1).innerHTML="<i class='fas fa-chess-rook' id='r11'></i>"
	
		 removerred();
		 if(r1===86)
      {
      	flag--;
      	chance();
      }
	}
	function phr2()
	{  document.getElementById("r22").classList.remove("fas");
      document.getElementById("r22").classList.remove("fa-chess-rook");
       document.getElementById("r22").remove();
       if((pointr+redwin[1])<57){
	 if(redwin[1]+pointr<51)
      r2=(r2+pointr)%52;
  else if((r2+pointr)>24 && r2<50)
  	r2=+pointr+r2+56;
  else
  	r2+=pointr;
	 redwin[1]+=pointr; 
	 reddice[1]=r2;}
	 if(r2!==0 && r2!==8 && r2!==13 && r2!==21 && r2!==26 && r2!==34 && r2!==39 && r2!==47 )
      	check(r2,3);
		var value= document.getElementById(r2).innerHTML;
		if(r2==r1 || r1==r3 || r1==r4 || r2==r3 ||r2==r4 || r3==r4)
		document.getElementById(r2).innerHTML="<i class='fas fa-chess-rook' id='r22'></i>"+value;
	else
		document.getElementById(r2).innerHTML="<i class='fas fa-chess-rook' id='r22'></i>";
	removerred();
	if(r2===86)
      {
      	flag--;
      	chance();
      }
	}
function phr11()
	{ r1=26;
		this.textContent="";
		var value=document.getElementById(r1).innerHTML;
		document.getElementById(r1).innerHTML="<i class='fas fa-chess-rook' id='r11'></i>"+value;
		removerred();
	}
	function phr22()
	{ r2=26;
		this.textContent="";
     var value=document.getElementById(r2).innerHTML;
		document.getElementById(r2).innerHTML="<i class='fas fa-chess-rook' id='r22'></i>"+value;
		removerred();
	}
	function phr3()
	{
      document.getElementById("r33").remove();
      if((pointr+redwin[2])<57){
      if(redwin[2]+pointr<51)
      r3=(r3+pointr)%52;
  else if((r3+pointr)>24 && r3<50)
  	r3=+pointr+r3+56;
  else
  	r3+=pointr;
      redwin[2]+=pointr; 
      reddice[2]=r3;}
      if(r3!==0 && r3!==8 && r3!==13 && r3!==21 && r3!==26 && r3!==34 && r3!==39 && r3!==47 )
      	check(r3,3);
		var value= document.getElementById(r3).innerHTML;
		if(r2==r1 || r1==r3 || r1==r4 || r2==r3 ||r2==r4 || r3==r4)
		document.getElementById(r3).innerHTML="<i class='fas fa-chess-rook' id='r33'></i>"+value;
	else
		document.getElementById(r3).innerHTML="<i class='fas fa-chess-rook' id='r33'></i>"
	    removerred();
	    if(r3===86)
      {
      	flag--;
      	chance();
      }
	}
	function phr4()
	{  
       document.getElementById("r44").remove();
       if((pointr+redwin[3])<57){
	   if(redwin[3]+pointr<51)
      r4=(r4+pointr)%52;
  else if((r4+pointr)>24 && r4<50)
  	r4=+pointr+r4+56;
  else
  	r4+=pointr;
	   reddice[3]=r4;
	   redwin[3]+=pointr;}
	   if(r4!==0 && r4!==8 && r4!==13 && r4!==21 && r4!==26 && r4!==34 && r4!==39 && r4!==47 )
      	check(r4,3);
		var value= document.getElementById(r4).innerHTML;
		if(r2==r1 || r1==r3 || r1==r4 || r2==r3 ||r2==r4 || r3==r4 )
		document.getElementById(r4).innerHTML="<i class='fas fa-chess-rook' id='r44'></i>"+value;
	else
		document.getElementById(r4).innerHTML="<i class='fas fa-chess-rook' id='r44'></i>";
	removerred();
	if(r4===86)
      {
      	flag--;
      	chance();
      }
	}


function phr33()
	{ r3=26;
		this.textContent="";
		var value=document.getElementById(r3).innerHTML;
		document.getElementById(r3).innerHTML="<i class='fas fa-chess-rook' id='r33'></i>"+value;
		removerred();
	}
	function phr44()
	{ r4=26;
		this.textContent="";
     var value=document.getElementById(r4).innerHTML;
		document.getElementById(r4).innerHTML="<i class='fas fa-chess-rook' id='r44'></i>"+value;
		removerred();
	}

	function gplay(pg)
{
	if(pg===6){
		document.getElementById("g1").addEventListener("click",phg11);
		document.getElementById("g2").addEventListener("click",phg22);
		document.getElementById("g3").addEventListener("click",phg33);
		document.getElementById("g4").addEventListener("click",phg44);
} if(g1>=0)
		document.getElementById("g11").addEventListener("click",phg1);
		if(g2>=0)
		document.getElementById("g22").addEventListener("click",phg2);
	if(g3>=0)
		document.getElementById("g33").addEventListener("click",phg3);
	if(g4>=0)
     document.getElementById("g44").addEventListener("click",phg4);
}

function removergreen()
{   document.getElementById("g1").removeEventListener("click",phg11);
	document.getElementById("g2").removeEventListener("click",phg22);
	document.getElementById("g3").removeEventListener("click",phg33);
	document.getElementById("g4").removeEventListener("click",phg44);
	if(g1>=0)
		document.getElementById("g11").removeEventListener("click",phg1);
	if(g2>=0)
	document.getElementById("g22").removeEventListener("click",phg2);
	if(g3>=0)
		document.getElementById("g33").removeEventListener("click",phg3);
	if(g4>=0)
	document.getElementById("g44").removeEventListener("click",phg4);
	}
function phg1()
	{
	 document.getElementById("g11").classList.remove("fas");
      document.getElementById("g11").classList.remove("fa-chess-pawn");
      document.getElementById("g11").remove();
      if((pointg+greenwin[0])<57){
     if(greenwin[0]+pointg<51)
      g1=(g1+pointg)%52;
  else if((g1+pointg)>37 && g1<50)
  	g1=+pointg+g1+53;
  else
  	g1+=pointg;
      greenwin[0]+=pointg; 
      greendice[0]=g1;}
      if(g1!==0 && g1!==8 && g1!==13 && g1!==21 && g1!==26 && g1!==34 && g1!==39 && g1!==47 )
      	check(g1,4);
		var value= document.getElementById(g1).innerHTML;
		if(g2==g1 || g1==g3 || g1==g4 || g2==g3 ||g2==g4 || g3==g4)
		document.getElementById(g1).innerHTML="<i class='fas fa-chess-pawn' id='g11'></i>"+value;
	else
		document.getElementById(g1).innerHTML="<i class='fas fa-chess-pawn' id='g11'></i>"
	
		 removergreen();
		 if(g1===96)
      {
      	flag--;
      	chance();
      }
	}
	function phg2()
	{  
       document.getElementById("g22").remove();
       if((pointg+greenwin[1])<57){
	 if(greenwin[1]+pointg<51)
      g2=(g2+pointg)%52;
  else if((g2+pointg)>37 && g2<50)
  	g2=+pointg+g2+53;
  else
  	g2+=pointg;
	 greenwin[1]+=pointg;
	 greendice[1]=g2; }
	 if(g2!==0 && g2!==8 && g2!==13 && g2!==21 && g2!==26 && g2!==34 && g2!==39 && g2!==47 )
      	check(g2,4);
		var value= document.getElementById(g2).innerHTML;
		if(g2==g1 || g1==g3 || g1==g4 || g2==g3 ||g2==g4 || g3==g4)
		document.getElementById(g2).innerHTML="<i class='fas fa-chess-pawn' id='g22'></i>"+value;
	else
		document.getElementById(g2).innerHTML="<i class='fas fa-chess-pawn' id='g22'></i>";
	removergreen();
	if(g2===96)
      {
      	flag--;
      	chance();
      }
	}
function phg11()
	{ g1=39;
		this.textContent="";
		var value=document.getElementById(g1).innerHTML;
		document.getElementById(g1).innerHTML="<i class='fas fa-chess-pawn' id='g11'></i>"+value;
		removergreen();
	}
	function phg22()
	{ g2=39;
		this.textContent="";
     var value=document.getElementById(g2).innerHTML;
		document.getElementById(g2).innerHTML="<i class='fas fa-chess-pawn' id='g22'></i>"+value;
		removergreen();
	}
	function phg3()
	{
      document.getElementById("g33").remove();
      if((pointg+greenwin[2])<57){
      if(greenwin[2]+pointg<51)
      g3=(g3+pointg)%52;
  else if((g3+pointg)>37 && g3<50)
  	g3=+pointg+g3+53;
  else
  	g3+=pointg;
      greendice[2]=g3;
      greenwin[2]+=pointg; }
      if(g3!==0 && g3!==8 && g3!==13 && g3!==21 && g3!==26 && g3!==34 && g3!==39 && g3!==47 )
      	check(g3,4);
		var value= document.getElementById(g3).innerHTML;
		if(g2==g1 || g1==g3 || g1==g4 || g2==g3 ||g2==g4 || g3==g4)
		document.getElementById(g3).innerHTML="<i class='fas fa-chess-pawn' id='g33'></i>"+value;
	else
		document.getElementById(g3).innerHTML="<i class='fas fa-chess-pawn' id='g33'></i>"
	    removergreen();
	    if(g3===96)
      {
      	flag--;
      	chance();
      }
	
	}
	function phg4()
	{  
       document.getElementById("g44").remove();
       if((pointg+greenwin[3])<57){
	   if(greenwin[3]+pointg<51)
      g4=(g4+pointg)%52;
  else if((g4+pointg)>37 && g4<50)
  	g4=+pointg+g4+53;
  else
  	g4+=pointg;
	   greendice[3]=g4;
	   greenwin[3]+=pointg; }
	   if(g4!==0 && g4!==8 && g4!==13 && g4!==21 && g4!==26 && g4!==34 && g4!==39 && g4!==47 )
      	check(g4,4);
		var value= document.getElementById(g4).innerHTML;
		if(g2==g1 || g1==g3 || g1==g4 || g2==g3 ||g2==g4 || g3==g4 )
		document.getElementById(g4).innerHTML="<i class='fas fa-chess-pawn' id='g44'></i>"+value;
	else
		document.getElementById(g4).innerHTML="<i class='fas fa-chess-pawn' id='g44'></i>";
	removergreen();
	if(g4===96)
      {
      	flag--;
      	chance();
      }

	}


function phg33()
	{ g3=39;
		this.textContent="";
		var value=document.getElementById(g3).innerHTML;
		document.getElementById(g3).innerHTML="<i class='fas fa-chess-pawn' id='g33'></i>"+value;
		removergreen();
	}
	function phg44()
	{ g4=39;
		this.textContent="";
     var value=document.getElementById(g4).innerHTML;
		document.getElementById(g4).innerHTML="<i class='fas fa-chess-pawn' id='g44'></i>"+value;
		removergreen();
	}
function check(number,color){

if(color!==1)
{ var new1=yellowdice.indexOf(number);
	switch(new1+1)
	{
		     case 1:{y1=-6;yellowwin[0]=0;
		     	if(pointy!==6)
		     		flag--;chance();
			 document.getElementById("h11").remove();
			 document.getElementById("y1").innerHTML="<i class='fas fa-chess-king' id='h11'></i>";
			 break;}
			 case 2:{y2=-6;yellowwin[1]=0;
			 	if(pointy!==6)
		     		flag--;chance();
			 document.getElementById("h22").remove();
			 document.getElementById("y2").innerHTML="<i class='fas fa-chess-king' id='h22'></i>";
			 break;}
			 case 3:{y1=-6;yellowwin[2]=0;
			 	if(pointy!==6)
		     		flag--;chance();
			 document.getElementById("h33").remove();
			 document.getElementById("y3").innerHTML="<i class='fas fa-chess-king' id='h33'></i>";
			 break;}
			 case 4:{y1=-6;yellowwin[3]=0;
			 	if(pointy!==6)
		     		flag--;chance();
			 document.getElementById("h44").remove();
			 document.getElementById("y4").innerHTML="<i class='fas fa-chess-king' id='h44'></i>";
			 break;}
			
			 
	}
}
console.log("gupta");
 if(color!==2)
{
	var new2=bluedice.indexOf(number);
	switch(new2+1)
	{
		     case 1:{b1=-6;bluewin[0]=0;
		     	if(pointb!==6)
		     		flag--;chance();
			 document.getElementById("b11").remove();
			 document.getElementById("b1").innerHTML="<i class='fas fa-chess-queen' id='b11'></i>";
			 break;}
			 case 2:{b2=-6;bluewin[1]=0;
			 	if(pointb!==6)
		     		flag--;chance();
			 document.getElementById("b22").remove();
			 document.getElementById("b2").innerHTML="<i class='fas fa-chess-queen' id='b22'></i>";
			 break;}
			 case 3:{b1=-6;bluewin[2]=0;
			 	if(pointb!==6)
		     		flag--;chance();
			 document.getElementById("b33").remove();
			 document.getElementById("b3").innerHTML="<i class='fas fa-chess-queen' id='b33'></i>";
			 break;}
			 case 4:{b1=-6;bluewin[3]=0;
			 	if(pointb!==6)
		     		flag--;chance();
			 document.getElementById("b44").remove();
			 document.getElementById("b4").innerHTML="<i class='fas fa-chess-queen' id='b44'></i>";
			 break;}
			
			 
	}


}
if(color!==3)
{
var new3=reddice.indexOf(number);
	switch(new3+1)
	{
		     case 1:{r1=-6;redwin[0]=0;
		     	if(pointr!==6)
		     		flag--;chance();
			 document.getElementById("r11").remove();
			 document.getElementById("r1").innerHTML="<i class='fas fa-chess-rook' id='r11'></i>";
			 break;}
			 case 2:{r2=-6;redwin[1]=0;
			 	if(pointr!==6)
		     		flag--;chance();
			 document.getElementById("r22").remove();
			 document.getElementById("r2").innerHTML="<i class='fas fa-chess-rook' id='r22'></i>";
			 break;}
			 case 3:{r3=-6;redwin[2]=0;
			 	if(pointr!==6)
		     		flag--;chance();
			 document.getElementById("r33").remove();
			 document.getElementById("r3").innerHTML="<i class='fas fa-chess-rook' id='r33'></i>";
			 break;}
			 case 4:{r4=-6;redwin[3]=0;
			 	if(pointr!==6)
		     		flag--;chance();
			 document.getElementById("r44").remove();
			 document.getElementById("r4").innerHTML="<i class='fas fa-chess-rook' id='r44'></i>";
			 break;}
			 
			 
	}
}
if(color!==4)
{
	var new4=greendice.indexOf(number);
	switch(new4+1)
	{
		     case 1:{g1=-6;greenwin[0]=0;
		     	if(pointg!==6)
		     		flag--;chance();
			 document.getElementById("g11").remove();
			 document.getElementById("g1").innerHTML="<i class='fas fa-chess-pawn' id='g11'></i>";
			 break;}
			 case 2:{g2=-6;greenwin[1]=0;
			 	if(pointg!==6)
		     		flag--;chance();
			 document.getElementById("g22").remove();
			 document.getElementById("g2").innerHTML="<i class='fas fa-chess-pawn' id='g22'></i>";
			 break;}
			 case 3:{g3=-6;greenwin[2]=0;
			 	if(pointg!==6)
		     		flag--;chance();
			 document.getElementById("g33").remove();
			 document.getElementById("g3").innerHTML="<i class='fas fa-chess-pawn' id='g33'></i>";
			 break;}
			 case 4:{g4=-6;greenwin[3]=0;
			 	if(pointg!==6)
		     		flag--;chance();
			 document.getElementById("g44").remove();
			 document.getElementById("g4").innerHTML="<i class='fas fa-chess-pawn' id='g44'></i>";
			 break;}
			 
	}

}

}

