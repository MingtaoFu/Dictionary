class DB {
    /**
     * 初始化数据库
     * 如果数据库存在，返回该对象
     * 否则新建
     */
    constructor(dbName) {
        var dataBase = openDatabase(dbName, "1.0", "word DB", 1024 * 1024, function() {});
        if (!dataBase) {
            alert("开启/创建数据库失败。");
        } else {
            this._real_DB_obj = dataBase;

            //Unique table
            dataBase.transaction( function(tx) {
                tx.executeSql(
                    "create table if not exists Word (spelling varchar(32) UNIQUE)",
                    [],
                    function(tx,result){ console.log('创建Word表成功'); },
                    function(tx, error){ console.log('创建word表失败: ' + error.message);
                    }
                );
            });
            //POS table
            dataBase.transaction( function(tx) {
                tx.executeSql(
                    "create table if not exists POS " +
                    "(POS varchar(16), word varchar(32), FOREIGN KEY (word) REFERENCES Word(spelling))",
                    [],
                    function(tx,result){ console.log('创建POS表成功'); },
                    function(tx, error){ console.log('创建POS表失败: ' + error.message);
                    }
                );
            });
            //Meaning table
            dataBase.transaction( function(tx) {
                tx.executeSql(
                    "create table if not exists Meaning " +
                    "(id integer PRIMARY KEY AUTOINCREMENT, meaning varchar(32), word varchar(32), POS varchar(16)," +
                    " FOREIGN KEY (word) REFERENCES Word(spelling))"
                    /*+ " FOREIGN KEY (POS) REFERENCES POS(POS)) "*/,
                    [],
                    function(tx,result){ console.log('创建Meaning表成功'); },
                    function(tx, error){ console.log('创建Meaning表失败: ' + error.message);
                    }
                );
            });
            //Sentence table
            dataBase.transaction( function(tx) {
                tx.executeSql(
                    "create table if not exists Sentence " +
                    "(id integer PRIMARY KEY AUTOINCREMENT, content varchar(256), meaning integer," +
                    " FOREIGN KEY (meaning) REFERENCES Meaning(id))",
                    [],
                    function(tx,result){ console.log('创建Sentence表成功'); },
                    function(tx, error){ console.log('创建Sentence表失败: ' + error.message);
                    }
                );
            });
        }
    }

    /**
     * 返回整个数据库的数据
     * 它们将直接存入内存，以便快速搜索
     */
    outputDB() {

    }

    /**
     * 基本的数据库操作：增删查改
     * 由于数据一次性输出，所以没有查询
     */
    insert(word) {
        this.find(word).then(function(value) {

        });
    }

    del() {

    }

    find(word) {
        var that = this;
        return new Promise(function(resolve, reject) {
            that._real_DB_obj.transaction( function(tx) {
                tx.executeSql(
                    "select spelling from Word where spelling = ?",
                    [word],
                    function(tx, result) {
                        resolve(result.rows);
                    },
                    function(tx, error) {
                        console.log("查询失败: " + error.message);
                    }
                );
            });
        });
    }

    update() {

    }
}

export {DB};