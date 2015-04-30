'use strict';

function double_to_one(collection) {

  var result = [];

  for (var i = 0; i < collection.length; i++) {

    for (var j = 0; j < collection[i].length; j++) {

      if(!exist(collection[i][j],result)) {
        result.push(collection[i][j]);
      }
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

module.exports = double_to_one;
