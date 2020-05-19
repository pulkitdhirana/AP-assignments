
		var circles=[];
	function onKeyDown(event){
	.play();

	var max=new Point(view.size.width,view.size.height);
	var rpoint= Point.random();
	var center=max * rpoint;
	
	var newcircle=new Path.Circle(center,500);
	newcircle.fillColor = Color.random();
circles.push(newcircle);
}

function onFrame(event){
for(var i=0;i<circles.length;i++)
	{circles[i].fillColor.hue += 1;
	circles[i].scale(.9);
}
}
	
 