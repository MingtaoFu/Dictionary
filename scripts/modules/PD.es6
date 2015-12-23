import * as DA from './DA.es6';

class Meaning {
    constructor(pos, meaning) {
        POS(pos);
        meaning(meaning);

    }

    /**
     * setters and getters
     */
    set POS(pos) {
        this._POS = pos;
    }

    set meaning(meaning) {
        this._meaning = meaning;
    }
}

class Word {
	constructor(spelling, meaning) {
        //字符串
        spelling(spelling);
        //数组
        meaning(meaning);
	}

	/**
	* setters and getters
	*/
    set spelling(spelling) {
        this._spelling = spelling;
    }
    set meaning(meaning) {
        this._meaning = meaning;
    }

	//搜索匹配，含部分匹配
	match(str) {

	}

	//验证是否已经存在了此词
	validateUnique() {

	}
}

class WordTree {
    /**
     * 从数据库导入数据，赋给value属性
     * @param value 数据库对象
     */
    importDB(value) {
        value(value);
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
    set value(value) {
        this._value = value;
    }
}

export {Word, WordTree};
