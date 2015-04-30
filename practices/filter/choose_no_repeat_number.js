'use strict';

function choose_no_repeat_number(collection) {

  var result = [];
  for(var i = 0; i < collection.length; i++) {
    if(!exist(collection[i], result)) {
      result.push(collection[i]);
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



module.exports = choose_no_repeat_number;
