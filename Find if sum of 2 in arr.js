// Find out if N is in the sum of two in arr


function countTriplet(arr,n) {

    let count = 0;

    arr.forEach(num => {
        
        for (let i = 0; i < n; i++) {

            const ind = arr.indexOf(num);
            
            if (arr.indexOf(num+arr[i]) != -1 && i != ind) {
                count++;
            }
            
        }
    });

    console.log(Math.ceil(count/2));

}

// countTriplet(arr,n);

countTriplet([1, 5, 3, 2], 4);
countTriplet([2,3,4], 3);

// alternative version ============================================================

class Solution {
    
    countTriplet(arr,n){
        arr.sort((a,b) => a - b); 
        let  ans = 0;

        for (let i = n - 1; i >= 0; i--)
        {
            let j = 0;
            let k = i - 1;
            while (j < k)
            {
                if(arr[i] == arr[j] + arr[k])
                {
                    ans++;
                    j++;
                    k--;
                }
                else if (arr[i] > arr[j] + arr[k])
                    j++;
                else
                    k--;
            }
        }

        return ans;
    }
}