// var temp = "Hello";
// // This is a note
// // This is an example of syntax highlighting
// function example() {
//     if (1 == 1) {
//         console.log(1);
//     }
// }


// Number
var number = 5;
// Step one: var to declare
// Step two: name the variable
// Step three: give it an equal sign
// Step four: assign it a value

// String (Words)
var word = "Hello";

// Boolean
// True / false
// Yes / No
// On / Off
// 1 / 0
var boolVariable = false;

// Good sites for testing code: 
// JSBin: https://jsbin.com/nonozumiga/edit?js,console
// Python Tutor: https://pythontutor.com/visualize.html#mode=edit

var x = 5;
var y = 9;
console.log(x + y);

var z;
// This gives us undefined because we made the variable but it has no value
console.log(z);
// Now we assigned a value
z = 7;
// Now this gives us 7 because we assigned a value
console.log(z);

// With z = 7 commented out, this gives us NaN (Not a Number)
// This is because we can't add a number and undefined
console.log(z+x);

// We assign z to be null, agreeing that we have a cubby space for our variable, but we explicitly want it to store an empty value
z = null;
// This gives us back 5 because null is NOT the same as undefined, it is like adding "nothing" to your values, giving us back the original 5
console.log(z+x);

// The major difference between null and undefined is that null is explicitly used to tell our code we want something to be stored in our variable, but that something is nothing. Whereas undefined is the default "empty" given to variables that never receive a definition. 
// Undefined is prone to causing errors in your code when used improperly whereas null is treated like a proper variable and less prone to throwing errors
