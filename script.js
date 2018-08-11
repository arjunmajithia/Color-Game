var i;
var arr;
var a, b, c, d;

function Reset()
{
	a = [ Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256) ];
	b = [ Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256) ];
	c = [ Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256) ];
	d = [ Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256) ];
	
	document.getElementById('block1').style.backgroundColor = 'rgb(' + a[0] + ',' + a[1] + ',' + a[2] +' )';
	document.getElementById('block2').style.backgroundColor = 'rgb(' + b[0] + ',' + b[1] + ',' + b[2] +' )';
	document.getElementById('block3').style.backgroundColor = 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] +' )';
	document.getElementById('block4').style.backgroundColor = 'rgb(' + d[0] + ',' + d[1] + ',' + d[2] +' )';
	
	document.getElementById('block1').style.opacity = 1;
	document.getElementById('block2').style.opacity = 1;
		document.getElementById('block3').style.opacity = 1;
		document.getElementById('block4').style.opacity = 1;
	
	arr = [a, b, c, d];
	i = Math.floor(Math.random()*4);
	
	document.getElementById('rgbvalue').innerHTML = '(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
	document.getElementById('demo').innerHTML = "";
	document.getElementById('demo').style.backgroundColor = 'white';
}

function block1()
{
	var text="";
	if(i==0)
	{
		document.getElementById('block2').style.opacity = 1;
		document.getElementById('block3').style.opacity = 1;
		document.getElementById('block4').style.opacity = 1;
		
		document.getElementById('block2').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		document.getElementById('block3').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		document.getElementById('block4').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		
		text = text + "Correct!";
		document.getElementById('demo').style.backgroundColor = 'green';
		document.getElementById('demo').style.padding = '5px';
	}
	else
	{
		document.getElementById('block1').style.opacity = 0;
		text = text + "Try Again";
		document.getElementById('demo').style.backgroundColor = 'tomato';
		document.getElementById('demo').style.padding = '5px';
	}
	document.getElementById('demo').innerHTML = text; 
}

function block2()
{
	var text="";
	if(i==1)
	{
		document.getElementById('block1').style.opacity = 1;
		document.getElementById('block3').style.opacity = 1;
		document.getElementById('block4').style.opacity = 1;
		
		document.getElementById('block1').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		document.getElementById('block3').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		document.getElementById('block4').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		
		text = text + "Correct!";
		document.getElementById('demo').style.backgroundColor = 'green';
		document.getElementById('demo').style.padding = '5px';
	}
	else
	{
		document.getElementById('block2').style.opacity = 0;
		text = text + "Try Again";
		document.getElementById('demo').style.backgroundColor = 'tomato';
		document.getElementById('demo').style.padding = '5px';
	}
	document.getElementById('demo').innerHTML = text;
}

function block3()
{
	var text="";
	if(i==2)
	{
		document.getElementById('block2').style.opacity = 1;
		document.getElementById('block1').style.opacity = 1;
		document.getElementById('block4').style.opacity = 1;
		
		document.getElementById('block2').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		document.getElementById('block1').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		document.getElementById('block4').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		
		text = text + "Correct!";
		document.getElementById('demo').style.backgroundColor = 'green';
		document.getElementById('demo').style.padding = '5px';
	}
	else
	{
		document.getElementById('block3').style.opacity = 0;
		text = text + "Try Again";
		document.getElementById('demo').style.backgroundColor = 'tomato';
		document.getElementById('demo').style.padding = '5px';
	}
	document.getElementById('demo').innerHTML = text;
}

function block4()
{
	var text="";
	if(i==3)
	{
		document.getElementById('block2').style.opacity = 1;
		document.getElementById('block3').style.opacity = 1;
		document.getElementById('block1').style.opacity = 1;
		
		document.getElementById('block2').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		document.getElementById('block3').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		document.getElementById('block1').style.backgroundColor = 'rgb(' + arr[i][0] + ',' + arr[i][1] + ',' + arr[i][2] +')';
		
		text = text + "Correct!";
		document.getElementById('demo').style.backgroundColor = 'green';
		document.getElementById('demo').style.padding = '5px';
	}
	else
	{
		document.getElementById('block4').style.opacity = 0;
		text = text + "Try Again";
		document.getElementById('demo').style.backgroundColor = 'tomato';
		document.getElementById('demo').style.padding = '5px';
	}
	document.getElementById('demo').innerHTML = text;
}