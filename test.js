const {stringLength, reverseString} = require('./index');

test('Character count of "String" equal to 6', () => {
  expect(stringLength('String')).toBe(6);
});

test('Character count of "a" equal to 1', () => {
  expect(stringLength('a')).toBe(1);
});

test('Character count of "fabricated" equal to 10', () => {
  expect(stringLength('fabricated')).toBe(10);
});

test('"String" should return "gnirtS"', () => {
  expect(reverseString('String')).toBe('gnirtS');
});

test('"hello" should return "olleh"', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('"eniltuo" should return "outline"', () => {
  expect(reverseString('eniltuo')).toBe('outline');
});