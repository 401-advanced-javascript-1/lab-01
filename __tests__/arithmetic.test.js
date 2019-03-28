'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('test arithmetic.add', () => {
  it('should return sum of all array elements', () => {
    expect(arithmetic.add([1,3])).toStrictEqual(4);
  });
  it('should return sum of all array elements', () => {
    expect(arithmetic.add([1,2,3])).toStrictEqual(6);
  });
});

describe('test arithmetic.subtract', () => {
  it('should return difference of all array elements', () => {
    expect(arithmetic.subtract([4,3])).toStrictEqual(1);
  });
  it('should return difference of all array elements', () => {
    expect(arithmetic.subtract([10,4,2])).toStrictEqual(4);
  });
});

describe('test for improper input', () => {
  it('input disallows strings', () => {
    expect(arithmetic.improperCheck(['yes', 'no'])).toBe(null);
  });
  it('input must be > 1 element long', () => {
    expect(arithmetic.improperCheck([1])).toBe(null);
  });
  it('input disallows booleans', () => {
    expect(arithmetic.improperCheck([2, 'yes', true, 1])).toBe(null);
  });
  it('input disallows objects', () => {
    expect(arithmetic.improperCheck([2, {}, 1])).toBe(null);
  });
});

describe('test arithmetic.multiply', () => {
  it('should return product of all array elements', () => {
    expect(arithmetic.multiply([2,2])).toStrictEqual(4);
  });
  it('should return product of all array elements', () => {
    expect(arithmetic.multiply([1,2,3])).toStrictEqual(6);
  });
});

describe('test arithmetic.divide', () => {
  it('should return quotient of 10/5', () => {
    expect(arithmetic.divide(10,5)).toStrictEqual(2);
  });
});