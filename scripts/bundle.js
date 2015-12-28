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

	__webpack_require__(1);

	var _PD = __webpack_require__(3);

	var PD = _interopRequireWildcard(_PD);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	__webpack_require__(4);
	/*
	var Man = require('./modules/test.js');
	var mingtao = new Man('tao');
	mingtao.sayHi();
	*/

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _DA = __webpack_require__(2);

	var DA = _interopRequireWildcard(_DA);

	var _PD = __webpack_require__(3);

	var PD = _interopRequireWildcard(_PD);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var word = new PD.Word('a', 2);
	var word2 = new PD.Word('sxs', 2);
	var word3 = new PD.Word('absolute', 2);
	var word4 = new PD.Word('ahead', 2);
	var word5 = new PD.Word('able', 2);
	var wordaaa = new PD.Word('a', 2);
	var str = JSON.stringify(word);
	console.log(str);
	var wordTree = new PD.WordTree();
	var db = new DA.DB();
	wordTree.importDB(db.outputDB());
	console.log(wordTree);
	console.log(wordTree.find('a'));
	console.log(wordTree.find('sxs'));
	console.log(wordTree.find('ab'));

	wordTree.insert(word4, db);
	//wordTree.insert(word5, db);
	wordTree.del('able', db);
	console.log(wordTree.find('a'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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
	            localStorage.dicData = "[]";
	        }
	        this._dicData = JSON.parse(localStorage.dicData);
	    }

	    /**
	     * 返回整个数据库的数据
	     * 它们将直接存入内存，以便快速搜索
	     */

	    _createClass(DB, [{
	        key: "outputDB",
	        value: function outputDB() {
	            return this._dicData;
	        }

	        /**
	         * 基本的数据库操作：增删查改
	         */

	    }, {
	        key: "insert",
	        value: function insert(word) {
	            this._dicData.push(word);
	            this.saveToLocal();
	        }
	    }, {
	        key: "del",
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
	        key: "update",
	        value: function update() {}
	    }, {
	        key: "saveToLocal",
	        value: function saveToLocal() {
	            localStorage.dicData = JSON.stringify(this._dicData);
	        }
	    }]);

	    return DB;
	})();

	exports.DB = DB;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.WordTree = exports.Word = undefined;

	var _DA = __webpack_require__(2);

	var DA = _interopRequireWildcard(_DA);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Meaning = (function () {
	    function Meaning(pos, meaning) {
	        _classCallCheck(this, Meaning);

	        this.setPOS(pos);
	        this.setMeaning(meaning);
	    }

	    /**
	     * setters and getters
	     */

	    _createClass(Meaning, [{
	        key: 'setPOS',
	        value: function setPOS(pos) {
	            this._POS = pos;
	        }
	    }, {
	        key: 'setMeaning',
	        value: function setMeaning(meaning) {
	            this._meaning = meaning;
	        }
	    }]);

	    return Meaning;
	})();

	var Word = (function () {
	    function Word(spelling, meaning) {
	        _classCallCheck(this, Word);

	        //字符串
	        this.setSpelling(spelling);
	        //数组
	        this.setMeaning(meaning);
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
	        key: 'setMeaning',
	        value: function setMeaning(meaning) {
	            this._meaning = meaning;
	        }
	    }, {
	        key: 'getMeaning',
	        value: function getMeaning() {
	            return this._meaning;
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

	        this._value = [];
	        this._word = null;
	    }

	    _createClass(TreeNode, [{
	        key: 'getValue',
	        value: function getValue() {
	            return this._value;
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
	            for (var i in this._value) {
	                var nextArr = this._value[i].recursionErgodic();
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
	                this._insert(WordTree.objToWord(value[i]));
	            }
	        }
	    }, {
	        key: 'insert',

	        /**
	         * 基本操作：增删查改
	         */

	        value: function insert(word, db) {
	            this.cursor = this._root;
	            var spelling = word.getSpelling();
	            for (var i in spelling) {
	                var index = spelling[i].charCodeAt() - 97;
	                if (!this.cursor.getValue()[index]) {
	                    this.cursor.getValue()[index] = new TreeNode();
	                }
	                this.cursor = this.cursor.getValue()[index];
	            }
	            if (!this.cursor.getWord()) {
	                this.cursor.setWord(word);
	                db.insert(word);
	            }
	        }
	    }, {
	        key: 'del',
	        value: function del(spelling, db) {
	            this._del(spelling);
	            db.del(spelling);
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
	                if (!this.cursor.getValue()[index]) {
	                    return null;
	                }
	                this.cursor = this.cursor.getValue()[index];
	            }
	            if (this.cursor.getValue()) {
	                this.cursor.setWord(null);
	            } else {
	                cursor2.getValue()[index] = null;
	                if (cursor2.getValue().length == 0) {
	                    cursor2.setValue(null);
	                }
	            }
	        }
	    }, {
	        key: 'find',
	        value: function find(spelling) {
	            this.cursor = this._root;
	            for (var i in spelling) {
	                var index = spelling[i].charCodeAt() - 97;
	                if (!this.cursor.getValue()[index]) {
	                    return null;
	                }
	                this.cursor = this.cursor.getValue()[index];
	            }
	            return this.cursor.recursionErgodic();
	        }
	    }, {
	        key: 'update',
	        value: function update() {}

	        /**
	         * setters and getters
	         */

	    }], [{
	        key: 'objToWord',
	        value: function objToWord(obj) {
	            return new Word(obj._spelling, obj._meaning);
	        }
	    }]);

	    return WordTree;
	})();

	exports.Word = Word;
	exports.WordTree = WordTree;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "#mainCon {\n  max-width: 768px; }\n", ""]);

	// exports


/***/ },
/* 6 */
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
/* 7 */
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