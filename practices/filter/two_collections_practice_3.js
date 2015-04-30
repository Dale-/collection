'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  var result = [];

  for(var i = 0; i < collection_a.length; i++) {
    if(beDivisible(collection_a[i], collection_b)) {
      result.push(collection_a[i]);
    }
  }

  return result;
}

function beDivisible(value, collection) {
  var isDivisible = true;

  for(var i = 0; i < collection.length; i++) {
    if(value % collection[i] != 0) {
      isDivisible = false;
      break;
    }
  }

  return isDivisible;

}

module.exports = choose_divisible_integer;
