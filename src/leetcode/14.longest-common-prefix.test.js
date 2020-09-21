/* eslint-env jest */
const fns = require('./14.longest-common-prefix.js');

test('14.longest-common-prefix.js', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn(["flower","flow","flight"])).toEqual("fl");
    expect(fn(["dog","racecar","car"])).toEqual("");
    // Custom
    expect(fn([])).toEqual("");
    expect(fn([""])).toEqual("");
  });
});
