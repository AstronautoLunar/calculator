class CalculateCore {
  static removeSpaces(value: string) {
    const actionRemove = (char: string) => {
      if (char === " ") {
        return ""
      }

      return char;
    };
    
    return value
      .split("")
      .map(actionRemove)
      .join("");
  }

  static getIsResultEmpty(result: string) {
    const resultNotEmpty = this.removeSpaces(result)

    return !resultNotEmpty.length;
  }

  static addSpace(value: string) {
    return (
      /[0-9]/.test(value) || [".", "%"].includes(value) 
      ? 
      value 
      : 
      ` ${value} `
    )
  }

  static calculatePercentageResult(result: string) {
    const actionCalculatePercentage = (groupChar: string) => {
      if (groupChar.includes("%")) {
        const value = Number(groupChar.replace("%", ""));
        const valueCalculate = value / 100;

        return String(valueCalculate);
      } else {
        return groupChar;
      }
    }

    return result
      .split(" ")
      .map(actionCalculatePercentage)
      .join(" ");
  }
  
  static converterResult(result: string) {
    const resultPercentageCalculate = this.calculatePercentageResult(result);

    const actionConverter = (char: string, index: number) => {
      if (char === "x") {
        return "*"
      } 
      
      return char
    }

    return resultPercentageCalculate
      .split("")
      .map(actionConverter)
      .join("");
  }

  static clearPointsUnnecessary(value: string) {
    const listChars = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "-",
      "x",
      "/",
      "%",
    ];
  
    return value
      .split(" ")
      .map(groupChar => {
        const indexFirstPoint = groupChar.indexOf(".");
  
        const newGroupChar = groupChar
          .split("")
          .filter((char, index) => {
            if (index === indexFirstPoint || listChars.includes(char)) {
              return char
            } else {
              return ""
            }
          })
          .join("");
  
        return newGroupChar;
      })
      .join(" ");
  }

  static isHasOnePoint(value: string) {
    return value.indexOf(".") > 0 ? true : false;
  }
};

export default CalculateCore;