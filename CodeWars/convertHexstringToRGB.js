//Convert A Hex String To RGB
// "#FF9933" --> {r: 255, g: 153, b: 51}
class HexstringToRGB {
  constructor() {
    this.hexToDecimalMapper = {
      f: 15,
      e: 14,
      d: 13,
      c: 12,
      b: 11,
      a: 10,
    };
    console.log("RUN CONSTRUCTOR");
  }
  hexStringToRGB = (hexString) => {
    const requiredHex = hexString.toLowerCase().slice(1);
    const rgb = { r: null, g: null, b: null };
    const windowSize = 2;
    const hexPairArray = [];
    for (let i = 0; i < requiredHex.length; i = i + windowSize) {
      hexPairArray.push(requiredHex.substring(i, i + windowSize));
    }

    Object.keys(rgb).forEach((key, index) => {
      console.log("hexpair array", hexPairArray[index]);
      rgb[key] = this.hextToDecimal(hexPairArray[index]);
    });
    console.log("rgb", rgb);
    return rgb;
  };

  hextToDecimal = (hex) => {
    const hexSplit = hex.split("");
    const formattedHex = hexSplit.map(
      (x) => Number(this.hexToDecimalMapper[x]) || parseInt(x)
    );
    const hexReducer = formattedHex.reduce(
      (accumulator, currentValue, currentIndex) => {
        return (
          accumulator +
          currentValue * Math.pow(16, hexSplit.length - 1 - currentIndex)
        );
      },
      0
    );
    console.log("hexReducer", hexReducer);
    return hexReducer;
  };
}
const hexStringToRGBInstance = new HexstringToRGB();
hexStringToRGBInstance.hexStringToRGB("#FF9933");
