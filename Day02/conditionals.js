function toggleFlashlight(flashlight) {
    if (flashlight.isOn == true) {
        flashlight.isOn = false;
    }
    else {
        flashlight.isOn = true;
    }
}

if (condition) {    
        // what to do if condition is true
    }
    else if (2nd condition) { // can have 0 to many of these statements    
        // what to do if 2nd condition is true
    }
    else {  // can have 0 or 1 of these statements    
        // what to do if none of the previous conditions are met
    }
    


var num1 = 20;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
} else {
    num1 = num1 / num2;
    if (num1 < num2){
        num1 = num1 * 2;
    } else if (num1 == num2){
        num2 = num1 * num2;
    } else {
        num2 = num2 * 2;
    }
}
console.log(num1);
console.log(num2);
