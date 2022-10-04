const {stringLength} = require('./index');

test('Character count of "String" equal to 6', () => {
  expect(stringLength('String')).toBe(6);
});

test('Character count of "a" equal to 1', () => {
  expect(stringLength('a')).toBe(1);
});

test('Character count of "fabricated" equal to 10', () => {
  expect(stringLength('fabricated')).toBe(10);
});
