// ------------Chapter1----------


// Write a script to greet your website visitor using JS alert box. 
alert ("Have a nice day!");

// Write a script to display following message on your web page:
alert ("Error! Please enter a valid password.");

// Write a script to display following message on your web page: (Hint : Use line break) 
alert("Welcome to JS Land... \nHappy Coding!");

// Write a script to display following messages in sequence:
alert("Welcome to JS Land...");
alert("Happy Coding!");

// Generate the following message through browser’s developer console: 
console.log("Hello... I can run JS through my web browser's console");


// ------------Chapter2----------


// Declare a variable called username. 
var username;

// Declare a variable called myName & assign to it a string that represents your Full Name. 
var myName;
var myName = "S M AALIM HUSSAIN";
alert(myName); 

// Write script to  
// a) Declare a JS variable, titled message.
var message;
// b) Assign “Hello World” to variable message 
var message = "Hello World!";
// c) Display the message in alert box. 
alert(message); 

// Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
var name,age,course_enrolled;
name = "S M AALIM HUSSAIN";
age = 21;
course_enrolled = "Certified Mobile Application Development";
alert(name);
alert(age + " years old");
alert(course_enrolled);

// Write a script to display the following alert using one JS variable: 
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);

// Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). 
// Show the below mentioned message in an alert box.(Hint: use string concatenation) 
var email;
email = "aalimh625@gmail.com";
alert("My email address is " + email);

// Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
// Display the following message in an alert box: 
var book;
book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// Write a script to display this in browser through JS 
document.write("Yah! I can write HTML content through JavaScript <br><br>");

// Store following string in a variable and show in alert and browser through JS 
var art = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(art);
document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ <br><br>");


// ------------Chapter3----------


// Declare a variable called age & assign to it your age. Show your age in an alert box. 
var age;
var age = 21;
alert("I am " + age + " years old");

// Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
// Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
var visit=14;
alert("You have visited this site "+visit+" times");

// Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
var birthYear;
var birthYear = 1999;
document.write("My birth year is "+ birthYear +"<br>"+"Data type of my declared variable is number <br><br>");

// A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: 
// a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: 
// “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
var visitorname = "Ali Raza";
var producttitle = "T-shirts";
var quantity = 5;
quantity = quantity.toString();
document.write(visitorname.bold() + " ordered " + quantity.bold() + " " + producttitle.bold() + " on XYZ Clothing Store <br><br>"); 


// ------------Chapter4----------


// Declare 3 variables in one statement. 
var name, age, country;

//  Declare 5 legal & 5 illegal variable names. 
var name, age, country, zip, year;
// var 1name, hg&, nospace, alert, #fat;

// Display this in your browser a)  A heading stating “Rules for naming JS variables” 
// b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
// d) Variable names are case _________ e) Variable names should not be JS _________ 
document.write("Rules for naming JS variables".bold() + "<br>" + "<br>" + "<br>");
document.write("Variable names can only contain letters, numbers, $ and __.For example: $my_1stVariable" + "<br>");
document.write("Variables must begin with a letter, $ or___. For example: $name, _name or name." + "<br>");
document.write("Variable names are case sensitive." + "<br>");
document.write("Variable names should not be JS keywords.<br>");


// ------------Chapter5----------


// Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
var x = prompt("Enter any number");
var y = prompt("Enter any number");
x = Number(x);
y = Number(y);
var z = x + y;
var res = "Sum of " + x + " and " + y + " is: " + z;
document.write(res.bold()+ "<br><br>");

// Repeat task1 for subtraction, multiplication, division & modulus. 
var x = prompt("Enter any number");
var y = prompt("Enter any number");
x = Number(x);
y = Number(y);
var a = x - y;
var res1 = "Difference of " + x + " and " + y + " is: " + a;
document.write(res1.bold() + "<br>");
var b = x * y;
var res2 = "Product of " + x + " and " + y + " is: " + b;
document.write(res2.bold() + "<br>");
var c = x / y;
var res3 = "Quotient of " + x + " by " + y + " is: " + c;
document.write(res3.bold() + "<br>");
var d = x % y;
var res4 = "Remainder of " + x + " divided by " + y + " is: " + d;
document.write(res4.bold()+ "<br><br>");

// Do the following using JS Mathematic Expressions a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”. 
var x;
document.write("Value after variable declaration is: " + x + "<br>");
x = 5;
document.write("Initial value: " + x + "<br>");
x += 1;
document.write("Value after increment is: " + x + "<br>");
x += 7;
document.write("Value after addition is: " + x + "<br>");
x -= 1;
document.write("Value after decrement is: " + x + "<br>");
x = x % 3;
document.write("The remainder is: " + x + "<br><br>"); 

// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & 
// calculate the cost of buying 5 tickets to a movie. Example output: 
var cost=600;
var total=cost*5;
document.write("Total cost to buy 5 tickets to a movie is "+total +"PKR" + "<br><br>");

// Write a script to display multiplication table of any number in your browser. E.g 
var i = 7;
document.write("TABLE OF 7:"+ "<br>");
document.write(i + " X 1 = " + i*1 + "<br>");
document.write(i + " X 2 = " + i*2 + "<br>");
document.write(i + " X 3 = " + i*3 + "<br>");
document.write(i + " X 4 = " + i*4 + "<br>");
document.write(i + " X 5 = " + i*5 + "<br>");
document.write(i + " X 6 = " + i*6 + "<br>");
document.write(i + " X 7 = " + i*7 + "<br>");
document.write(i + " X 8 = " + i*8 + "<br>");
document.write(i + " X 9 = " + i*9 + "<br>");
document.write(i + " X 10 = " + i*10 + "<br><br>");

//  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. 
var c=70;
var f=172;
document.write("25 C is "+((f-32)*(5/9))+"F" + "<br>");
document.write("70 F is "+((c-32)*(5/9))+" C" + "<br><br>");

// Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 e. Shipping charges. Compute the total cost & show the receipt in your browser. 
var a=650;
var b=a*3;
var c=100;
var d=100*7;
var e=100;
var total=b+d+e;
document.write("Shopping Cart:".bold() + "<br><br><br><br>");
document.write("Price of item 1 is "+a + "<br>");
document.write("Quantity of item 1 is 3 <br>");
document.write("Price of item 2 is "+c + "<br>");
document.write("Quantity of item 2 is 7 <br>");
document.write("Shipping charges "+e + "<br><br>");
document.write("Total cost of your order is "+total + "<br><br><br>");

// Store total marks & marks obtained by a student in 2 variables.Compute the percentage & show the result in your browser 
var marksobtained  = 804;
var totalmarks = 980;
percentage = (marksobtained  / totalmarks) * 100;
document.write("Marks Sheet:".bold() + "<br><br><br><br>");
document.write("Total Marks: " + totalmarks + "<br>");
document.write("Marks Obtained: " + marksobtained  + "<br>");
document.write("Percentage: " + percentage + "% <br><br>");

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 
// 1 Saudi Riyal = 28 Pakistani Rupee) 
var oneUSDollar = 104.80;
var oneSaudiRiyal = 28;
var totalCurrencyPKR = ((oneUSDollar*10) + (oneSaudiRiyal*25));
document.write("Total Currency in PKR: " + totalCurrencyPKR + "<br><br>");

// Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression 
var x = 5;
var op = (((x + 5)*10)/2);
document.write("Result: " + op+ "<br><br>");

// The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. 
// b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”. 
var currentYear = 2020;
var birthYear = 1999;
document.write("Age Calculator".bold() + "<br><br><br>");
document.write("Current Year: " + currentYear + "</br>Birth Year: " + birthYear + "</br> Your age is : " + (currentYear - birthYear)+ "<br><br>");

// The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. b. 
// Calculate the circumference based on the radius, and output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, 
// and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
var r = 20;
var pi = 3.14;
var circumference = 2*pi*r;
document.write("The Geometrizer".bold() + "<br><br><br>");
document.write("Radius of a circle: " + r + "</br>The Circumference is: " + circumference + "<br>");
document.write("The area is: " + pi*r*r + "<br><br>");

// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable b. Store your current age into a variable. 
// c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. Output the result to the screen 
// like so: “You will need NNNN to last you until the ripe old age of NN”. 
var favouriteSnack = "Chocolate Chip";
var currentAge = 21;
var estimateMaxAge = 65;
var snackPerDay = 3;
document.write("The Lifetime Supply Calculator".bold() + "<br><br><br>");
document.write("Favourite Snack: " + favouriteSnack + "</br> Current Age: " + currentAge + "</br>Estimated Maximum Age: " + estimateMaxAge + "</br> Amount of snacks per day" + snackPerDay + "</br>");
document.write("You will need " +((snackPerDay * 365) * (estimateMaxAge - currentAge)) + " " + favouriteSnack + " to last you until the ripe old age of " + estimateMaxAge+ "</br></br>") ;


// ------------Chapter6-9----------


// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 
var a = 10;
document.write("Result:" + "<br>");
document.write("The value of a is " + a + "<br><br>");
document.write("-----------------------------" + "<br><br>");
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now The value of a is: " + a + "<br><br><br>");
document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now The value of a is: " + a + "<br><br><br>");
document.write("The value of --a is: " + --a + "<br>");
document.write("Now The value of a is: " + a + "<br><br><br>");
document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now The value of a is: " + a + "<br><br>"); 

//What will be the output in variables a, b & result after execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 
// --a; 
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--; 
var a = 2;
var b = 1;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br><br>");
var resz = --a - --b + ++b +b--;
document.write("result is  "+ resz + "<br><br>");

// Write a program that takes input a name from user & greet the user. 
var n = prompt("What is your name?");
alert("Hello! Welcome to our WebSite " + n);

// Write a program to take input a number from user & display it’s multiplication table on your browser. 
// If user does not enter a new number, multiplication table of 5 should be displayed by default. 
var tableOf = +prompt("Enter a Number to print its table");
   if(tableOf == ""){ 
    document.write("<b>Table of 5 </b></br></br>")
    for(var i = 1; i<=10; i++){
        document.write("5 x " + i + " = " + 5*i + "</br></br>");
    }
}
else{
    document.write("<b>Table of" + tableOf + " </b> </br></br>")
    for(var i = 1; i<=10; i++){
        document.write(tableOf +" x " + i + " = " + tableOf*i + "</br></br>");
    }
}

// Take a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 
var a=prompt("subject no 1","enter subject name");
var b=prompt("subject no 2","enter subject name");
var c=prompt("subject no 3","enter subject name");
var total=100+100+100;
var d=100;
var e=+prompt("enter obtained marks of subject "+a);
var f=+prompt("enter obtained marks of subject "+b);
var g=+prompt("enter obtained marks of subject "+c);
var obtained=e+f+g;
var per=obtained/total*100;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+a+"</td><td>"+d+"</td><td>"+e+"</td><td>"+e+"</td></tr><tr><td>"+b+"</td><td>"+d+"</td><td>"+f+"</td><td>"+f+"</td></tr><tr><td>"+c+"</td><td>"+d+"</td><td>"+g+"</td><td>"+g+"</td></tr><tr><td></td><td><b>"+total+"</b></td><td><b>"+obtained+"</b></td><td><b>"+per+"</b></td></b></tr></table>");
document.write("</br></br>");


// ------------Chapter9-11----------


// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights” 
var city = prompt("Enter city name");
if(city === 'karachi'){
    alert("Welcome to city of lights");
}
else{
    alert("Welcome to " + city);
}

// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am. 
var gender = prompt("Enter your gender");
if(gender === 'male'){
    alert("Good Morning Sir");
}
else if(gender === 'female'){
    alert("Good Morning Ma'am");
}
else{
    alert("Please enter correct gender.");
}

// Write a program to take input color of road traffic signal from the user & show the message according to this table: 
var color = prompt("Enter color of road traffic signal");
if(color === 'red'){
    alert("Must Stop");
}
else if(color === 'yellow'){
    alert("Ready to move");
}
else if(color === 'green'){
    alert("Move now");
}
else{
    alert("Please enter correct color name");
}

// Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car” 
var remainingfuel = +prompt("Enter remaining fuel in car(in litres)");
if(remainingfuel < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("Don't need to refill the fuel");
}

// Run this script, & check whether alert message would be displayed or not. Record the outputs. 
// a. var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }
// b. var b = 82; if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 
// c. var c = 12; if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } if (++c < 14){ 
// alert("condition 3 is true"); 
// } if(c === 14){ 
// alert("condition 4 is true"); 
// } 
// d. var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
// e. if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }
// f. if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// } 

// a
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true");
 } 
 //Answer - given condition for variable a is true

 //b
 var b = 82; 
 if (b++ === 83){
      alert("given condition for variable b is true"); 
    } 
 //Answer - no answer - condition false

 //c
 var c = 12;
if (c++ === 13){
       alert("condition 1 is true");
     } 
if (c === 13){
       alert("condition 2 is true");
     }
if (++c < 14){
       alert("condition 3 is true");
     } 
if(c === 14){ 
       alert("condition 4 is true");
     } 
//Answer - condition 2 is true , condition 4 is true

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
      alert("The cost equals");
     } 
//Answer -  The cost equals

//e
if (true){
     alert("True"); } 
if (false){
     alert("False"); 
    } 
//Answer - True 

// f
if("car" < "cat"){
     alert("car is smaller than cat"); } 
//Answer - car is smaller than cat 

// Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute grade as per following table: 
// Show the total marks, marks obtained, percentage, grade & remarks like: 
var marksobtined = +prompt("Enter Marks obtained in 3 Subjects");
var totalmarks = +prompt("Enter total marks of 3 subjects");
var percentage = (marksobtined/totalmarks)*100;
document.write("<h1><b>Marks Sheet</b></h1> </br> </br> </br>");
document.write("Total Marks: " + totalmarks + "</br> Marks obtained: " + marksobtined + "<br> Percentage: " + percentage + "<br>");
if(per >= 80){
    document.write("Grade: A-1 </br> Remarks: Excellent <br><br>" );
}
else if(per >= 70){
    document.write("Grade: A </br> Remarks: Good <br><br>" );
}
else if(per >= 60){
    document.write("Grade: B </br> Remarks: You need to improve <br><br>" );
}
else if(per < 60){
    document.write("Grade: Fail </br> Remarks: Sorry <br><br>" );
}

// Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, 
// show “Close enough to the correct answer”. 
var a=7;
var b=+prompt("Enter number 1 to 10");
if(a===b){
    document.write("Bingo! ,Correct answer <br><br>");
}
else if(b===8){
    document.write("Close enough to the correct answer <br><br>");
}
else{
    document.write("Wrong answer <br><br>");
}

// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is 
// divisible by 3. 
var num1 =3;
var num2 = +prompt("Enter a number");
if(num2%num1 === 0){
    alert(num2 + " is divisble by " + num1);
}
else{
    alert(num2 + " is not divisible by " + num1);
}

// Write a program that checks whether the given input is an even number or an odd number. 
var inputnum = +prompt("Enter a number");
if(inputnum%2 === 0){
    alert("The number is EVEN");
}
else{
    alert("The number is ODD");
}

// Write a program that takes temperature as input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.” 
var T = +prompt("Enter your city's tempreture");
if(T > 40){
    alert("It is too hot outside.");
}
else if(T > 30){
    alert("The Weather today is Normal.");
}
else if(T > 20){
    alert("Today’s Weather is cool.");
}
else if(T > 10){
    alert("OMG! Today’s weather is so Cool.");
}
else{
    alert("Enter correct Weather.");
}

// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) Compute & show the calculated result to user. 
var firstnumber = +prompt("Enter First Number");
var secondnumber = +prompt("Enter Second Number");
var operator = prompt("Enter an operator(+,-,*,/,%) ");
if(operator == '+'){
    alert("Result is: "+ firstnumber+secondnumber);
}
else if(operator == '-'){
    alert("Result is: "+ firstnumber-secondnumber);
}
else if(operator == '*'){
    alert("Result is: "+ firstnumber*secondnumber);
}
else if(operator == '/'){
    alert("Result is: "+ firstnumber/secondnumber);
}
else if(operator == '%'){
    alert("Result is: "+ firstnumber%secondnumber);
}
else{
    alert("Please enter correct operator.");
}


// ------------Chapter12-13----------


// Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, 
// uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 
var a=prompt("Check alphabet in assci 65 to 90 and 97 to 122 ");
var alpha=['a','b'];
if (a>=65 && a<=90){
    document.write("upper case letter <br><br>");
}
else if (a>=97 && a<=122){
    document.write("lower case letter <br><br>");
}
else{
    document.write("Invalid Letter <br><br>")
}

// Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
if(num1 > num2){
    alert(num1 + " is larger than " + num2);
}
else if(num2 > num1){
    alert(num2 + " is larger than " + num1);
}
else{
    alert("Both numbers are equal");
}

// Write a program that takes input a number from user & state whether the number is positive, negative or zero. 
var x = +prompt("Enter any number");
if(x > 0){
    alert("The number is POSITIVE");
}
else if(x < 0){
    alert("The number is NEGATIVE");
}
else{
    alert("The number is ZERO");
}

// Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 
var z = prompt("Enter any charcter");
if(z === 'a' || z === 'e' || z === 'i' || z === 'o' || z === 'u'){
    alert("True");
}
else{
    alert("False");
}

// Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the 
// original password”. Show “Incorrect password” otherwise. 
var a="12345678";
var b=+prompt("enter  password");
if(b === ""){
    alert("Please enter your password");
}
else if (a === b){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}

// This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else greeting = "Good evening"; }
var greeting;
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
}
else {
    greeting = "Good evening"; 
}

// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
// Implement the following case using if, else & else if statements 
var b=+prompt("enter hour in 24 format");
if (b===13){
alert(b+"=  1")
}
else if (b===14){
alert(b+"=  2")
}
else if (b===15){
alert(b+"=  3")
}
else if (b===16){
alert(b+"=  4")
}
else if (b===17){
alert(b+"=  5")
}
else if (b===18){
alert(b+" =  6")
}
else if (b===19){
alert(b+" =  7")
}
else if (b===20){
alert(b+" =  8")
}
else if (b===21){
alert(b+" =  9")
}
else if (b===22){
alert(b+" =  10")
}
else if (b===23){
alert(b+" =  11")
}
else if (b===24){
alert(b+" =  12")
}
else{
alert(b+" =  "+b)
}


// ------------Chapter14-16----------


// Declare an empty array using JS literal notation to store student names in future.
var student_names = [];

// Declare an empty array using JS object notation to store student names in future. 
var student_names = new Array();

// Declare and initialize a strings array. 
var student_names = ["Ali", "Asad", "Umer", "Saad", "Taha"];
document.write(student_names + "<br><br>");

// Declare and initialize a numbers array. 
var numbers = [1, 2, 3, 4, 5];
document.write(numbers + "<br><br>");

// Declare and initialize a boolean array. 
var boolean = [true, false, false, false, true];
document.write(boolean + "<br><br>");

// Declare and initialize a mixed array. 
var mixed = ["Asad", false, 1999, "Aalim", true, 21];
document.write(mixed + "<br><br>");

// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, 
// BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like: 
var education_qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("Qaulifications:".bold() + "<br><br>");
document.write("1) " + education_qualifications[0] + "<br>");
document.write("2) " + education_qualifications[1] + "<br>");
document.write("3) " + education_qualifications[2] + "<br>");
document.write("4) " + education_qualifications[3] + "<br>");
document.write("5) " + education_qualifications[4] + "<br>");
document.write("6) " + education_qualifications[5] + "<br>");
document.write("7) " + education_qualifications[6] + "<br>");
document.write("8) " + education_qualifications[7] + "<br><br>");

// Write a program to store 3 student names in an array.Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like: 
var student_names = ["Ali", "Asad", "Umer"];
var score = [320,230,480];
for(var i = 0; i < student_names.length; i++)
{
    document.write("Score of " + student_names[i] + " is " + score[i] + ". Percentage: " + (score[i]/500)*100 + " % </br>" );
    document.write("<br>");
}

// Initialize an array with color names. Display the array elements in your browser. 
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display 
// the updated array in your browser. 
// c. Add two more color to the beginning of the array. Display the updated array in your browser. 
// d. Delete the first color in the array. Display the updated array in your browser. 
// e. Delete the last color in the array. Display the updated array in your browser. 
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . 
// Display the updated array in your browser. 
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove 
// the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 
var colors = ['red','yellow','green'];
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}
//a
var userInput = prompt("Enter the color at the begining of a list");
colors.unshift(userInput);
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}
//b
colors.push(userInput);
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}
//c
colors.unshift('black','grey','white');
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}
//d
colors.shift();
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}
//e
colors.pop();
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}
//f
var colorIndex = +prompt("Enter the color index number where you want to add a color");
var colorName = prompt("Enter color name");
colors.splice(colorIndex,0,colorName);
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}
//g
var colorIndex = +prompt("Enter the color index number where you want to delete a color");
var howMany = +prompt("How many colors you want to delete");
colors.splice(colorIndex,howMany);
for(var i = 0; i<colors.length; i++){
    document.write(i+1 +") "+ colors[i] + "</br>");
}
document.write("<br>");

// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
var studentScores = [320,230,480,120];
document.write("Scores of Students : ")
for(var i = 0; i<studentScores.length; i++){
        document.write(studentScores[i] + ",");
    }
document.write("</br>Ordered Scores of Students : ");
studentScores.sort();
for(var i = 0; i<studentScores.length; i++){
    document.write(studentScores[i] + ",");
}
document.write("<br>");

// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
var cities = ['Karachi','Lahore','Islamabad','Peshawar','Rawalpindi'];
document.write("Cities List: </br>" + cities);
var slectedCities = cities.slice(2,4) ;  
document.write("</br></br>Selected Cities List: </br>" + slectedCities + "</br></br>");

// Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method) 
var arr = ['This', 'is', ' my',  'cat'];
document.write("Array: <br>" + arr);
var strJoin = arr.join(" ");
document.write("</br></br>String</br>" +strJoin);
document.write("<br>");

// Create a new array. Store values one by one in such a way that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out) 
var devices = ['keyboard','mouse','printer','monitor'];
document.write("Devices: </br>" + devices + "</br>");
for(var i = 0; i<4; i++){
    var queue = devices.shift();
    document.write("</br>Out: <br>" + queue);
}
document.write("<br>");

// Create a new array. Store values one by one in such a way that you can access the values in reverse order. 
// (Last InFirst Out) 
var devices = ['keyboard','mouse','printer','monitor'];
document.write("Devices: </br>" + devices + "</br>");
for(var i = 0; i<4; i++){
    var stack = devices.pop();
    document.write("</br>Out: <br>" + stack);
}

// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display 
// the following dropdown/select menu in your browser using document.write() method: 
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var index = 0;
document.write("<select>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("</select>");
document.write("<br>");


// ------------Chapter17-20----------


// Declare and initialize an empty multidimensional array. (Array of arrays)
var arr = [];

// Declare and initialize a multidimensional array representing the following matrix: 
var num = new Array();
num.push([0, 1, 2, 3]);
num.push([1, 0, 1, 2]);
num.push([2, 1, 0, 1]);
for (var i = 0; i < num.length; i++) 
{
  document.write(num[i] + "<br>");
}
document.write("<br>");

// Write a program to print numeric counting from 1 to 10.
for(var i = 1; i <= 10; i++){
    document.write(i + "<br>");
}
document.write("<br>");

// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as 
// an input from user.
var multiplicationtable = +prompt("Enter any number");
var len = +prompt("Enter length of multiplication table");
document.write("Multiplication table of " + multiplicationtable + "</br>")
document.write("Length " + len + "</br></br>")
for(var i = 1; i <= len; i++){
    document.write(multiplicationtable + " x " + i + " = " + multiplicationtable*i + "</br>");
}
document.write("<br>");

// Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”] 
var fruits = ['apple', 'banana', 'mango', 'orange',' strawberry'] ;
for(var i = 0; i< fruits.length; i++){
    document.write(fruits[i] + "</br>");
}
document.write("<br>");

// Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
var counting = [1,2,3,4,5,6,8,9,10,11,12,13,14,15];
var reverseCounting = [10,9,8,7,6,5,4,3,2,1];
var even = [0,2,4,6,8,10,12,14,16,18,20];
var odd = [1,3,5,7,9,11,13,15,17,19];
var series = ['2k','4k','6k','8k','10k','12k','14k','16k','18k','20k'];
document.write("<b>Counting:</b> </br></br>" + counting + "</br></br><b>Reverse Counting:</b> </br></br>" + reverseCounting + "</br></br><b>Even:</b> </br></br>" + even + "</br></br><b>Odd:</b> </br></br>" + odd + "</br></br><b>Series:</b> </br></br>" + series);
document.write("<br>");

// You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user 
// input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
if(A.indexOf(userInput) === -1){
    document.write("We are sorry. " + userInput + " is <b>not Available</b> in our Bakery");
}
else{
    document.write(userInput + " is <b>Available</b> at index " + A.indexOf(userInput) + " in our bakery");
}
document.write("<br>");

// Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
var A = [24, 53, 78, 91, 12]; 
document.write("Array items: " + A + "<br>");
document.write("The largest number is: " + Math.max(...A) + "<br><br>");

// Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
var A = [24, 53, 78, 91, 12];
document.write("Array Items: " + A + "<br>");
document.write("The smallest number is: " + Math.min(...A) + "<br><br>");

// Write a program to print multiples of 5 ranging 1 to 100. 
for(var i = 5; i<= 100; i+=5){
    document.write(i + ", ");
}