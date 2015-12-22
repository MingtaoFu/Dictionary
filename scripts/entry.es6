'use strict';
require('../styles/entry.scss');
/*
var Man = require('./modules/test.js');
var mingtao = new Man('tao');
mingtao.sayHi();
*/
var Man = require('./modules/test.js');
var xx = require('./modules/test.es6');
require('./modules/BaseClass.es6');
//import './modules/BaseClass.es6';
var cursorSpace = new CursorSpace(10000);
console.log(Man);
