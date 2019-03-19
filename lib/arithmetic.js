'use strict';

let arithmetic = module.exports = {};

arithmetic.improperCheck = function(arr) {
  let result;
  if(arr.length<2) { return null; };

  arr.forEach(num => {
    if( typeof num !== 'number' ) { result = null; };
  });
  return result;
};

arithmetic.add = function(arr) {
  arithmetic.improperCheck(arr);
  let sum = 0;
  arr.forEach(num => {
    sum = sum + num;
  })
  return sum;
};

arithmetic.subtract = function(arr) {
  arithmetic.improperCheck(arr);
  let difference = arr[0];
  for(let i=1; i<arr.length; i++){
    difference = difference - arr[i];
  }
  return difference;
};

arithmetic.multiply = function (arr) {
  arithmetic.improperCheck(arr);
  let product = 1;
  arr.forEach(num => {
    product = product * num;
  })
  return product;
};

arithmetic.divide = function (a,b) {
  if(b===0){ return null; }
  return a/b;
};