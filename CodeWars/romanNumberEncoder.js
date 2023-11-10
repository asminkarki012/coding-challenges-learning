//PROBLEM NAME:Roman Numerals Encoder

// 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI
// solution(1000); // should return 'M'
const romanEncoderConstant = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};
/*logic 
First do it for upto 10
if number at left is less than number at right then it is substracted else it is added
*/
const romanNumberEncoder = (number) => {};
