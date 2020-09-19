/* eslint-env jest */
const fns = require('./MinPerimeterRectangle');

test('MinPerimeterRectangle', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn(30)).toEqual(22);

    // Custom
    expect(fn(1)).toEqual(4); // 1x1
    expect(fn(4)).toEqual(8); // 2x2
  });
});
