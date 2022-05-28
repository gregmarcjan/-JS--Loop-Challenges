// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum 
// and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. 
// We should get back 5050 at the end.

var sum = 0;
var increment = 1;

while (increment < 101) {
    sum = sum + increment;
    increment++;
    console.log(sum);
}