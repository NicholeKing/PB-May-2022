// Looping in code

// Real examples of looping
// Counting
// Going through a grocery list

// Starting point
var count = 1;
// I want to keep counting until I hit 10

// Breaking condition - end point: count until we reach 10
// go until count == 10
// go while count is less than 10
while(count <= 10) {
    // What happens on each iteration? - Count goes up by 1 for each increment
    console.log(count);
    count = count + 1;
}
console.log("Out of the while loop");
console.log(count);

// Loop method 2
// We need: a starting point, a break condition, and an incrementer
for(var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Out of the for loop");
console.log(i);

// If they do the same thing, why do we care to know them both?
// Break conditions that it is unclear when we stop

// console.log(Math.floor(Math.random() * 6) + 1);
console.log("*******************");

var dice = Math.floor(Math.random() * 6 + 1);
while(dice != 3) {
    console.log(dice);
    dice = Math.ceil(Math.random() * 6);
}
console.log("I found a 3!", dice);

for(var j = 0; j < 5; j=j+2){
    console.log(j);
}

console.log(j); // 6

for(var k = 7; k > 2; k--) {
    console.log(k);
}

var l = 3;
while(l != 12) {
    console.log(l);
    l = l * 2;
}

var o = 10;
while(o < 120) {
    console.log(o);
    o = o * 4 / 2;
}