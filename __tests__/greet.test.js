'use strict';

const greet = require('../lib/greet.js');

describe('test greet with name argument', () => {
  it('should return a greeting with argument name', () => {
    expect(greet.name('world')).toStrictEqual('hello world');
  });
  it('should return a greeting with argument name', () => {
    expect(greet.name('JOHN')).toStrictEqual('hello JOHN');
  });
  it('should return null if input is not a string', () => {
    expect(greet.name(4)).toBeNull();
  });
  it('should return null if input is not a string', () => {
    expect(greet.name(true)).toBeNull();
  });
  it('should return null if input is not a string', () => {
    expect(greet.name(undefined)).toBeNull();
  });
  it('should return null if input is not a string', () => {
    expect(greet.name(['world'])).toBeNull();
  });
});