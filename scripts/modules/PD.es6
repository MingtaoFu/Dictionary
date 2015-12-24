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
        this.setSpelling(spelling)
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
}

class WordTree {
    constructor() {
        this._root = new TreeNode();
    }
    /**
     * 从数据库导入数据，赋给value属性
     * @param value 数据库对象
     */
    importDB(value) {
        var cursor = this._root;
        for(let i in value) {
            let spelling = value[i].getSpelling();
            for(let j in spelling) {
                var index = spelling[j].charCodeAt() - 97;
                if(!cursor[index]) {
                    cursor[index] = new TreeNode();
                }
                cursor = cursor[index];
                cursor.setWord(value[i]);
            }
        }
    }

    /**
     * 基本操作：增删查改
     */
    insert(db) {

        db.insert();
    }

    del() {

    }

    find() {

    }

    update() {

    }

    /**
     * setters and getters
     */
}

export {Word, WordTree};
