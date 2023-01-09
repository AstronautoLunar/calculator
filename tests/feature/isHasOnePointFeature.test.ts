function isHasOnePoint(value: string) {
  return value.indexOf(".") > 0 ? true : false;
}

describe("isHasOnePoint Feature", () => {
  it("Multiples options", () => {
    // SET
    const testValue1 = "1.1.1";
    const testValue2 = "111";
    const testValue3 = "12.1";

    let testValue1Expect = true;
    let testValue2Expect = false;
    let testValue3Expect = true;

    let testValue1Result: boolean | null = null;
    let testValue2Result: boolean | null = null;
    let testValue3Result: boolean | null = null;

    // ACTION
    testValue1Result = isHasOnePoint(testValue1)
    testValue2Result = isHasOnePoint(testValue2)
    testValue3Result = isHasOnePoint(testValue3)

    // ASSERT
    expect(testValue1Result).toStrictEqual(testValue1Expect);
    expect(testValue2Result).toStrictEqual(testValue2Expect);
    expect(testValue3Result).toStrictEqual(testValue3Expect);
  });
});