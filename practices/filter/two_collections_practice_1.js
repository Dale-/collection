'use strict';

function choose_common_elements(collection_a, collection_b) {

  var result = [];

  for(var i = 0; i < collection_a.length; i++) {
    if(exist(collection_a[i],collection_b)) {
      result.push(collection_a[i]);
    }
  }

  return result;
}

function exist(value, collection) {

  var isExist = false;

  for(var i = 0; i < collection.length; i++) {
    if(value === collection[i]) {
      isExist = true;
      break;
    }
  }

  return isExist;
}

module.exports = choose_common_elements;
