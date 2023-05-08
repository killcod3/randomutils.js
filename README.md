# randomutils.js

`randomutils.js` is a utility module for generating random strings, numbers, and bytes in Node.js. It provides various functions for creating random values based on specific patterns or lengths.

## Installation

Use the following command to install `randomutils.js` via npm:

```bash
npm install randomutils.js
```
## Usage
Import the module and use its exported functions as needed:

```javascript
const randomUtils = require('randomutils.js');

// Generate a random string based on the specified pattern
const randomString = randomUtils.getRandomStr('?u?l?d');
console.log(randomString);

// Generate a random integer within the specified range (inclusive)
const randomNumber = randomUtils.randNumInRange(1, 100);
console.log(randomNumber);

// Generate a random hexadecimal string of the specified length
const randomHex = randomUtils.getRandHex(6);
console.log(randomHex);

// Generate a random Buffer containing the specified number of bytes
const randomBytes = randomUtils.getRandBytes(4);
console.log(randomBytes);

// Generate a random integer with the specified number of digits
const randomInt = randomUtils.getRandInt(3);
console.log(randomInt);

```
## API
### getRandomStr(pattern)

Generates a random string based on the specified pattern. The pattern can contain '?' followed by a character (d, l, or u) to represent a random digit, lowercase letter, or uppercase letter, respectively.

- `pattern`: String - A pattern for generating the random string.

### randNumInRange(min, max)

Generates a random integer within the specified range (inclusive).

- `min`: Number - The lower bound of the range (inclusive).
- `max`: Number - The upper bound of the range (inclusive).

### getRandHex(length)

Generates a random hexadecimal string of the specified length.

- `length`: Number - The desired length of the hexadecimal string.

### getRandBytes(length)

Generates a random Buffer containing the specified number of bytes.

- `length`: Number - The desired number of bytes in the Buffer.

### getRandInt(length)

Generates a random integer with the specified number of digits.

- `length`: Number - The desired number of digits in the integer.

## License
MIT License

## Contributing
Pull requests and suggestions are welcome! If you find any issues, please report them via GitHub issues.
