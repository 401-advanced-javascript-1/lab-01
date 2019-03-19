'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib.arithmetic.js');
console.log(greet('JOHN'));
console.log(greet('world'));
console.log(math.add([1,3]));
console.log(math.subtract([1,3]));
console.log(math.multiply([1,2,3]));
console.log(math.divide([15,3]));
