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
      return decode(bencodedValue);
  } else if (isBencodedDict) {
    const bencodedDict = {};
  } else {
    throw new Error("Only strings are supported at the moment");
  }
}
decodeBencode("d3:foo3:bar5:helloi52ee");

const decode = (bencodedValue,index=1) => {
  const bencodedList = [];
  const lengthOfValue =
    bencodedValue.indexOf("e") - bencodedValue.indexOf("l") - 1;

  if (!lengthOfValue) return bencodedList;
  const lastIndex = bencodedValue.length - 1;

  while (index <= lastIndex) {
    const value = bencodedValue[index];
    console.log("indexxx",index,value);
      
    //dont consider final two ee
    const isMulti = bencodedValue.slice(index,-2)?.split('ee')?.filter(Boolean)?.length > 1 || false;
    if (value === "i") {
      const indexOfIntegerEnd = bencodedValue.indexOf("e", index);
      console.log("isMulti ",isMulti);
      const integerLength = indexOfIntegerEnd - index + 1;
      const integerValue = bencodedValue.substr(index + 1, integerLength);
      const parseInteger = parseInt(integerValue);
      const pushIntegerValue = isMulti ? [parseInteger] : parseInteger
      !isNaN(parseInteger) && bencodedList.push(pushIntegerValue);
      index += integerLength || 1;
    } else if (value === ":") {
      //capture digit between e and :
      const strLength = parseInt(bencodedValue.match(/e?(\d+)\:/)?.[1]);
      const strValue = bencodedValue.substr(index + 1, strLength);
      strValue && bencodedList.push(strValue);
      index += strLength || 1;
    } else if (value === "l") {
        const end = bencodedValue.length -1; 
        const multiBencoded = decode(bencodedValue.substr(index,end),index);
      if(isMulti){
        bencodedList.push(...multiBencoded);
      }else{
        bencodedList.push(multiBencoded);
      }
        index+=end;
    }
    index+=1;
  }
  return bencodedList;
};
module.exports = decodeBencode;
