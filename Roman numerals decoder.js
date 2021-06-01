// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
// You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s.
// So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI",
// uses each letter in descending order.

function solution(roman){

    newA = Array.from(roman).map(element => {
        if (element == 'I') return 1;
        if (element == 'V') return 5;
        if (element == 'X') return 10;
        if (element == 'L') return 50;
        if (element == 'C') return 100;
        if (element == 'D') return 500;
        if (element == 'M') return 1000;
    });

    const result = newA.reduce((prevValue, curValue, ind, arr) => {

        if(arr[ind-1] < curValue) {
            return curValue - prevValue;
        } else {
            return prevValue + curValue;
        }
    },0);
    
    return result;

}

solution('XXI') // 21
solution('I') // 1
solution('IV') // 4
solution('MMVIII') // 2008
solution('MDCLXVI') // 1666