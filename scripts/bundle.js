/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _PD = __webpack_require__(1);

	var PD = _interopRequireWildcard(_PD);

	__webpack_require__(4);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//import {app, angularApp} from './modules/view.es6';

	//var wordTree = new PD.WordTree();
	//app.init(wordTree);
	//console.log(angularApp)
	__webpack_require__(5);
	/*
	var Man = require('./modules/test.js');
	var mingtao = new Man('tao');
	mingtao.sayHi();
	*/
	//import './testers/tester_DA.es6';

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.POS = exports.Meaning = exports.WordTree = exports.Word = undefined;

	var _DA = __webpack_require__(2);

	var DA = _interopRequireWildcard(_DA);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Meaning = (function () {
	    function Meaning(meaning, sentence) {
	        _classCallCheck(this, Meaning);

	        this.setMeaning(meaning);
	        this.setSentence(sentence);
	    }

	    /**
	     * setters and getters
	     */

	    _createClass(Meaning, [{
	        key: 'setMeaning',
	        value: function setMeaning(meaning) {
	            this._meaning = meaning;
	        }
	    }, {
	        key: 'setSentence',
	        value: function setSentence(sentence) {
	            this._sentence = sentence;
	        }
	    }, {
	        key: 'getMeaning',
	        value: function getMeaning() {
	            return this._meaning;
	        }
	    }, {
	        key: 'getSentence',
	        value: function getSentence() {
	            return this._sentence;
	        }
	    }]);

	    return Meaning;
	})();

	var POS = (function () {
	    function POS(_POS, meaning) {
	        _classCallCheck(this, POS);

	        this.setPOS(_POS);
	        this.setMeaning(meaning);
	    }

	    /**
	     * setters and getters
	     */

	    _createClass(POS, [{
	        key: 'setPOS',
	        value: function setPOS(POS) {
	            this._POS = POS;
	        }
	    }, {
	        key: 'getPOS',
	        value: function getPOS() {
	            return this._POS;
	        }
	    }, {
	        key: 'getMeaning',
	        value: function getMeaning() {
	            return this._meaning;
	        }
	    }, {
	        key: 'setMeaning',
	        value: function setMeaning(meaning) {
	            this._meaning = meaning;
	        }
	    }, {
	        key: 'addMeaning',
	        value: function addMeaning(meaning) {
	            this._meaning.push(meaning);
	        }
	    }]);

	    return POS;
	})();

	var Word = (function () {
	    function Word(spelling, POS) {
	        _classCallCheck(this, Word);

	        //字符串
	        this.setSpelling(spelling);
	        //数组
	        this.setPOS(POS);
	    }

	    /**
	    * setters and getters
	    */

	    _createClass(Word, [{
	        key: 'setSpelling',
	        value: function setSpelling(spelling) {
	            this._spelling = spelling;
	        }
	    }, {
	        key: 'getSpelling',
	        value: function getSpelling() {
	            return this._spelling;
	        }
	    }, {
	        key: 'setPOS',
	        value: function setPOS(POS) {
	            this._POS = POS;
	        }
	    }, {
	        key: 'getPOS',
	        value: function getPOS() {
	            return this._POS;
	        }
	    }, {
	        key: 'addPOS',
	        value: function addPOS(POS) {
	            this._POS.push(POS);
	        }
	        //搜索匹配，含部分匹配

	    }, {
	        key: 'match',
	        value: function match(str) {}

	        //验证是否已经存在了此词

	    }, {
	        key: 'validateUnique',
	        value: function validateUnique() {}
	    }, {
	        key: 'insert',
	        value: function insert(db) {
	            db.find(this.getSpelling());
	            db.insert(this);
	        }
	    }]);

	    return Word;
	})();

	var TreeNode = (function () {
	    function TreeNode() {
	        _classCallCheck(this, TreeNode);

	        this._next = [];
	        this._word = null;
	    }

	    _createClass(TreeNode, [{
	        key: 'getNext',
	        value: function getNext() {
	            return this._next;
	        }
	    }, {
	        key: 'setNext',
	        value: function setNext(next) {
	            this._next = null;
	        }
	    }, {
	        key: 'setWord',
	        value: function setWord(word) {
	            this._word = word;
	        }
	    }, {
	        key: 'getWord',
	        value: function getWord() {
	            return this._word;
	        }

	        //递归遍历

	    }, {
	        key: 'recursionErgodic',
	        value: function recursionErgodic() {
	            var resultArr = [];
	            if (this._word) {
	                resultArr.push(this._word);
	            }
	            for (var i in this._next) {
	                var nextArr = this._next[i].recursionErgodic();
	                for (var j in nextArr) {
	                    resultArr.push(nextArr[j]);
	                }
	            }
	            return resultArr;
	        }
	    }]);

	    return TreeNode;
	})();

	var WordTree = (function () {
	    function WordTree() {
	        _classCallCheck(this, WordTree);

	        this._root = new TreeNode();
	        this.cursor = this._root;
	        this._db = new DA.DB();
	        this.importDB(this._db.outputDB());
	    }
	    /**
	     * 从数据库导入数据，赋给value属性
	     * @param value 数据库对象
	     */

	    _createClass(WordTree, [{
	        key: 'importDB',
	        value: function importDB(value) {
	            for (var i in value) {
	                this.cursor = this._root;
	                this.insertToTree(WordTree.objToWord(value[i]));
	            }
	        }
	    }, {
	        key: 'insertToTree',

	        /**
	         * 基本操作：增删查改
	         */

	        value: function insertToTree(word) {
	            this.cursor = this._root;
	            var spelling = word.getSpelling();
	            for (var i in spelling) {
	                var index = spelling[i].charCodeAt() - 97;
	                if (!this.cursor.getNext()[index]) {
	                    this.cursor.getNext()[index] = new TreeNode();
	                }
	                this.cursor = this.cursor.getNext()[index];
	            }
	            if (!this.cursor.getWord()) {
	                this.cursor.setWord(word);
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'insert',
	        value: function insert(word) {
	            if (this.insertToTree(word)) {
	                this._db.insert(word);
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'del',
	        value: function del(spelling) {
	            this._del(spelling);
	            this._db.del(spelling);
	        }
	    }, {
	        key: '_del',
	        value: function _del(spelling) {
	            //参考查找的写法
	            var cursor2;
	            this.cursor = this._root;
	            for (var i in spelling) {
	                cursor2 = this.cursor;
	                var index = spelling[i].charCodeAt() - 97;
	                if (!this.cursor.getNext()[index]) {
	                    return null;
	                }
	                this.cursor = this.cursor.getNext()[index];
	            }
	            if (this.cursor.getNext()) {
	                this.cursor.setWord(null);
	            } else {
	                cursor2.getNext()[index] = null;
	                if (cursor2.getNext().length == 0) {
	                    cursor2.setNext(null);
	                }
	            }
	        }
	    }, {
	        key: 'find',
	        value: function find(spelling) {
	            if (spelling == '') {
	                return [];
	            }

	            this.cursor = this._root;
	            for (var i in spelling) {
	                var index = spelling[i].charCodeAt() - 97;
	                if (!this.cursor.getNext()[index]) {
	                    return [];
	                }
	                this.cursor = this.cursor.getNext()[index];
	            }
	            return this.cursor.recursionErgodic();
	        }
	    }, {
	        key: 'update',
	        value: function update(oldSpelling, newWord) {
	            this.del(oldSpelling);
	            this.insert(newWord);
	        }
	    }], [{
	        key: 'objToWord',
	        value: function objToWord(obj) {
	            var word = new Word(obj._spelling, []);
	            for (var pos in obj._POS) {
	                var POSObj = new POS(obj._POS[pos]._POS, []);
	                for (var meaning in obj._POS[pos]._meaning) {
	                    var meaningObj = new Meaning(obj._POS[pos]._meaning[meaning]._meaning, obj._POS[pos]._meaning[meaning]._sentence);
	                    POSObj.addMeaning(meaningObj);
	                }
	                word.addPOS(POSObj);
	            }
	            return word;
	        }
	    }]);

	    return WordTree;
	})();

	exports.Word = Word;
	exports.WordTree = WordTree;
	exports.Meaning = Meaning;
	exports.POS = POS;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DB = undefined;

	var _preData = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DB = (function () {
	    /**
	     * 初始化数据库
	     * 如果数据库存在，返回该对象
	     * 否则新建
	     */

	    function DB() {
	        _classCallCheck(this, DB);

	        if (!localStorage.dicData) {
	            localStorage.dicData = _preData.preData;
	        }
	        this._dicData = JSON.parse(localStorage.dicData);
	    }

	    /**
	     * 返回整个数据库的数据
	     * 它们将直接存入内存，以便快速搜索
	     */

	    _createClass(DB, [{
	        key: 'outputDB',
	        value: function outputDB() {
	            return this._dicData;
	        }

	        /**
	         * 基本的数据库操作：增删查改
	         */

	    }, {
	        key: 'insert',
	        value: function insert(word) {
	            this._dicData.push(word);
	            this.saveToLocal();
	        }
	    }, {
	        key: 'del',
	        value: function del(spelling) {
	            for (var i in this._dicData) {
	                if (spelling == this._dicData[i]._spelling) {
	                    this._dicData.splice(i, 1);
	                    this.saveToLocal();
	                    return;
	                }
	            }
	            console.log('DA 找不到这个词.');
	        }
	    }, {
	        key: 'update',
	        value: function update() {}
	    }, {
	        key: 'saveToLocal',
	        value: function saveToLocal() {
	            localStorage.dicData = JSON.stringify(this._dicData);
	        }
	    }]);

	    return DB;
	})();

	exports.DB = DB;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var preData = '[{"_spelling":"spelling","_POS":[{"_POS":"n","_meaning":[{"_meaning":"meaning","_sentence":"sentence","$$hashKey":"object:11"}],"$$hashKey":"object:8"}]},{"_spelling":"ahead","_POS":[{"_POS":"adj","_meaning":[{"_meaning":"在前的","_sentence":"","$$hashKey":"object:14"},{"_meaning":"领先","_sentence":"He is ahead of her.","$$hashKey":"object:15"}],"$$hashKey":"object:12"}],"$$hashKey":"object:6"},{"_spelling":"able","_POS":[{"_POS":"adj","_meaning":[{"_meaning":"有能力的","_sentence":"She is a girl who is able.","$$hashKey":"object:14"},{"_meaning":"能","_sentence":"I will be able to finish the work.","$$hashKey":"object:15"}],"$$hashKey":"object:12"}],"$$hashKey":"object:5"},{"_spelling":"comment","_POS":[{"_POS":"n","_meaning":[{"_meaning":"评论，意见","_sentence":"","$$hashKey":"object:58"},{"_meaning":"体现，写照","_sentence":null,"$$hashKey":"object:63"}],"$$hashKey":"object:55"}]},{"_spelling":"电镀","_POS":[{"_POS":"n","_meaning":[{"_meaning":"盘子，盆子","_sentence":"","$$hashKey":"object:63"},{"_meaning":"金属","_sentence":null,"$$hashKey":"object:68"}],"$$hashKey":"object:60"},{"_POS":"vt","_meaning":[{"_meaning":"电镀","_sentence":null,"$$hashKey":"object:80"}],"$$hashKey":"object:75"}]},{"_spelling":"act","_POS":[{"_POS":"n","_meaning":[{"_meaning":"行为","_sentence":"","$$hashKey":"object:66"},{"_meaning":"法令","_sentence":null,"$$hashKey":"object:72"}],"$$hashKey":"object:63"},{"_POS":"vt","_meaning":[{"_meaning":"行动","_sentence":null,"$$hashKey":"object:84"}],"$$hashKey":"object:79"},{"_POS":"vi","_meaning":[{"_meaning":"行动","_sentence":null,"$$hashKey":"object:93"}],"$$hashKey":"object:89"}],"$$hashKey":"object:209"},{"_spelling":"credit","_POS":[{"_POS":"n","_meaning":[{"_meaning":"赊购","_sentence":"","$$hashKey":"object:129"},{"_meaning":"结余","_sentence":null,"$$hashKey":"object:135"},{"_meaning":"贷记","_sentence":null,"$$hashKey":"object:142"},{"_meaning":"赞扬，称赞","_sentence":null,"$$hashKey":"object:148"}],"$$hashKey":"object:126"}],"$$hashKey":"object:524"},{"_spelling":"partial","_POS":[{"_POS":"adj","_meaning":[{"_meaning":"部分的","_sentence":"","$$hashKey":"object:183"},{"_meaning":"偏爱的","_sentence":null,"$$hashKey":"object:189"},{"_meaning":"偏袒的","_sentence":null,"$$hashKey":"object:196"}],"$$hashKey":"object:180"}],"$$hashKey":"object:213"},{"_spelling":"sea","_POS":[{"_POS":"n","_meaning":[{"_meaning":"海，海洋","_sentence":"","$$hashKey":"object:251"}],"$$hashKey":"object:248"}],"$$hashKey":"object:493"},{"_spelling":"seventy","_POS":[{"_POS":"num","_meaning":[{"_meaning":"七十，七十个","_sentence":"","$$hashKey":"object:267"}],"$$hashKey":"object:264"}],"$$hashKey":"object:494"},{"_spelling":"cinema","_POS":[{"_POS":"n","_meaning":[{"_meaning":"电影院","_sentence":"","$$hashKey":"object:283"},{"_meaning":"电影","_sentence":null,"$$hashKey":"object:289"},{"_meaning":"电影业","_sentence":null,"$$hashKey":"object:296"}],"$$hashKey":"object:280"}],"$$hashKey":"object:521"},{"_spelling":"pail","_POS":[{"_POS":"n","_meaning":[{"_meaning":"桶，提桶","_sentence":"","$$hashKey":"object:314"}],"$$hashKey":"object:311"}]},{"_spelling":"thermometer","_POS":[{"_POS":"n","_meaning":[{"_meaning":"温度计，体温表","_sentence":"","$$hashKey":"object:330"}],"$$hashKey":"object:327"}]},{"_spelling":"drum","_POS":[{"_POS":"n","_meaning":[{"_meaning":"鼓","_sentence":"","$$hashKey":"object:346"},{"_meaning":"鼓状物，圆桶","_sentence":null,"$$hashKey":"object:352"},{"_meaning":"卷筒","_sentence":null,"$$hashKey":"object:359"}],"$$hashKey":"object:343"}],"$$hashKey":"object:567"},{"_spelling":"cut","_POS":[{"_POS":"vt","_meaning":[{"_meaning":"切，割，剪","_sentence":"","$$hashKey":"object:377"},{"_meaning":"割伤","_sentence":null,"$$hashKey":"object:383"},{"_meaning":"修剪","_sentence":null,"$$hashKey":"object:390"}],"$$hashKey":"object:374"}],"$$hashKey":"object:525"},{"_spelling":"horizon","_POS":[{"_POS":"n","_meaning":[{"_meaning":"地平线","_sentence":"","$$hashKey":"object:408"},{"_meaning":"眼界，见识","_sentence":null,"$$hashKey":"object:414"}],"$$hashKey":"object:405"}]},{"_spelling":"vice","_POS":[{"_POS":"n","_meaning":[{"_meaning":"恶习","_sentence":"","$$hashKey":"object:432"},{"_meaning":"不道德行为","_sentence":null,"$$hashKey":"object:438"}],"$$hashKey":"object:429"}]},{"_spelling":"simple","_POS":[{"_POS":"adj","_meaning":[{"_meaning":"简单的","_sentence":"","$$hashKey":"object:456"},{"_meaning":"朴素的","_sentence":null,"$$hashKey":"object:462"}],"$$hashKey":"object:453"}],"$$hashKey":"object:495"},{"_spelling":"salary","_POS":[{"_POS":"n","_meaning":[{"_meaning":"薪金，薪水","_sentence":"He had the audacity to ask for an increase in salary.","$$hashKey":"object:34"}],"$$hashKey":"object:31"}],"$$hashKey":"object:475"},{"_spelling":"incorrect","_POS":[{"_POS":"adj","_meaning":[{"_meaning":"不正确的，错误的","_sentence":"至少可以说这样的见解是错误的.","$$hashKey":"object:50"}],"$$hashKey":"object:47"}],"$$hashKey":"object:502"},{"_spelling":"cliff","_POS":[{"_POS":"n","_meaning":[{"_meaning":"悬崖，峭壁","_sentence":"The workers skirted the edge of the cliff on a geological survey.","$$hashKey":"object:113"}],"$$hashKey":"object:110"}],"$$hashKey":"object:522"},{"_spelling":"northwest","_POS":[{"_POS":"adj","_meaning":[{"_meaning":"位于西北的","_sentence":"走向西北的那条路, 那是最近的路.","$$hashKey":"object:167"}],"$$hashKey":"object:164"}],"$$hashKey":"object:547"},{"_spelling":"direct","_POS":[{"_POS":"adj","_meaning":[{"_meaning":"直接的","_sentence":"The army is now under the direct command of General Barton.","$$hashKey":"object:220"},{"_meaning":"直达的","_sentence":null,"$$hashKey":"object:226"},{"_meaning":"直接照射的","_sentence":null,"$$hashKey":"object:233"}],"$$hashKey":"object:217"}],"$$hashKey":"object:566"},{"_spelling":"expire","_POS":[{"_POS":"vi","_meaning":[{"_meaning":"满期，到期","_sentence":"His term of office as president will expire next year.","$$hashKey":"object:25"},{"_meaning":"断气","_sentence":null,"$$hashKey":"object:31"}],"$$hashKey":"object:22"}],"$$hashKey":"object:188"},{"_spelling":"wield","_POS":[{"_POS":"vt","_meaning":[{"_meaning":"挥（剑）","_sentence":"","$$hashKey":"object:49"},{"_meaning":"行使（权利）","_sentence":"They wield enormous political power.","$$hashKey":"object:55"}],"$$hashKey":"object:46"}],"$$hashKey":"object:221"},{"_spelling":"heater","_POS":[{"_POS":"n","_meaning":[{"_meaning":"加热器；炉子","_sentence":"If you are hot you can turn the heater down.","$$hashKey":"object:73"}],"$$hashKey":"object:70"}],"$$hashKey":"object:193"},{"_spelling":"mature","_POS":[{"_POS":"n","_meaning":[{"_meaning":"成熟","_sentence":"Boys mature more slowly than girls, both physically and psychologically.","$$hashKey":"object:89"}],"$$hashKey":"object:86"}],"$$hashKey":"object:199"},{"_spelling":"ferrous","_POS":[{"_POS":"adj","_meaning":[{"_meaning":"铁的，含铁的","_sentence":"The water was reacting with the ferrous iron in the tank.","$$hashKey":"object:105"}],"$$hashKey":"object:102"}],"$$hashKey":"object:191"},{"_spelling":"everlasting","_POS":[{"_POS":"adj","_meaning":[{"_meaning":"永久的","_sentence":"By the same token , the everlasting interdependence is actually an everlasting love.","$$hashKey":"object:121"},{"_meaning":"永不停止的","_sentence":null,"$$hashKey":"object:127"}],"$$hashKey":"object:118"}],"$$hashKey":"object:187"},{"_spelling":"attachment","_POS":[{"_POS":"n","_meaning":[{"_meaning":"附件","_sentence":"","$$hashKey":"object:145"},{"_meaning":"爱慕","_sentence":"She has a great attachment to her sister.","$$hashKey":"object:151"}],"$$hashKey":"object:142"}],"$$hashKey":"object:164"},{"_spelling":"overlap","_POS":[{"_POS":"vi","_meaning":[{"_meaning":"重叠","_sentence":"","$$hashKey":"object:228"}],"$$hashKey":"object:225"},{"_POS":"vt","_meaning":[{"_meaning":"重叠","_sentence":null,"$$hashKey":"object:247"}],"$$hashKey":"object:242"},{"_POS":"n","_meaning":[{"_meaning":"重叠部分","_sentence":"The overlap between the jacket and the trousers is not good.","$$hashKey":"object:256"},{"_meaning":"覆盖物","_sentence":null,"$$hashKey":"object:261"}],"$$hashKey":"object:252"}]}]';
	exports.preData = preData;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _PD = __webpack_require__(1);

	var PD = _interopRequireWildcard(_PD);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var app = angular.module('app', []);

	app.controller('ctrl', function ($scope) {
	    /**
	     * 状态。1为展示，2为编辑，3为新增
	     * @type {number}
	     */
	    $scope.status = 1;

	    $scope.wordTree = new PD.WordTree();

	    $scope.data = {
	        input: '',
	        word: null,
	        wordSpelling: null,
	        wordList: []
	    };

	    $scope.method = {
	        find: function find(spelling) {
	            $scope.data.wordList = $scope.wordTree.find(spelling);
	        },
	        _show: function _show(index, byInput) {
	            if (byInput) {
	                $scope.data.word = $scope.data.wordList[index];
	                $scope.data.wordList = [];
	            }

	            $scope.data.wordSpelling = $scope.data.word.getSpelling();
	            $scope.status = 1;
	        },
	        show: function show(index) {
	            if ($scope.status > 1) {
	                if (!confirm("确定放弃当前编辑?")) {
	                    return;
	                }
	            }
	            this._show(index, true);
	        },
	        init: function init() {
	            $scope.$watch('data.input', function () {
	                $scope.method.find($scope.data.input);
	            });
	        },
	        addToTmp: function addToTmp() {
	            if ($scope.status > 1) {
	                if (!confirm("确定放弃当前编辑?")) {
	                    return;
	                }
	            }
	            $scope.status = 3;
	            //$scope.data.word = new PD.Word('spelling',[new PD.POS('n', [new PD.Meaning('meaning', 'sentence')])]);
	            $scope.data.word = new PD.Word('', [new PD.POS('n', [new PD.Meaning('', '')])]);
	        },
	        del: function del() {
	            if (confirm("确认删除吗?")) {
	                $scope.wordTree.del($scope.data.word.getSpelling());
	                $scope.data.word = null;
	                alert("删除成功");
	            }
	        },
	        edit: function edit() {
	            if ($scope.status > 1) {
	                if (!confirm("确定放弃当前编辑?")) {
	                    return;
	                }
	            }
	            $scope.status = 2;
	        },
	        addRow: function addRow(index) {
	            $scope.data.word.getPOS()[index].addMeaning(new PD.Meaning(null, null));
	        },
	        delRow: function delRow(index, meaningIndex) {
	            $scope.data.word.getPOS()[index].getMeaning().splice(meaningIndex, 1);
	        },
	        submit: function submit() {
	            switch ($scope.status) {
	                case 2:
	                    $scope.wordTree.update($scope.data.wordSpelling, $scope.data.word);
	                    alert("修改成功");
	                    $scope.method._show(null, false);
	                    break;
	                case 3:
	                    if ($scope.wordTree.insert($scope.data.word)) {
	                        alert("新增成功");
	                        $scope.method._show(null, false);
	                    } else {
	                        alert("单词已存在");
	                    }
	                    break;
	                default:
	                    alert("致命错误");
	            }
	        },
	        addTable: function addTable() {
	            $scope.data.word.addPOS(new PD.POS('n', [new PD.Meaning(null, null)]));
	        },
	        delTable: function delTable(index) {
	            $scope.data.word.getPOS().splice(index, 1);
	        }
	    };

	    $scope.method.init();
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./entry.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./entry.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "select {\n  -webkit-appearance: button;\n  border-radius: 4px;\n  -moz-appearance: button;\n  background-color: white;\n  border: 1px solid #ddd; }\n\n.rela {\n  position: relative; }\n\n#mainCon {\n  max-width: 768px; }\n\n#dropDown {\n  display: block; }\n\n.wordOperation {\n  float: right;\n  margin-left: 10px;\n  display: block; }\n\n.POS {\n  border: 1px solid #ddd;\n  border-radius: 4px; }\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);