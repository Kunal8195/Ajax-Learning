<?php

$b = $_GET["q"];
$users = array("kunal","Pal","Gabbar");
for($i=0;$i<3;$i++)
{
	if($b == $users[$i]){
		$a = 1;
	}
}
if($a == 1)
{
	echo "User name already exists";
}
else{
    echo "Name is available";
}
?>


<? php

$q = $_get["Username"]; //this stores the username
$w = $_get["check_var"];  //this stores the check_var value

if ($w == 0)  //if user is not on the page for more than 15 min then this executes
	echo $q + "is Logout";
else
   echo $q + 'is Online'; /*actually these messages will be available to everyone as everyone requesting the same .php file and sending there username and check_var alongwith. and if any thing changes here it can be shown by everyone as javaScript alerting everyone who is online and who is not. */
?>