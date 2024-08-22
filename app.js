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
let p = document.querySelector("h1");

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
  p.innerHTML = "Yah! I can write HTML through JavaScript";
  alert(string);
}
