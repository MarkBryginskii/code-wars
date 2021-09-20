// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
  const uniqueArr = [...new Set(nums)];

  uniqueArr.forEach((int) => {
    const resultArr = nums.filter((e) => {
      return int === e;
    });
    if (resultArr.length > 1) return;
    console.log(resultArr[0]);
    return resultArr[0];
  });
};

singleNumber([2, 2, 1]); // 1
singleNumber([4, 1, 2, 1, 2]); // 4
