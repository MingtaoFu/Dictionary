import * as DA from './DA.es6';

class Meaning {
    constructor(meaning, sentence) {
        this.setMeaning(meaning);
        this.setSentence(sentence);
    }

    /**
     * setters and getters
     */
    setMeaning(meaning) {
        this._meaning = meaning;
    }

    setSentence(sentence) {
        this._sentence = sentence;
    }

    getMeaning() {
        return this._meaning;
    }

    getSentence() {
        return this._sentence;
    }

}

class POS {
    constructor(POS, meaning) {
        this.setPOS(POS);
        this.setMeaning(meaning);
    }

    /**
     * setters and getters
     */
    setPOS(POS) {
        this._POS = POS;
    }

    getPOS() {
        return this._POS;
    }
    getMeaning() {
        return this._meaning;
    }
    setMeaning(meaning) {
        this._meaning = meaning;
    }

    addMeaning(meaning) {
        this._meaning.push(meaning);
    }
}

class Word {
	constructor(spelling, POS) {
        //字符串
        this.setSpelling(spelling);
        //数组
        this.setPOS(POS);
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
    setPOS(POS) {
        this._POS = POS;
    }
    getPOS() {
        return this._POS;
    }

    addPOS(POS) {
        this._POS.push(POS);
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
        this._db = new DA.DB();
        this.importDB(this._db.outputDB());
    }
    /**
     * 从数据库导入数据，赋给value属性
     * @param value 数据库对象
     */
    importDB(value) {
        for(let i in value) {
            this.cursor = this._root;
            this.insertToTree(WordTree.objToWord(value[i]));
        }
    }

    static objToWord(obj) {
        var word = new Word(obj._spelling, []);
        for (let pos in obj._POS) {
            var POSObj = new POS(obj._POS[pos]._POS, []);
            for (let meaning in obj._POS[pos]._meaning) {
                var meaningObj = new Meaning(obj._POS[pos]._meaning[meaning]._meaning, obj._POS[pos]._meaning[meaning]._sentence);
                POSObj.addMeaning(meaningObj);
            }
            word.addPOS(POSObj);
        }
        return word;
    }

    /**
     * 基本操作：增删查改
     */

    insertToTree(word) {
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
            return true;
        }
    }

    insert(word) {
        if (this.insertToTree(word)) {
            this._db.insert(word);
        }
    }


    del(spelling) {
        this._del(spelling);
        this._db.del(spelling);
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
        if (spelling == '') {
            return [];
        }

        this.cursor = this._root;
        for(let i in spelling) {
            var index = spelling[i].charCodeAt() - 97;
            if(!this.cursor.getValue()[index]) {
                return [];
            }
            this.cursor = this.cursor.getValue()[index];
        }
        return this.cursor.recursionErgodic();
    }

    update(oldSpelling, newWord) {
        this.del(oldSpelling);
        this.insert(newWord);
    }

}
export {Word, WordTree, Meaning};
