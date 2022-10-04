const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error('Input must have at least 1 character and not more than 10 characters');
  }
}

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

class Calculator {

  static add = (x, y) => {
    return x + y;
  }

  static subtract = (x, y) => {
    return x - y;
  }

  static multiply = (x, y) => {
    return x * y;
  }

  static divide = (x, y) => {
    if (x > 0 && y > 0) return x / y;
    throw new Error('Numbers must be greater than 0');
  }
}

module.exports = { stringLength, reverseString, Calculator };
