//https://www.codewars.com/kata/546d15cebed2e10334000ed9
//only three operator *,+,-
//number range: -1000000 to 1000000 
//? will never be -,always a number  
//0 wont lead the num unless its 00
// expression: num op num = num 
// num wont be already existing number in expression
function solveExpression(exp) {
  const [left, right] = exp.split('=');
  for (let num = 0; num <= 9; num++) {
    if (exp.includes(num)) continue;

    const leftExp = left.replace(/\?/g, num);
    const rightExp = right.replace(/\?/g, num);

    if (/^0\d/.test(leftExp) || /^0\d/.test(rightExp)) continue;

    let result = -1;
    if ((/\+/).test(leftExp)) {
      const split = leftExp.split('+');
      const { parsedOperand, parsedResult } = parseExp(split, rightExp)
      result = parsedOperand[0] + parsedOperand[1] === parsedResult ? num : -1;

    } else if ((/\*/).test(leftExp)) {
      const split = leftExp.split('*');
      const { parsedOperand, parsedResult } = parseExp(split, rightExp)
      result = parsedOperand[0] * parsedOperand[1] === parsedResult ? num : -1;
    }
    else if ((/\-/).test(leftExp)) {
      const split = leftExp.split(/-/);
      const { parsedOperand, parsedResult } = parseExp(split, rightExp)
      console.log(parsedOperand, parsedResult)
      result = parsedOperand[0] - (parsedOperand[1]) === parsedResult ? num : -1;

    }

    if (result !== -1) {
      return result
    }

  }
  return -1


}

const parseExp = (split, right) => {
  const parsedOperand = split.map((x) => parseInt(x));
  const parsedResult = parseInt(right);
  return { parsedOperand, parsedResult }
}

const testCases = [
  // ['1+1=?', 2],
  // ['123*45?=5?088', 6],
  // ['-5?*-1=5?', 0],
  // ['19--45=5?', -1],
  // ['??*??=302?', 5],
  // ['?*11=??', 2],
  // ['??*1=??', 2],
  // ['??+??=??', -1],
  ["-7715?5--484?00=-28?9?5", 6],
  ["1+?1=2", 0]
];

for (const [exp, expected] of testCases) {
  console.log(solveExpression(exp), expected)
  // break
};
