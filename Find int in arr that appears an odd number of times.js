// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.


function findOdd(A) {

    const unique = [...new Set(A)];

    unique.forEach(element => {

        const filtredArr = A.filter((e) => {
            return e == element;
        });

        if(filtredArr.length % 2) {
            console.log(filtredArr[0]);
            return filtredArr[0];
        }
    });
}

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]); // 5
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]); // -1
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]); // 5
findOdd([10]); // 10
findOdd([1,1,1,1,1,1,10,1,1,1,1]); // 10
findOdd([5,4,3,2,1,5,4,3,2,10,10]); // 1