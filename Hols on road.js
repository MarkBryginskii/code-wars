// 'X' - hole on a road cell
// '.' - normal road cell

// Find the number of iterations for road repair machine, if at one time it can fix 3 cells


function solution(S) {
    
    let newArr = Array.from(S);

    let count = 0;

    for (let i = 0; i < newArr.length; i+=3) {
        
       if(newArr.slice(i,i+3).some((element) => {return element == 'X';})) {
           count++;
       }
    }

    console.log(count);
    return count;
}

solution('XX....X.X.X.XXX'); //2

solution('X.XXXXX.X'); //3

solution('XX.XXX'); //2

solution('XXXX'); //2