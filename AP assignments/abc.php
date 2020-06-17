<!DOCTYPE html>
<html>
<head>
	<title>Your Info</title>
</head>
<style type="text/css">
body{
	background: #2BC0E4;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #EAECC6, #2BC0E4);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #EAECC6, #2BC0E4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	font-family: Roboto;
}
</style>
<body>


<?php 
echo("<h1> Hello ".$_POST["Firstname"]."</h1><br>");
echo("<h1>Your information is successfully submitted</h1><br>");
echo("<h1>Have a look");
echo("<h1>Name=".$_POST["Firstname"]." ".$_POST["lastname"]."</h1><br>");
echo("<h1>Roll no=".$_POST["rollno"]."</h1><br>");
echo("<h1>Branch=".$_POST["Branch"]."</h1><br>");
echo("<h1>Gender=".$_POST["gender"]."</h1><br>");
echo("<h1>state=".$_POST["state"]."</h1><br>");
echo("<h1>Contact No=".$_POST["number"]."</h1><br>");
echo("<h1>E-mail Id=".$_POST["E-mail"]."</h1><br>");
	echo("<h1>Language learn=".$_POST["lang"]."</h1><br>");
	echo("<h1>Area of interest=".$_POST["aoi"]."</h1><br>");
	echo("<h1>Sports=".$_POST["sports"]."</h1><br>");
?></body>
</html>
