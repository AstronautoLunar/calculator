describe("isHasOnePoint", () => {
  it("if has one point", () => {
    // SET
    let valueExpect = true;
    const valueInput = "1.1";
    let valueResult: boolean | null = null;

    // ACT
    valueResult = Boolean(valueInput.indexOf("."));

    // ASSERT
    expect(valueResult).toStrictEqual(valueExpect);
  });
});