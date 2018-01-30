// Single Line Comment
/**
 *  Multi-Line Comment 
 */

// Variables
var name = "Robert";       // Old School JavaScript (Don't Use This)
const fruit = "Banana";    // Constant Binding (locked)
let veggie = "Carrot";     // Similar to var, but with differences*

console.log("Name: ", name);       // Print
console.log("Fruit: ", fruit);
console.log("Veggie: ", veggie);
console.log();

// Simple Data Types
 // Strings
const aString = "things and stuff";     // Camel Casing (can use single quotes)
const anotherString = "more stuff, less things";
const numericString = "123abc";
console.log("aString: ", aString);
console.log("anotherString: ", anotherString);
console.log("numericString: ", numericString);
console.log("What is the type of aString?: ", typeof aString);
console.log();

 // Numbers
const aNumber = 1;
const anotherNumber = 3.5;
console.log(aNumber, anotherNumber);
console.log("What is the type of aNumber?: ", typeof aNumber);
console.log("What is the type of anotherNumber?: ", typeof anotherNumber);
console.log();

 // Arrays
const anArray = [1, 2, 3, 4];
const aStringArray = ["Cheese", "Bacon", "Eggs"];
console.log("anArray: ", anArray);
console.log("aStringArray: ", aStringArray);
console.log("How many elements are in anArray?: ", anArray.length);
console.log("What is the type of anArray?: ", typeof anArray);
console.log();

 // Objects
 const anObject = {
     color: "red",    //key:value -> key is 'color' || value is 'red'
     size:500,         //keys are strings, but quotes are implied
     toppings: ["pepperoni", "cheese", "jalapenos"],
     radius:250
 };
 console.log("anObject: ", anObject);
 console.log();
 console.log("What is the type of anObject?: ", typeof anObject);
 console.log("What is the color of the object?: ", anObject.color);
 console.log("What are the toppings of the object?: ", anObject.toppings);
 console.log("What is the second topping of the object?: ", anObject.toppings[1]);
 console.log();

 // Booleans
const yes = true;
const no = false;