//Problem Statement: Given an integer N return the reverse of the given number.
//Input: N = 12345
// Output:54321
// Explanation: The reverse of 12345 is 54321.


// solution -

let n = 153
function sample(n) {
    let reversedNumber = 0;
    if (n == 0) return 0;
    while (n > 0) {
        let last = n % 10; 
        reversedNumber = reversedNumber * 10 + last;
        n = Math.floor(n / 10);
    }
    return reversedNumber;   //351
}