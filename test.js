const {stringLength, reverseString, Calculator} = require('./index');

// Test for the stringLength function
describe('String Length', () => {
  test('Character count of "String" equal to 6', () => {
    expect(stringLength('String')).toBe(6);
  });
  
  test('Character count of "a" equal to 1', () => {
    expect(stringLength('a')).toBe(1);
  });
  
  test('Character count of "fabricated" equal to 10', () => {
    expect(stringLength('fabricated')).toBe(10);
  });
});

// Test for the reverseString function
describe('Reverse String', () => {
  test('"String" should return "gnirtS"', () => {
    expect(reverseString('String')).toBe('gnirtS');
  });
  
  test('"hello" should return "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  
  test('"eniltuo" should return "outline"', () => {
    expect(reverseString('eniltuo')).toBe('outline');
  });
});

// Tests for each method of the Calculator Class
describe('Calculator Class', () => {
  describe('Add Function', () => {
    test('1 + 2 = 3', () => {
      expect(Calculator.add(1, 2)).toBe(3);
    });

    test('8 + 2 = 10', () => {
      expect(Calculator.add(8, 2)).toBe(10);
    });

    test('11 + 21 = 32', () => {
      expect(Calculator.add(11, 21)).toBe(32);
    });
  });
  describe('Subtract Function', () => {
    test('1 - 2 = -1', () => {
      expect(Calculator.subtract(1, 2)).toBe(-1);
    });

    test('5 - 2 = 3', () => {
      expect(Calculator.subtract(5, 2)).toBe(3);
    });

    test('50 - 22 = 28', () => {
      expect(Calculator.subtract(50, 22)).toBe(28);
    });
  });
  describe('Multiply Function', () => {
    test('1 * 2 = 2', () => {
      expect(Calculator.multiply(1, 2)).toBe(2);
    });

    test('10 * 2 = 20', () => {
      expect(Calculator.multiply(10, 2)).toBe(20);
    });

    test('0 * 3 = 0', () => {
      expect(Calculator.multiply(0, 3)).toBe(0);
    });
  });
  describe('Divide Function', () => {
    test('1 / 2 = 0.5', () => {
      expect(Calculator.divide(1, 2)).toBe(0.5);
    });

    test('10 / 2 = 5', () => {
      expect(Calculator.divide(10, 2)).toBe(5);
    });

    test('21 / 7 = 3', () => {
      expect(Calculator.divide(21, 7)).toBe(3);
    });
  });
});