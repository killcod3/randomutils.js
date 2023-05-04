const crypto = require('crypto');

const digits = '0123456789';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getRandomStr(pattern) {
  let result = '';

  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === '?') {
      i++;
      if (i < pattern.length) {
        switch (pattern[i]) {
          case 'd':
            result += digits[Math.floor(Math.random() * digits.length)];
            break;
          case 'l':
            result += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
            break;
          case 'u':
            result += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
            break;
          default:
            throw new Error('Invalid pattern identifier');
        }
      } else {
        result += '?';
      }
    } else {
      result += pattern[i];
    }
  }

  return result;
}

function randNumInRange(min, max) {
  if (min > max) {
    throw new Error('Invalid range: min must be less than or equal to max');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandHex(length) {
  if (length <= 0) {
    return '';
  }

  const hexDigits = '0123456789abcdef';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += hexDigits[Math.floor(Math.random() * hexDigits.length)];
  }

  return result;
}

function getRandBytes(length) {
  if (length <= 0) {
    return Buffer.alloc(0);
  }

  const buf = Buffer.allocUnsafe(length);
  crypto.randomFillSync(buf);

  return buf;
}

function getRandInt(length) {
  if (length <= 0) {
    throw new Error('Length must be greater than 0');
  }

  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = {
  getRandomStr,
  randNumInRange,
  getRandHex,
  getRandBytes,
  getRandInt,

};