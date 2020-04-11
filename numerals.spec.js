const { numerals, numbers } = require("./numerals"); //.js is implied, { myThing } says import only this thing //"object destructuring"
describe("Testing number => numerals ", () => {
  it("Should turn numbers into numerals e.g. 2000 => MM", () => {
    expect(numerals(1999)).toBe("MCMXCIX");
    expect(numerals(2000)).toBe("MM");
    expect(numerals(2)).toBe("II");
    expect(numerals(15)).toBe("XV");
    expect(numerals(75)).toBe("LXXV");
  });
});
describe("Testing numerals => numbers ", () => {
  it("Should turn numerals into numbers e.g. MM => 2000", () => {
    expect(numbers("MCMXCIX")).toBe(1999);
    expect(numbers("MM")).toBe(2000);
    expect(numbers("II")).toBe(2);
    expect(numbers("XV")).toBe(15);
    expect(numbers("LXXV")).toBe(75);
  });
});
