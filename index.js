var myName = "Yelnur";
var group = "CS-2122";
document.getElementById("name").innerHTML = "Name: " + myName  + ". Group " + group;
var today = new Date();
var year = today.getFullYear()
document.getElementById("1").innerHTML = "Year : " + year;
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  document.getElementById("2").innerHTML = "Today is : " + daylist[day];
  var day = today.getDate()
  document.getElementById("3").innerHTML = "Date : " + day;
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  document.getElementById("4").innerHTML = "Month : " + monthNames[today.getMonth()];
  var time = today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
  document.getElementById("5").innerHTML = "Current time is : " + time;

var year1 = 304;
var year2 = 304;
var year3 = 151;
sum = year1+year2+year3;
document.getElementById("day").innerHTML = sum + " days left until the freedom!";
/*
var year = "2022";
var today = "Monday";
var date = "31";
var month = "January";
var currentTime = "10 AM : 30 : 48";

document.getElementById("1").innerHTML = "Year: " + year;
document.getElementById("2").innerHTML = "Today is: " + today;
document.getElementById("3").innerHTML = "Date: " + date;
document.getElementById("4").innerHTML = "Month: " + month;
document.getElementById("5").innerHTML = "Current time is: " + currentTime;
*/
function mul()
{
        n1 = document.getElementById("11").value;
        n2 = document.getElementById("22").value;
        document.getElementById("res").innerHTML = n1 * n2;
}

function divide()
{
        n1 = document.getElementById("11").value;
        n2 = document.getElementById("22").value;
document.getElementById("res").innerHTML = n1 / n2;
}
