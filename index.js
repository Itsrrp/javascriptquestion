
// callback function
function printTable(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
}
function message(n) {
    console.log(`${n} is not a number.`);
}

// function declaration
function multiply(n) {
    return n * 2;
}
multiply(5);

// function expression
const multiplication = function (n) {
    return n * 2;
}
multiplication(12);

// arrow function
const multiply = (n) => n * 2;

// if my execution has more than one line then I need to use {} and `return` in arrow function as well.
const multiply = (n) => {
    if (typeof n === "number") {
       return n * 2;
    } else {
        console.log(`${n} is not a number`);
    }
}

// create multiply function using ternary operator
const multiply = (n) => typeof n === "number" ? n * 2 : console.log(`${n} is not a number`);
multiply(2);

// logical operaters
   // or
   let firstName = "";
   let secondName = "";
   let thirdName = "supercoder";
   function showName() {
     console.log(firstName || secondName || thirdName);
   }
   showName();

   //and
   let aditya=11;
   let sachin=30;
   if (aditya=== 11 && sachin=== 30) {
       console.log("time is 11:30");
   }

   //nulish coalescing opearter
   let firstName=null;
   let secondName=null;
   let lastName="aditya";
   console.log(firstName ?? secondName ?? lastName ?? "aditya");

   //coparison in || and ??
   let compare=0;
   console.log(compare||100);
   console.log(compare??100);

   let height=null;
   let width=null;
   let area=(height??20)*(width??50);
   console.log(area);

   //loops
      //while loop
      let a=5;
      while(a<8){
          console.log(a);
          a++;
      }

//addition
function sum(a, b){
    console.log(a+b);
}
sum(3, 5);

//substration
function substrat(a, b){
    console.log(a-b);
}
substrat(3, 5);

//multiplication
function multiply(a, b){
    console.log(a*b);
}
multiply(3, 5);

//division
function division(a, b){
    console.log(a/b);
}
division(4, 2);

//square
function square(a){
    console.log(a**2);
}
square(4);

//cube
function cube(a){
    console.log(a**3);
}
cube(5);

//table method1 
    function table(a){
        if (typeof a==="number") {
            for(let i=1; i<=10; i++){
                console.log(a*i);
            }
        } else {
            console.log(`${a} is not number`)
        }   
    }
    table(15);

//table method2 arrowfunction
function printTable(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
}
const createTable = (n) => typeof n === "number" ? printTable(n) : console.log(`${n} is not a number`);
createTable(5);  

//count method1
function count(a, b){
    if (typeof a==="number" || typeof b==="number") {
        for(; a<=b;){
            console.log(a++);
        }
    } else {
        console.log(`${a} is not number`,`${b} is not number`);
    }   
} 

//count method2
function count(a, b){
    if (typeof a==="number",typeof b==="number") {
        for(let i=a; i<=b; i++){
            console.log(i);
        }
    } else {
        console.log(`${a} is not number`,`${b} is not number`);
    }   
}
