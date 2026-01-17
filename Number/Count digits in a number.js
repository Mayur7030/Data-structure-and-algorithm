// Problem Statement: Given an integer N, return the number of digits in N.


//solution1 -
let n = 153
function countDigits(n) {
    let cnt = 0;
    while (n > 0) {
        cnt = cnt + 1;
        n = Math.floor(n / 10);
    }
    return cnt;
}

//optimal solution

Math.ceil(Math.log10(n))



                            