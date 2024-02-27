//kata id 521c2db8ddc89b9b7a0000c1
//todo
const snail = (arr) => {
  const snailOrder = [];
  const rowLength = arr[0].length;
  const columnLength = rowLength;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      //first row is straight line
      if (row === 0) {
        snailOrder.push(arr[row][col]);
      } else if (row !== 0 && row !== rowLength - 1 && col === rowLength - 1) {
        snailOrder.push(arr[row][col]);
      } else if (row === rowLength - 1) {
        snailOrder.push(arr[row][rowLength - 1 - col]);
      }else if(){

      }
    }
  }
  return snailOrder;
};

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(snail(array));
//  #=> [1,2,3,6,9,8,7,4,5]

// (0,1) 0,2 0,3 1,3 1,4