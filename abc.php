<!DOCTYPE html>
<html>
<head>
  <title>Your Info</title>
</head>
<style type="text/css">
body{
  background: #2BC0E4;
font-family: Arial, Helvetica, sans-serif;
}
</style>
<body>
<?php 
echo("<h1> Hello ".$_POST["Name"]."</h1><br>");
echo("<h1>Your information is successfully submitted</h1><br>");
echo("<h1>Name=".$_POST["Name"]"</h1><br>");
echo("<h1>Roll no=".$_POST["rollno"]."</h1><br>");
echo("<h1>Branch=".$_POST["Branch"]."</h1><br>");
echo("<h1>Gender=".$_POST["gender"]."</h1><br>");
echo("<h1>Contact No=".$_POST["number"]."</h1><br>");
echo("<h1>E-mail Id=".$_POST["E-mail"]."</h1><br>");
  echo("<h1>Language learnt=".$_POST["lang"]."</h1><br>");
  echo("<h1>Area of interest=".$_POST["Skills"]."</h1><br>");
?></body>
</html>
