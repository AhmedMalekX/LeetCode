/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];

  let expected = nums[0];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === expected) {
      result.push(nums[i]);
      expected += 1;
    }
  }

  console.log(result);

  // Recursive call to process the remaining elements
  let remaining = nums.splice(result.length);
  let formattedResult = [];
  if (result.length === 1) {
    formattedResult.push(result[0].toString());
  } else {
    formattedResult.push(result[0] + "->" + result[result.length - 1]);
  }
  return formattedResult.concat(summaryRanges(remaining));
};

summaryRanges([0, 1, 2, 4, 5, 7]);
