// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function repeater(latter, numberOfRepeats) {

    let result = latter;

    while (numberOfRepeats !== 0) {
        result += latter.toLowerCase();
        numberOfRepeats -= 1;
    }
    return result;
}

function accum(s) {
    
    let result = '';

	for (let i = 0; i < s.length; i++) {
        result += (i !== 0 ? '-' : '') + repeater(s.toUpperCase()[i],i);
    }

    return result;
}

accum("abcd");

// =======================================================================
// alternative version


function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

accum("abcd");