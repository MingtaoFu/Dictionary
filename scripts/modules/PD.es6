import * as DA from './DA.es6';

class Meaning {
    constructor(pos, meaning) {
        this.setPOS(pos);
        this.setMeaning(meaning);
    }

    /**
     * setters and getters
     */
    setPOS(pos) {
        this._POS = pos;
    }

    setMeaning(meaning) {
        this._meaning = meaning;
    }
}

class Word {
	constructor(spelling, meaning) {
        //字符串
        this.setSpelling(spelling);
        //数组
        this.setMeaning(meaning);
	}

	/**
	* setters and getters
	*/
    setSpelling(spelling) {
        this._spelling = spelling;
    }
    getSpelling() {
        return this._spelling;
    }
    setMeaning(meaning) {
        this._meaning = meaning;
    }
    getMeaning() {
        return this._meaning;
    }

	//搜索匹配，含部分匹配
	match(str) {

	}

	//验证是否已经存在了此词
	validateUnique() {

	}

    insert(db) {
        db.find(this.getSpelling());
        db.insert(this)
    }
}

class TreeNode {
    constructor() {
        this._value = [];
        this._word = null;
    }

    getValue() {
        return this._value;
    }
    setWord(word) {
        this._word = word;
    }
    getWord() {
        return this._word;
    }

    //递归遍历
    recursionErgodic() {
        var resultArr = [];
        if(this._word) {
            resultArr.push(this._word);
        }
        for (let i in this._value) {
            var nextArr = this._value[i].recursionErgodic();
            for (let j in nextArr) {
                 resultArr.push(nextArr[j]);
            }
        }
        return resultArr;
    }
}

class WordTree {
    constructor() {
        this._root = new TreeNode();
        this.cursor = this._root;
    }
    /**
     * 从数据库导入数据，赋给value属性
     * @param value 数据库对象
     */
    importDB(value) {
        for(let i in value) {
            this.cursor = this._root;
            this._insert(WordTree.objToWord(value[i]));
        }
    }

    static objToWord(obj) {
        return new Word(obj._spelling, obj._meaning);
    }

    /**
     * 基本操作：增删查改
     */

    insert(word, db) {
        this.cursor = this._root;
        var spelling = word.getSpelling();
        for(let i in spelling) {
            var index = spelling[i].charCodeAt() - 97;
            if(!this.cursor.getValue()[index]) {
                this.cursor.getValue()[index] = new TreeNode();
            }
            this.cursor = this.cursor.getValue()[index];
        }
        if(!this.cursor.getWord()) {
            this.cursor.setWord(word);
            db.insert(word);
        }
    }

    del(spelling, db) {
        this._del(spelling);
        db.del(spelling);
    }

    _del(spelling) {
        //参考查找的写法
        var cursor2;
        this.cursor = this._root;
        for(let i in spelling) {
            cursor2 = this.cursor;
            var index = spelling[i].charCodeAt() - 97;
            if(!this.cursor.getValue()[index]) {
                return null;
            }
            this.cursor = this.cursor.getValue()[index];
        }
        if(this.cursor.getValue()) {
            this.cursor.setWord(null);
        } else {
            cursor2.getValue()[index] = null;
            if(cursor2.getValue().length == 0) {
                cursor2.setValue(null);
            }
        }
    }

    find(spelling) {
        this.cursor = this._root;
        for(let i in spelling) {
            var index = spelling[i].charCodeAt() - 97;
            if(!this.cursor.getValue()[index]) {
                return null;
            }
            this.cursor = this.cursor.getValue()[index];
        }
        return this.cursor.recursionErgodic();
    }

    update() {

    }

    /**
     * setters and getters
     */
}
export {Word, WordTree};
