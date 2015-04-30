'use strict';

function grouping_count(collection) {

  var no_repeat_collection = [];
  var result = {};

  for(var i = 0; i < collection.length; i++) {

    var currentElement = collection[i];

    if(!exist(currentElement,no_repeat_collection)){
      no_repeat_collection.push(currentElement);
      result[currentElement] = 1;
    } else {
      result[currentElement] += 1;
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

module.exports = grouping_count;
