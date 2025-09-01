const soma = require("../server");

test("Soma 2 + 2 = 4", () => {
  expect(soma(2, 2)).toBe(4);
});
