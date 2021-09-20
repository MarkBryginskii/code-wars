// Given an array, rotate the array to the right by k steps, where k is non-negative.

var rotate = function (nums, k) {
  const slice1 = nums.slice(k + 1);
  const slice2 = nums.slice(0, k + 1);
  const result = slice1.concat(slice2);
  return result;
};

rotate([1, 2, 3, 4, 5, 6, 7], 3); //[5,6,7,1,2,3,4]
