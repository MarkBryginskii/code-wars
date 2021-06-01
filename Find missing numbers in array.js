function solution(A) {

    const newA = [...new Set(A.filter((element) => {return element > 0}).sort((a,b)=>a-b))];

    const maxValue = Math.max(...newA); // при поиске MAX значения в массиве '...' обязательно

    const missing = [];

    for (let i = 1; i <= maxValue+1; i++) {
        if(newA.indexOf(i) == -1) {
            missing.push(i);
            break;
        }
    }

    if (missing.length > 0) {
        return missing[0];
    } else {
        return 1;
    }
}

// ===============================================================================================================

//myUniqueArray = [...new Set(myArray)]; // unique array

solution([1,1,1,1,1,2,3,5]);

solution([1,2,3,5,7]);

solution([-1000000, -1, 2,2,0,13, 2, 3,1,5]);

solution([-1, -3]);

solution([1, 3, 6, 4, 1, 2]);

solution([0,0,0]);