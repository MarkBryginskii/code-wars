// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  const numbers = String(n).split("");

  const result = numbers.reduce((acc, elm) => {
    return Number(acc) + Number(elm);
  }, 0);

  if (result < 10) {
    console.log(result);
    return result;
  } else {
    digital_root(result);
  }
}

digital_root(16); // 7
digital_root(456); // 6
digital_root(493193); // 2
