// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
// In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.


function narcissistic(value) {

    if (typeof value === 'number' && value > 0) {
        const numArr = Array.from(value.toString());

        const newNum = numArr.reduce((prevNum, curNum) => {
            return Math.pow(parseInt(curNum), numArr.length) + parseInt(prevNum);
        },0);

        if (newNum === value) {
            return true;
        } else {
            return false;
        }  
    } 
}


narcissistic( 153 ); // true, "7 is narcissistic"
  
narcissistic( 371 ); // true, "371 is narcissistic"