function MissingNumber(array,n) {

    let missing = [];

    for (let i = 1; i < n+1; i++) {
        
        if (array.indexOf(i) == -1) {
            missing.push(i);
            break;
        }
    }
    return missing[0];
}

MissingNumber([2],1);