
//       (Assigment 31_34)

// 1. Write a program that displays current date and time in 
// your browser.

// ans:

// var tarekh = new Date();
// document.write(tarekh)
    // 'done'
//     2. Write a program that alerts the current month in words. 
// For example December?
// ans:

// const month = ["January","February","March","April","May",
// "June","July","August","September","October","November","December"];
// const d = new Date();
// let iss = month[d.getMonth(8)];
// document.write('Current'+''+ 'Month'+':'+iss)
//       [done!]


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.
// Answer:
//      var currentDay = new Date();
//     currentDay.toString;
//     var c = currentDay.toString();
//     var e = c.slice(0,3);
// var day = e.slice(0,1);
//  day = day.toUpperCase();
// var othddat =  e.slice (1);
//  othddat = othddat.toLowerCase();
//  var fainal = (day+othddat )

//     document.write("Today is " +fainal);
//       complet!

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today?
//   answer:
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write()
// }else if(c === "Tue"){
//     document.write()
// }else if(c === "Wed"){
//     document.write('no fond')
// }else if(c === "Thr"){
//     document.write()
// }else if(c === "Fri"){
//     document.write()
// }

//                 donne!
// q5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”?
// answer:
// var current_date = new Date();
// var mnth = current_date.getMonth();
// var Days = current_date.getDay();
// (( current_date.getMonth()+1)>=10)
// ( current_date.getMonth()+1);+ current_date.getMonth()+1);
//      if( i === 15)
//   document.write('Last days of the month')
//     }else{
//         ('not fund')
//     }
// var current_date = new Date();
// month_value = current_date.getMonth();
// day_value = current_date.getDate();
// for (var i =0;i<=day_value.length;i++){
//     document.write(day_value[i])
// }

// // var fruits = ['apple','banana','mango','orange','strawberry']
//  for(var i =0;i<=fruits.length;i++){
//  console.log(fruits[i])}
 
// for (i = 0,i<= 15,i++){
//   if (i === 15){
//     alert('last days of the mont')
//   }
// }
// document.write("The current date is " + months[month_value] + " " +
//   day_value + ", " + year_value);


// var d = new Date();
// var mnth = d.getUTCMonth();

// var  mnth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var d = new Date()
// var mnth = mnth[d.getUTCMonth()];
// document.write(d)

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object?
// ans:
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)
//  DONE!
// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”?
// ANS:var hours24 = new Date().getHours(); // retrieve current hours (in 24 mode)
// var dayMode = hours24 < 12 ? "am" : "pm"; // if it's less than 12 then "am"
// var hours12 = hours24 <= 12 ? (hours24 == 0 ? 12 : hours24) : hours24 - 12;
// // "0" in 24-mode now becames "12 am" in 12-mode
// if(dayMode){
//     alert('Its Am')
// }
// document.write(hours12 + " " + dayMode); // printing out the result of code
// don!
// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.?
// ans:
// d = new Date(); d.setFullYear(2020, 12, 0);
// document.write('laterDate'+''+d)
// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015?
// ans:

// To set two dates to two variables

// var date1 = new Date("01/05/2023");
// var date2 = new Date("05/18/2015");
  
// // // To calculate the time difference of two dates
// var Difference_In_Time = date2.getTime() - date1.getTime();
  
// // To calculate the no. of days between two dates
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  
// //To display the final no. of days (result)
// document.write(Difference_In_Days+ ' '+ 'days have passedd since 1st Ramadan');
  

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015?
// ans:

// var date1 = new Date();
//  var date2 = new Date("01/01/2015");

// var Difference_In_Time = date2.getSeconds() - date1.getSeconds();
// not don
// Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser?
// ans:


// const date = new Date();
// const date2 = new Date();

// const numOfHours = 1;
// date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
// document.write(date2+'<br>')
// document.write(date+'<br>')

// done!
//11. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?
// ans:

// function subtractYears(numOfYears, date = new Date()) {
//     date.setFullYear(date.getFullYear() - numOfYears);
  
//     return date;
//   }
  
//   // 👇️ subtract 1 year from current Date
//   const result = subtractYears(100);
  
//   // 👇️ Subtract 2 years from another Date
//   const date = new Date();
  
//   // 👇️ Sun Apr 26 2020
// document.write(date+'<br>')
// document.write('100'+''+'years'+''+'back'+''+subtractYears(100, date));

// done!
// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser
// ans:

//  var userInp = prompt('enter yor birth date');
//  var todaydate = new Date();
//  var spacificdate = new Date(userInp)
//  var spacifictime=spacificdate.getTime()
//  var currentTime =todaydate.getTime()
//  var convermonth =(currentTime-spacifictime)
//  var finalDate=Math.round (convermonth/(1000*60*60*24*30*12))
//  document.write ('your'+' '+'date'+' '+'of'+' '+
//  'birth'+' '+'is'+' '+userInp+'<br>')
//  document.write ('your'+' '+'age'+' '+'is'+' '+finalDate)
//  done!
//14. Write a program to generate your K-Electric bill in your
// browser. all the num rounded off to 2 
// decimal places. Display the following fields?
// ans;
// var Customer_Name = ('isra_faisal')
// var n =new Date();
// var Current_Month =n.getMonth();
// var Number_of_units=(410);
// var Charges_per_unit=(16);
// var Net_Amount_Payable= (Number_of_units* Charges_per_unit)
// var Late_Payment_Surcharge=(350)
// var Late_Payment=(Net_Amount_Payable+Late_Payment_Surcharge)
// console.log('K'+' '+'ELECTRICBILL')
// console.log('customer'+' '+'name'+':'+Customer_Name)
// console.log('Month'+':'+' '+Current_Month);
// console.log('charges'+''+'per'+''+'unit:'+''+Charges_per_unit);
// console.log('Net'+''+ 'Amount'+''+ 'Payable'+''+'(within Due Date)'
// +''+ Math.round(Net_Amount_Payable))
// console.log('Gross'+''+ 'Amount'+''+ 'Payable'+''+'(after Due Date)'
// +''+Math.round(Late_Payment));
                // (FUNCTION=35-38)
// 1. Write a function that displays current date & time in your 
// browser
// ans:
// function timee(){
//     document.write(new Date)
//   }
// // timee()

// .2. Write a function that takes first & last name and then it 
// greets the user using his full name
// ANS:
// var firstname = prompt('enter your name');
//  var lastname = prompt('enter your last name');

// function yourdata(firstname, lastname) {

// var data =(firstname+lastname)
//     console.log(firstname+lastname)
//  }
//  yourdata(firstname, lastname)

// q3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers?

// 
// function numbr(num1,num2){
//   var num1 = +prompt('type youe num');
//   var num2 = +prompt('type youe second num');
//     var finalamount = num1+num2
//        console.log( 'The'+''+'sum'+''+'of'+''+'two'+''+'numbres'+''+
//         'are'+''+ finalamount)
//     }
//   numbr();
// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser?
//  

// num1 = +prompt('entr your first valu')
// oprtr = prompt('type your sign')
// num2 = +prompt('entr your secnd valu')
// function calc(num1,oprtr,num2){
// if (oprtr === '+'){
//     return num1 +num2

// }
//  else if (oprtr === '-'){
//     return num1 -num2
    
// }
// else if (oprtr === '/'){
//     return num1/num2
// }
// else if (oprtr === '*'){
//     return num1 *num2
    
// } else {
//     return 'not found'
// }
// }
// var rezlt = calc(num1,oprtr,num2);
// console.log(rezlt)
 
// done !
// 5. Write a function that squares its argument
// ans:
// function squareMyNumber(no){
//     return no ** 2
// }

// let squared = squareMyNumber(5);
// console.log(" 5 ** 2 = ",squared);
// 6:Write a function that computes factorial of a number
// num = prompt('entr your num')
// function factorialize(num) {

    
//     var result = num;
     
    
//     if (num === 0 || num === 1) 
//       return 1; 
   
    
//     while (num > 1) { 
//       num--; 
//       result = result * num; 
  
//     }
       
  
//     return result; 
//   }
//   factorialize(num);
//   var f =factorialize(num)
//   console.log(f)
// 7. Write a function that take start and end number as inputs 
// & display counting in your browser
// ans:
// let callCount = 0;

// // function sum(a, b) {
//   callCount += 1;

//   return a + b;
// }

// sum(1, 2);
// console.log(callCount); // 👉️ 1

// sum(1, 2);
// console.log(callCount); // 👉️ 2

// sum(1, 2);
// console.log(callCount); // 👉️ 3
           
       
//8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicula
// MediaStreamAudioSourceNode:
// ans:
// function getHypotenuseLength(a, b) { 
//   if (a && b && Number.isFinite(a) && Number.isFinite(b)) {  
//       return Math.sqrt((a * a) + (b * b)); 
//   } 
//   throw "Invalid numbers"; 
// } 

// getHypotenuseLength(5, 12) // 13 

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variable
// ans:

// function main()  
// {  
//    var width=5;  
//    var height=10;  
//    var area=width*height;  
//     console.log("Area of the rectangle",area);  
// }  
// main()
// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// // ans:


//function that print output is string is palindrome
// function is_palindrome( str )
// {
//  
//   let ans = check_palindrome(str);
//  
//   if( ans == true )
//   {
//     console.log("passed string is palindrome ");
//   }
//   else
//   {
//     console.log("passed string not a palindrome");
//   }
// }
// // test variable
// let test = "racecar";
// is_palindrome(test);
// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// strin 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Foxg in upper case.
// ans:
// program to convert first letter of a string to uppercase
// function capitalizeFirstLetter(string,uprt) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
   
//   }
  
//   console.log(capitalizeFirstLetter('isra is a student'));


// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development?
// ans:
// function findLongestWord(str) {
  
//     var strSplit = str.split(' ');
    
//     var longestWord = 0;
  
  
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){ 
//       longestWord = strSplit[i].length; 
//        }
//     }
    
//     return longestWord;
//   }
  
//   findLongestWord("The quick brown fox jumped over the lazy dog");
// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'
// ans:
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('w3resource.com', 'o'));

// q14:Create 2 functions that calculate properties of a circle, using 
// the definitions here
// function circle(radius)
// {
//     this.radius = radius;
//   // area method
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//   // perimeter method
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var c = new circle(3);
// console.log('Area =', c.area().toFixed(2));
// console.log('perimeter =', c.perimeter().toFixed(2));
       
                // changing cases


//q1. Write a program that takes user input. Convert and show the input
// in capital letters.
// ans
// let text = prompt("type your sentne");
// let result = text.toUpperCase();
// document.write(result)
// q2:2. Write a program that takes user input. Convert and show the
// input in title case.?
// ans: 
// function titleCase(string) {
//  var sentence = string.toLowerCase().split(" ");
//       for(var i = 0; i< sentence.length; i++){
//         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//      }
//   document.write(sentence.join("is "));
//   return sentence;
//   }
//   titleCase("tutorix is one of best e-platforms");
// 2. Write a program to display the last character of a user input.
// const str = 'abcde';


// const last = str.charAt(str.length - 1);
// console.log(last);
// Write a program to find the index of letter “n” in the word “Pakistani”
// and display the result in your browser.?
//  var a = ('Pakistani');
//   document.write('string'+ ': '+ a +'<br>')
//  document.write('index '+'of '+ 'n'+ ': '+a.indexOf('n'))

    
// 2. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among (@ . ,
// !), prompt the user to enter a valid username.?
// let t = prompt("type your sentne");
// if (t == '@'){
//     alert('enter a valid username')
// }
// else if (t == '.'){
//     alert('enter a valid username')
// }
// else if (t == ','){
//     alert('enter a valid username')
// }
// else if (t == '!'){
//     alert('enter a valid username')
// }
// 1. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.
// ans:

// var  txt= ('Hyderabad')
// var indexnum = txt.indexOf('Hyder')
// var d = txt.slice(0,indexnum)
// var replacetx = ('islam')
// var last = txt.slice(indexnum+5)
// console.log(d +replacetx+last)
// or
// var  txt= ('Hyderabad')
// var  txt2= txt.replace('Hyderabad','islamabad')
// console.log(txt2)

// 2.  Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.
// var  txt= ('iree ansnnd dksjvn and cnnv and and cnnv and')
// var  txt2= txt.replace(/and/g,'islamabad')
// console.log(txt2)

// Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


// var message = ('Ali Sami are best friends. They play cricket football together')
// var indexnum = message.replace('and')
//  console.log( indexnum)

// const string = 'Ali Sami are best friends. They play cricket football are together';


// const regex = /are/gi;

// const newText = string.replace(regex, 'and');

// console.log(newText);
// 1. Write a program that takes a positive integer from user & display
// the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// b)
// var a = 3.45214
// var round = Math.round(a)
// console.log(round)
// //   d)
//   var a = 3.45214
// var c = Math.ceil(a)
// console.log(c)
 // c)
// var a = 3.45214
// var c = Math.floor(a)
// console.log(c)
  
// 2. Write a program that takes a negative floating point number
// from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// b)ans
// var num =( -2.678 )
// var c = Math.floor(num)
//  console.log(c)
// c)ans
// var num =( -2.678 )
// var c = Math.ceil(num)
//  console.log(c)
// d)ans
// var num =( -2.678 )
//  var c = Math.floor(num)
//  console.log(c)
// Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.

// var n = Math.random();
//  var toss =Math.ceil(Math.random()*2+1);
//  console.log(toss);

// 2. Write a program that simulates a coin toss using random() method
// of JS Math class. Display

// var head = prompt('entr your value')
// var tail = prompt('entr your value')
//  var toss = Math.random()*2
//  var floor = Math.floor(toss)
//  if(floor == 0){
//     alert('hades '+ head+'win the toss')
//  }else{
//     ('tails'+tail+'win the toss')
//  }
// 3.Write a program that stores a random secret number from 1 to 10 in a
// variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.?
// ans:
// var userdata = prompt('enter your secret number here')
// var secretnum = (6)
// if(userdata== secretnum){
//     alert('congrx you win')
// }else {
//    alert ('losee')
// }
// 1. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be
// ans:

// var userdata = prompt('enter your weight')
// console.log (userdata.toString)
// 1. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// Hint: (use typeof())
// ans:
// var user = ('472');
// console.log(Math.floor(user));
// 2. Write a program that converts the variable num to string.
// var num = 35.36 ;
//to display “3536” display in your browser.
//ans:
// const num = 35.36;
// const without = num.toString().replace(".", ""); 
// console.log(without)
// 1. Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.66666666666666
//ans:
// var percentage = (30 / 45 * 100);
// var rounded = percentage.toFixed(1);
// console.log(rounded);


    //     fUNCTIONS| SWITCH | WHILE.. DO-WHILE
// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.
// function power( x,  y)
// {
// 	var num = 1, i;
// 	for (i = 1; i <= y; i++)
// 		num = num*x;
// 	return(num);
// }
// Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// function year(){
//     var a = prompt('enter your year')
//     if(a/400){
//         alert(' the year is a leap year')
//     }
//          else{ alert ('this is a leap year')}
// }
           
// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
//ans: 

// var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);
// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction
// Ans:
// function percentage(num, per)
// {

//   return (num/100)*per;
// }
          
// console.log(percentage(1000, 47.12));
// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.
// ans:
// function foo (){

// var str = ('sabaandeshakiu isra arif khana')
// var f = str.replace( /[aeiou]/ig, '' )
// return f
// }

// console.log(foo())

// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence

// function countVowel(str) { 

//     // find the count of vowels
//     const count = str.match(/[aeiou]/gi).length;
  

//     // return number of vowels
//     return count;
// }

// // take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);
