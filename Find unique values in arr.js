function solutionA(A) {

    const result = [...new Set(A)];

    return result;

}

solutionA([2, 1, 1, 2, 3, 1]);

// alternative version =============================================

function solutionB(A) {

    var seen = [];
    var count = 0;
    var len = A.length;
    for (var i = 0; i < len; i++) {
        var item = A[i];
        if (seen[item] !== 1) {
            seen[item] = 1;
            count++
        }
    }
    console.log(count);

}

solutionB([2, 1, 1, 2, 3, 1]);