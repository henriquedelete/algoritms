function twoSum(arrayNumber, target) {
  let acc = {};

  for (let i = 0; i < arrayNumber.length; i++) {
    const complement = target - arrayNumber[i];
    acc[i] = complement;
    if (acc.hasOwnProperty(complement)) {
      return [acc[complement], i];
    }

    acc[arrayNumber[i]] = i;
  }

  return null;
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;

console.log(twoSum(nums1, target1));
