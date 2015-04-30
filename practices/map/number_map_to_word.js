'use strict';
var number_map_to_word = function(collection){

  var result = [];

  for (var i = 0; i < collection.length; i++) {
    var element = convertNumToString(collection[i]);
    result.push(element);
  }

  return result;
};

function convertNumToString(value) {

  return getCharCode(Math.floor(value / 26)) + getCharCode(value % 26);
}

function getCharCode(value) {

  var charCode = '';

  if(value !== 0) {
    charCode = String.fromCharCode(96 + value);
  }

  return charCode;
}



module.exports = number_map_to_word;
