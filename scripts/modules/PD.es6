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
    getWord() {
        return this._word;
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
            this.insert(value[i]);
        }
    }

    /**
     * 基本操作：增删查改
     */
    insert(word) {
        this.cursor = this._root;
        var spelling = word.getSpelling();
        for(let i in spelling) {
            var index = spelling[i].charCodeAt() - 97;
            if(!this.cursor[index]) {
                this.cursor[index] = new TreeNode();
            }
            this.cursor = this.cursor[index];
            if(!this.cursor.getWord()) {
                this.cursor.setWord(word);
            }
        }

        //还需要插入到本地
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
