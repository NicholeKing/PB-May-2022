// Arrays
// Arrays are sets of data
// We can have as much data in these arrays as we want
// You are not limited to what data types go into arrays

// All arrays start at index 0 
// All arrays end at length - 1
// Getting a length gives us the number of values in the array
// But remember that the length is 1 out of bounds of the actual index numbers

// If we want to add we use push (adds to the back)
// If we want to remove we use pop (removes from the back)

// If I want to call on a value at a particular index I call the name of the array then [index#] to call the value at that index

var groceryList = ["milk", "bread", "eggs", "chocolate", "carrots"];

// Console log the whole array
console.log(groceryList);
// Show just the first item
console.log(groceryList[0]);
// Show the LAST item
console.log(groceryList[groceryList.length - 1]);
// Show the middle value
var middle = Math.floor(groceryList.length / 2)
console.log(groceryList[middle]);

// Add an item
groceryList.push("lettuce");
console.log(groceryList);
console.log(groceryList[groceryList.length - 1]);

// Remove an item
// ALWAYS removes from the back
// So we don't pass anything in
groceryList.pop();
console.log(groceryList);
console.log(groceryList[groceryList.length - 1]);

// Loop through some lists
for(var i = 0; i < groceryList.length; i++) {
    // Print the value
    console.log(groceryList[i]);
}

var numbers = [2,-6,1,67,-3,90];

function doubleArray(arr){
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            arr[i] = arr[i] * 2;
        } else {
            arr[i] = arr[i] * -1;
        }
    }
    console.log(arr);
}
doubleArray(numbers);
doubleArray(numbers);
doubleArray([3,-1,4,-5]);