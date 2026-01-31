// My Solution

export function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  nums.forEach((num, indexListOne) => {
    nums.forEach((numSecond, indexListTwo) => {
      const sum = num + numSecond;
      if (sum === target) {
        result.push(indexListOne);
        result.push(indexListTwo);
      }
    });
  });
  console.log('Result:', result);
  return result;
}
