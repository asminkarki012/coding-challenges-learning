
const decodeBencode = require('../own-challenges/decode-bencoded.js'); // Adjust path based on where the function is

describe('decodeBencode', () => {
  test('should decode a bencoded list of a string and integer', () => {
    const bencodedValue = 'l5:helloi52ee';
    const expectedOutput = ["hello", 52];
    const result = decodeBencode(bencodedValue);
    expect(result).toEqual(expectedOutput);
  });

  test('should decode a bencoded string', () => {
    const bencodedValue = '5:world';
    const expectedOutput = "world";
    const result = decodeBencode(bencodedValue);
    expect(result).toBe(expectedOutput);
  });

  test('should decode a bencoded integer', () => {
    const bencodedValue = 'i100e';
    const expectedOutput = 100;
    const result = decodeBencode(bencodedValue);
    expect(result).toBe(expectedOutput);
  });

  test.skip('should decode a object', () => {
    const bencodedValue = 'd3:foo3:bar5:helloi52ee';
    const expectedOutput =  {"foo":"bar","hello":52};
    const result = decodeBencode(bencodedValue);
    expect(result).toBe(expectedOutput);
  });

  test('should decode an empty list', () => {
    const bencodedValue = 'le';
    const expectedOutput =  [];
    const result = decodeBencode(bencodedValue);
    expect(result).toStrictEqual(expectedOutput);
  });

  test('should decode a bencoded list with a string and an integer', () => {
    const bencodedValue = 'l4:peari754ee';
    const expectedOutput =  ["pear",754]
    const result = decodeBencode(bencodedValue);
    expect(result).toStrictEqual(expectedOutput);
  });


  test('should decode a bencoded 2D list  with a string and an integer', () => {
    const bencodedValue = 'lli707e9:blueberryee'
    const expectedOutput=[[707,"blueberry"]]
    const result = decodeBencode(bencodedValue);
    expect(result).toStrictEqual(expectedOutput);
  });

test('should decode a bencoded list with a string and an integer', () => {
    const bencodedValue = 'l9:pineapplei119ee';
    const expectedOutput = ["pineapple", 119];
    const result = decodeBencode(bencodedValue);
    expect(result).toStrictEqual(expectedOutput);
});

test('should decode a bencoded list with a string and an integer', () => {
    const bencodedValue = 'l10:strawberryi513ee';
    const expectedOutput = ["strawberry", 513];
    const result = decodeBencode(bencodedValue);
    expect(result).toStrictEqual(expectedOutput);
});

test('should decode a bencoded list with a nested list and an integer', () => {
    const bencodedValue = 'lli4eei5ee';  // bencoded string
    const expectedOutput = [[4], 5];     // Expected result: a nested list and integer
    const result = decodeBencode(bencodedValue);
    expect(result).toStrictEqual(expectedOutput);
});

test('should decode a bencoded 2D list with an integer and a string', () => {
    const bencodedValue = 'lli458e5:grapeee';  // Input bencoded string
    const expectedOutput = [[458, "grape"]];   // Expected output: a nested list with an integer and a string
    const result = decodeBencode(bencodedValue); // Call the decode function
    expect(result).toStrictEqual(expectedOutput); // Assert the result matches the expected output
});

});
