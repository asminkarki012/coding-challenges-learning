function decodeBencode(bencodedValue) {
  const isBencodedInteger =
    bencodedValue[0] === "i" && bencodedValue[bencodedValue.length - 1] === "e";
  const isBencodedList =
    bencodedValue[0] === "l" && bencodedValue[bencodedValue.length - 1] === "e";
  const isBencodedDict =
    bencodedValue[0] === "d" && bencodedValue[bencodedValue.length - 1] === "e";
  if (!isNaN(bencodedValue[0])) {
    const firstColonIndex = bencodedValue.indexOf(":");
    if (firstColonIndex === -1) {
      throw new Error("Invalid encoded value");
    }
    return bencodedValue.substr(firstColonIndex + 1);
  } else if (isBencodedInteger) {
    //convert to number
    return +bencodedValue.slice(1, -1);
  } else if (isBencodedList) {
    const bencodedList = [];
    const lengthOfValue =
      bencodedValue.indexOf("e") - bencodedValue.indexOf("l") - 1;

    if (!lengthOfValue) return bencodedList;
    const lastIndex = bencodedValue.length - 1;
    let index = 0 ;
    while(index<=lastIndex){
      const value = bencodedValue[i];

      if(value ==='i'){
      }
      

    }
    const isMultiArr = bencodedValue.slice(0, 2) === "ll"
    const splitByList = isMultiArr ? "ll" : "l"
    const parts = bencodedValue.split(':');
    const isIntegerFirst = parts[0].includes('i');

    console.log("isIntegerFirst",isIntegerFirst);

    const indexOfColon = bencodedValue.indexOf(":");
    let strValue;
    let parseInteger;
     let endOfStringIndex=0
    if(indexOfColon !== -1){
    console.log('parts0',parts[0].length);
    const lenghtOfStr = isIntegerFirst ? parseInt(parts[0].split('e')[1]):parseInt(parts[0].split(splitByList)[1]);
    console.log("lenght of str",lenghtOfStr);
     strValue = parts[1].substr(0, lenghtOfStr);
     endOfStringIndex = isIntegerFirst ?  0 : indexOfColon + lenghtOfStr + 1;
  console.log("strValue",strValue);
    console.log('endofstring index',endOfStringIndex);

    }

    const indexOfInteger = bencodedValue.indexOf("i",endOfStringIndex );
    const indexOfEnding = bencodedValue.indexOf("e", endOfStringIndex );
    console.log('indexOfinteger',indexOfInteger,'indexofEnding',indexOfEnding);
    const integerValue = bencodedValue.substr(
      indexOfInteger + 1,
      indexOfEnding - indexOfInteger - 1
    );

    console.log('intValue',integerValue)
    parseInteger = parseInt(integerValue);
    console.log(indexOfInteger, indexOfColon);

    if (indexOfInteger > indexOfColon) {
      strValue && bencodedList.push(strValue);
      !isNaN(parseInteger) && bencodedList.push(parseInteger);
    } else {
      !isNaN(parseInteger) && bencodedList.push(parseInteger);
      strValue && bencodedList.push(strValue);
    }

    console.log("isMulti",bencodedList)
    if (isMultiArr) {
      console.log('here',bencodedValue.slice(0,2));
      return [bencodedList];
    }
    return bencodedList;
  } else if (isBencodedDict) {
    const bencodedDict = {};
  } else {
    throw new Error("Only strings are supported at the moment");
  }
}
decodeBencode("d3:foo3:bar5:helloi52ee");
module.exports = decodeBencode;
