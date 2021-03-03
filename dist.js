"use strict";

require("core-js/modules/es.promise.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.values.js");

// import 'core-js';
var p = Promise.resolve(10);
var obj = {
  a: 10,
  b: 20,
  c: 30
};
var arr = Object.values(obj);
var exist = arr.inclueds(20);
 