// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

var containsDuplicate = function (nums) {
  const len = nums.length;
  if (len < 2) return false;
  const newArr = [...new Set(nums)];
  if (newArr.length !== len) {
    return true;
  }
  return false;
};

containsDuplicate([1, 2, 3, 1]); // true
