describe("CalculateCore", () => {
  it("function clear points unnecessary", () => {
    expect("a").toBe("a");
      // SET
      let newValue = "";
      const inputValue = "1.1.2 / 2.4";
      const expectedResult = "1.12 / 2.4";
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

      // ACT
      newValue = inputValue
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

      // ASSERT
      expect(newValue).toStrictEqual(expectedResult);
  });
});