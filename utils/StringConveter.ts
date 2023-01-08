class StringConverter {
  static converterResult(result: string) {
    return result.split("").map(char => {
      if (char === "x") {
        return "*"
      } else {
        return char
      }
    }).join("");
  }
};

export default StringConverter;