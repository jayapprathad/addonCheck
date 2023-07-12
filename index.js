'use strict';

module.exports = {
  name: require('./package').name,
  checking: function(word){
    return word+" from addon check"
  }
};
