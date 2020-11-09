const baseOpacity10 = 255;

export class Color {
  static numberToHexCode(opacity = 1) {
    return Number(parseInt(opacity * baseOpacity10)).toString(16);
  }

  static hexNumberToHexCode(hex) {
    const result = hex.toString(16);
    return result.length === 1 ? `0${result}` : result;
  }

  static hexToArgb(hex, opacity = 1) {
    const hexNoHash = hex.replace("#", "");

    const finalOpacity = Color.numberToHexCode(opacity);

    return parseInt(`0x${finalOpacity}${hexNoHash}`, 16);
  }

  static rgbaToArgb(r, g, b, a = 1) {
    const red = Color.hexNumberToHexCode(r);
    const green = Color.hexNumberToHexCode(g);
    const blue = Color.hexNumberToHexCode(b);
    const alpha = Color.numberToHexCode(a);

    return parseInt(`0x${alpha}${red}${green}${blue}`);
  }
}
