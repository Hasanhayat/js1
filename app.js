console.log("ASSALAM O ALIKUM");
//first
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", fun1);

function fun1() {
  alert("Error! please enter valid password");
  alert("Welcome to js land...\nHappy Coding!");
}
//second
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", fun2);
var username = "HASSAN HAYAT";
let message = "HELLO WORLD";
var studentName = "Hassan Hayat";
var age = 16;
var classLevel = "10th Grade";
var schoolName = " High School";
var city = "Karachi";
let pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
const email = "aylskhsmvz.v@gmail.com";
const book = "“A smarter way to learn JavaScript”. ";
var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
let h1 = document.querySelector("#h1");

function fun2() {
  alert(username);
  alert(message);
  alert("Student Name: " + studentName);
  alert("Age: " + age);
  alert("Class Level: " + classLevel);
  alert("School Name: " + schoolName);
  alert("City: " + city);
  alert(pizza);
  alert("My Email is: " + email);
  alert(book);
  h1.innerHTML += "Yah! I can write HTML through JavaScript";
  alert(string);
}
//3

let btn3 = document.querySelector("#btn3");
let h2 = document.querySelector("#h2");
btn3.addEventListener("click", fun3);
var age = 16 + " years";
var birthYear = 2007;
var MyMessage = "My birth year is " + birthYear + ".";
function fun3() {
  alert(age);
  h1.innerText = MyMessage + " \nData type is " + typeof MyMessage;
  let name = prompt("enter your name");
  let product = prompt("enter product");
  let quantity = prompt("quantity");
  h2.innerHTML += name + "\xa0want to buy \xa0" + quantity + " " + product;
  h2.style.color = "rgb(89, 200, 250)";
  h2.style.fontFamily = "cursive";
}

//4
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", fun4);

function fun4() {
  // 3 variables in one statement
  var name, age, city;

  // Declare 5 legal & 5 illegal variable names

  // Legal variable names
  var $name;
  var _age;
  var myFirstVariable;
  var name1;
  var user_name;

  // Illegal variable names
  // var 1name;
  // var @age;
  // var my-name;
  // var user name;
  // var var;

  // the rules for naming JS variables in the browser

  document.write("<h1>Rules for naming JS variables</h1>");

  document.write(
    "Variable names can only contain letters, numbers, $, and _.<br>For example: <code>$my_1stVariable</code><br><br>"
  );

  document.write("Variables must begin with a letter, $, or _.");

  document.write("Variable names are case sensitive.<br><br>");

  document.write("Variable names should not be JS function name.<br>");
}

//5

let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", fun5);
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;

var num1 = 10;
var num2 = 5;
var difference = num1 - num2;

var num1 = 10;
var num2 = 5;
var product = num1 * num2;

var num1 = 10;
var num2 = 5;
var quotient = num1 / num2;

var num1 = 10;
var num2 = 3;
var remainder = num1 % num2;



var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;


fahrenheit = 70;
celsius = (fahrenheit - 32) * 5/9;

function fun5() {

h2.innerHTML = ("sum = " +sum +" diffrence = "+difference+" product = "+product+ " quotient = " +quotient +" remainder = " +remainder)
h2.style.color = "rgb(89, 200, 250)";
h2.style.fontFamily = "cursive";

var value;
h2.innerHTML += "Value after variable declaration is: " + value + "<br>";
value = 5;
h2.innerHTML += "Initial value: " + value + "<br>";
value++;
h2.innerHTML += "Value after increment is: " + value + "<br>";
value += 7;
h2.innerHTML += "Value after addition is: " + value + "<br>";
value--;
h2.innerHTML += "Value after decrement is: " + value + "<br>";
var remainder = value % 3;
h2.innerHTML += "The remainder is: " + remainder + "<br>";
h2.innerHTML += celsius + "°C is " + fahrenheit + "°F<br>";
h2.innerHTML += fahrenheit + "°F is " + celsius + "°C<br>";

}
