function loadDoc() {
  var xhttp1 = new XMLHttpRequest();
  xhttp1.onreadystatechange = function() {
    if (xhttp1.readyState == 4 && xhttp1.status == 200) {
     document.getElementById("para2").innerHTML = xhttp1.responseText;
    }
  };
  xhttp1.open("GET", "experiment.txt", true);
  xhttp1.send();
} 

function starting(){
    var str = $("#inp3").val();
    if(str.length == 0)
    {
        document.getElementById("para3").innerHTML = "Please Enter something";
    }
    else
    {
    /*var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
            if(xhttp.status == 200 && xhttp.readyState == 4)
             document.getElementById("para3").innerHTML = xhttp.responseText;
        }*/
        $.post("experiment.php",{q:str},function(data){
            $("#para4").html(data);
        });
        //xhttp.send();
    }
}
var n;
$(document).ready(function(){
    $("#inp1").keyup(function(){
        var x = $(this).val();
        n = x.search(/.*a/i);
        if (n) {
            y = "Going Right";
            $("#para1").html(y);
            //document.getElementById("#para1").innerHTML = "Cannot put a in this field";        
        }
        else{
            
            var y = "Cannot put a in this field";
            $("#para1").html(y);
        }
        
        
    });  
    $("#inp2").keyup(function(){
        if (n) {
            $(this).val("can put a in this field");
        }
    });
});



///////////////////////////////////////////////

$(function(){
    var username = $("#username").val();
    var lastUpdate = 0;
    var checkInterval = setInterval(function(){
       if(new Date().getTime() - lastUpdate > 840000){
           clearInterval(checkInterval);
           $.get('demo.php',{check_var:0,user_name:username},function(data){
            alert(data);
           });
       }else{   
            $.get('demo.php',{check_var:1,user_name:username});
       }
    }, 840000); // 14 mins * 60 * 1000

    $(document).keydown(function(){
         lastUpdate = new Date().getTime();
    });
});

(function(){
    var check_var = 1;
    var username = $("#username").val(); /*this actually takes the username, it gets filled as soon as user logged in*/
    var lastUpdate = 0;
    var checkInterval = setInterval(function(){    /*setInterval function request 'demo.php' every 15 min and sends the data contaning 'username' and 'check_var' */
       if(new Date().getTime() - lastUpdate > 840000){ /* this line checks whether last activity on screen has taken more than 15 min or not */
           clearInterval(checkInterval); /* if 15min are elapsed since last activity then this function clears the interval */
           $.get('demo.php',{check_var:0,user_name:username},function(data){ /* this function request the server last time and sends the updated value of 'check_var' */
                       alert(data); /* this gives alert on friends and users own screen of logout. */
           });
       }else{   
            $.get('demo.php',{check_var:1,user_name:username},function(data){
                   alert(data);
            }); /*this keeps execuitng until user is on the page and doing something. */
       }
    }, 840000); // 14 mins * 60 * 1000

    $(document).keydown(function(){   //this function checks for any key movement on screen
         lastUpdate = new Date().getTime();
    });
});
