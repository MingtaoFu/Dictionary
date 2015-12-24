class DB {
    /**
     * 初始化数据库
     * 如果数据库存在，返回该对象
     * 否则新建
     */
    constructor() {
        if(!localStorage.dicData) {
            localStorage.dicData = {};
        }
        this._dicData = localStorage.dicData;
    }

    /**
     * 返回整个数据库的数据
     * 它们将直接存入内存，以便快速搜索
     */
    outputDB() {
        return this._dicData;
    }

    /**
     * 基本的数据库操作：增删查改
     */
    insert(word) {
        this._dicData[word.getSpelling()] = word;
    }

    del() {

    }

    find(word) {
        return this._dicData[word];
    }

    update() {

    }
}

export {DB};