function solution(A, B) {
    
    let number = A * B;
    let count = '';

    if (number !== 0) {
        while (number > 0) {
            number &= (number - 1);
            count++;
            }
        return count;
    } else {
        return 0;
    }
}

solution(3,7);