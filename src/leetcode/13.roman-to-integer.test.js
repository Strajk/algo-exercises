/* eslint-env jest */
const fns = require('./13.roman-to-integer.js');

test('13.roman-to-integer.js', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn("I")).toEqual(1);
    expect(fn("II")).toEqual(2);
    expect(fn("III")).toEqual(3);
    expect(fn("IV")).toEqual(4);
    expect(fn("V")).toEqual(5);
    expect(fn("VI")).toEqual(6);
    expect(fn("VII")).toEqual(7);
    expect(fn("VIII")).toEqual(8);
    expect(fn("IX")).toEqual(9);
    expect(fn("X")).toEqual(10);

    expect(fn("L")).toEqual(50);
    expect(fn("C")).toEqual(100);
    expect(fn("D")).toEqual(500);
    expect(fn("M")).toEqual(1000);

    expect(fn("LVIII")).toEqual(58);
    expect(fn("MCMXCIV")).toEqual(1994);

    // Custom
    expect(fn("XIX")).toEqual(19);
    expect(fn("XXIX")).toEqual(29);
    expect(fn("XXXIX")).toEqual(39);

    // Out of scope
    // expect(fn("IXX")).toThrow();
    // expect(fn("VX")).toThrow();
  });
});
