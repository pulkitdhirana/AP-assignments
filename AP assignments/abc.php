<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
session_start();
$username=echo($_POST['username']);
$password=echo($_POST['password']);
$con=mysqli_connect('localhost','root');
mysqli_select_db($con,'userdb');
$q="Select * from userid where username='$username' && password='$password'";
$result=mysqli_query($con,$q);
$num=mysqli_num_rows($result);
if($num==0)
{
$_SESSION['username']=$username;
header('location:http://localhost/login/page.php');
}
else
{
header('location:http://localhost/login/home.html');
}
echo("Usename is".$username);
echo("Password is".$password);
?>
</body>
</html>
