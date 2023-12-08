// Maximum subarray sum

const maxSequence = function (arr) {
  if (arr.length === 0) return 0;
  const maxDigit = Math.max(...arr);
  const indexOfMaxDigit = arr.indexOf(maxDigit);
  let leftTraverseIndex = indexOfMaxDigit;
  let rightTraverseIndex = indexOfMaxDigit;
  let leftTraversePath = "";
  let rightTraversePath = "";
  const pathAndSumArray = [];
  let leftPathSum = 0;
  let rightPathSum = 0;
  while (leftTraverseIndex >= 0 || rightTraverseIndex <= arr.length - 1) {
    if (leftTraverseIndex !== -1) {
      const pathAndSumObj = {};
      leftTraversePath += leftTraverseIndex;
      leftPathSum += arr[leftTraverseIndex];
      pathAndSumObj.path = leftTraversePath;
      pathAndSumObj.sum = leftPathSum;
      console.log("left pathandSumobj", pathAndSumArray);
      pathAndSumArray.push(pathAndSumObj);
      leftTraverseIndex -= 1;
    }
    if (rightTraverseIndex !== arr.length + 1) {
      const pathAndSumObj = {};
      rightTraversePath += rightTraverseIndex;
      rightPathSum += arr[rightTraverseIndex];
      pathAndSumObj.path = rightTraversePath;
      pathAndSumObj.sum = rightPathSum;
      console.log("right pathandSumobj", pathAndSumArray);
      pathAndSumArray.push(pathAndSumObj);
      rightTraverseIndex += 1;
    }
  }
  //   console.log(pathAndSumArray);
  return pathAndSumArray.reduce((a, currentVal) => {
    return (a = Math.max(currentVal.sum, a));
  }, 0);
};

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(
  maxSequence([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
  ])
);
// should be 6: [4, -1, 2, 1]
