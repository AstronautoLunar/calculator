// Styles
import colors from "../styles/colors"

class Color {
  static setOpacityInHex(color: keyof typeof colors, value: string) {
    return `${colors[color]}${value}`;
  }
};

export default Color;