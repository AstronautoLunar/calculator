// Data
import { structure } from "../index";

// Utils
import Color from "../../../utils/Color";

// styles
import colors from "../../../styles/colors";

function renderColorKeys(type: keyof typeof structure | "zero" | "equal") {
  const isKeysSpecial = [ 
    "add", 
    "subtract", 
    "multiply", 
    "division", 
  ].includes(type);

  if (isKeysSpecial) {
    return Color.setOpacityInHex("emphasis_level_1", "50");
  }

  const isKeysOther = [
    "percentage", 
    "point",
    "delete"
  ].includes(type);

  if (isKeysOther) {
    return Color.setOpacityInHex("emphasis_level_4", "ff");
  }

  const isKeysNumbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ].includes(type);

  if (isKeysNumbers) {
    return Color.setOpacityInHex("emphasis_level_2", "30");
  }


  return Color.setOpacityInHex("emphasis_level_5", "ff");
};

export default renderColorKeys;