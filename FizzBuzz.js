// … n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:

// If i is a multiple of both 3 and 5, print FizzBuzz.
// If i is a multiple of 3 (but not 5), print Fizz.
// If i is a multiple of 5 (but not 3), print Buzz.
// If i is not a multiple of 3 or 5, print the value of i.

function fizzBuzz(n) {
  for (var i = 1; i < n + 1; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(15);

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
