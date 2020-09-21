/* eslint-env jest */
const fns = require('./3.longest-substring-without-repeating-characters.js');

test('3.longest-substring-without-repeating-characters.js', () => {
  fns.forEach(fn => {
    // Assignment
    expect(fn("abcabcbb")).toEqual(3);
    expect(fn("bbbbb")).toEqual(1);
    expect(fn("pwwkew")).toEqual(3);
    expect(fn("")).toEqual(0);
    // Custom
    expect(fn("a")).toEqual(1);
    expect(fn(" ")).toEqual(1);
    expect(fn("aab")).toEqual(2);
    expect(fn("aabb")).toEqual(2);

    expect(fn("dvdf")).toEqual(3);
    // expect(fn()).toEqual();
  });
});
