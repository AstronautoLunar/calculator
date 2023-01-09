function clearPointsUnnecessary(value: string) {
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

describe("CalculateCore Feature", () => {
  it("test function clear points unnecessary", () => {
    // SET
    const valueTest1 = "1.2.4.3";
    const valueTest2 = "1.24.3 / 23.4";
    const valueTest3 = "1.243 / 24.23. / 234";
    
    const valueTest1Expect = "1.243";
    const valueTest2Expect = "1.243 / 23.4";
    const valueTest3Expect = "1.243 / 24.23 / 234";

    // ACT
    const valueTest1Result = clearPointsUnnecessary(valueTest1);
    const valueTest2Result = clearPointsUnnecessary(valueTest2);
    const valueTest3Result = clearPointsUnnecessary(valueTest3);

    // ASSERT

    expect(valueTest1Result).toBe(valueTest1Expect);
    expect(valueTest2Result).toBe(valueTest2Expect);
    expect(valueTest3Result).toBe(valueTest3Expect);
  });
});