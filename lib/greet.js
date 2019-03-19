'use strict';

let greet = module.exports = {};

greet.name = function(name){
  if(typeof name !== 'string'){return null;}
  return `hello ${name}`;
};
