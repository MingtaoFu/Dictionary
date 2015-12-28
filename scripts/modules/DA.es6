class DB {
    /**
     * 初始化数据库
     * 如果数据库存在，返回该对象
     * 否则新建
     */
    constructor() {
        if(!localStorage.dicData) {
            localStorage.dicData = "[]";
        }
        this._dicData = JSON.parse(localStorage.dicData);
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
        this._dicData.push(word);
        this.saveToLocal();
    }

    del(spelling) {
        for (let i in this._dicData) {
            if(spelling == this._dicData[i]._spelling) {
                this._dicData.splice(i, 1);
                this.saveToLocal();
                return;
            }
        }
        console.log('DA 找不到这个词.')
    }

    update() {

    }

    saveToLocal() {
        localStorage.dicData = JSON.stringify(this._dicData);
    }
}

export {DB};