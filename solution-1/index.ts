// My Solution

export function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];

  for (const [firstIndex, firstItem] of nums.entries()) {
    for (const [secondIndex, secondItem] of nums.entries()) {
      const sum = firstItem + secondItem;
      if (sum === target) {
        if (firstIndex !== secondIndex) {
          result.push(firstIndex);
          result.push(secondIndex);
          break;
        }
      }
    }
    if (result.length === 2) break;
  }
  console.log('Result:', result);

  return result;
}

// leetCode Solution
export function twoSumLeetCode(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
  // Return an empty array if no solution is found
  return [];
}
