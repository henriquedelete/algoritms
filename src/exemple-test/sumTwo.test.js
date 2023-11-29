describe("exemple tests", () => {
  it("Should return a sum with 2 numbers", async () => {
    const sumTwo = require("./sumTwo");
    const result = sumTwo(3, 1);

    expect(result).toEqual(4);
  });
});
