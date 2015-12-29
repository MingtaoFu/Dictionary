'use strict';
require('../styles/entry.scss');
/*
var Man = require('./modules/test.js');
var mingtao = new Man('tao');
mingtao.sayHi();
*/
//import './testers/tester_DA.es6';
import * as PD from './modules/PD.es6';

import {app} from './modules/view.es6';

var wordTree = new PD.WordTree();
app.init(wordTree);
