function subarraySum(arr, n, s) {

    let startIndex = 0;
    let result = 0;
    let res = [-1];

        for (let i = 0; i < n; i++) {
            result = arr.slice(startIndex, i+1).reduce((prevValue, curValue) => {
                return prevValue + curValue;
            },0);

            if(result > s) {
                startIndex++; i = 0;
            } else if (result == s) {
                res = [];
                res.push(startIndex+1);
                res.push(i+1);
                break;
            }
        }
        
        return res;
}

//subarraySum(arr, n, s);

subarraySum([135, 101, 170, 125, 79,  159,
163, 65,  106, 146, 82,  28,
162, 92,  196, 143, 28,  37,
192, 5,   103, 154, 93,  183,
22,  117, 119, 96,  48,  127,
172, 139, 70,  113, 68,  100,
36,  95,  104, 12,  123, 134], 42, 468);