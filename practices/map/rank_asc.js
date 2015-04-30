'use strict';
var rank_asc = function(collection){

  var temp = 0;
  for (var i = 0; i < collection.length; i++) {

    for (var j = 0; j < collection.length - i; j++) {

      if(collection[j] < collection[j+1]) {

        temp = collection[j + 1];
        collection[j + 1] = collection[j];
        collection[j] = temp;
      }
    }
  }

  return collection;
};

module.exports = rank_asc;
