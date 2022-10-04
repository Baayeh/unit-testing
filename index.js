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

module.exports = { stringLength, reverseString };
