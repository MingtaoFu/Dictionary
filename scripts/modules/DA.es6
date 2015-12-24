class DB {
    /**
     * 初始化数据库
     * 如果数据库存在，返回该对象
     * 否则新建
     */
    constructor(dbName) {
        var dataBase = openDatabase(dbName, "1", "word DB", 1024 * 1024, function() {});
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
                    "(id integer PRIMARY KEY AUTOINCREMENT, POS varchar(16), word varchar(32), " +
                    "FOREIGN KEY (word) REFERENCES Word(spelling))",
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
                    " FOREIGN KEY (POS) REFERENCES POS(id))",
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
        var list = [];
        this._real_DB_obj.transaction( function(tx) {
            tx.executeSql(
                /*
                "select Word.spelling, POS.POS, Meaning.meaning, Sentence.content from Word, POS, Meaning, Sentence " +
                "where POS.word=Word.spelling and Meaning.POS=POS.id and Sentence.content=Meaning.id",
                */
                "select distinct spelling from Word",
                [],
                function(tx, result) {
                    for(let i in result.rows) {
                        let wordObj = {};
                        list[result.rows[i].spelling] = wordObj;
                        tx.executeSql(
                            "select distinct POS from POS where word = ?",
                            [result.rows[i].spelling],
                            function() {
                            }
                        );
                    }
                },
                function(tx, error) {
                    console.log("导出失败: " + error.message);
                }
            )
        })

    }

    /**
     * 基本的数据库操作：增删查改
     * 由于数据一次性输出，所以没有查询
     */
    insert(word, succ, fail) {
        var fail = fail || function() {};
        var that = this;
        this.find(
            word,
            function(value) {
                if(value.length != 0) {
                    console.log("已经存在，插入失败");
                    fail();
                } else {
                    that._real_DB_obj.transaction( function(tx) {
                        tx.executeSql(
                            "insert into Word(spelling) values (?)",
                            [word],
                            function(tx, result) {
                                succ();
                            },
                            function(tx, error) {
                                console.log("查询失败: " + error.message);
                                fail();
                            }
                        );
                    });
                }
            },
            function() {

            }
        );
    }

    del() {

    }

    find(word, succ, fail) {
        var fail = fail || function() {};
        this._real_DB_obj.transaction( function(tx) {
            tx.executeSql(
                "select spelling from Word where spelling = ?",
                [word],
                function(tx, result) {
                    succ(result.rows);
                },
                function(tx, error) {
                    console.log("查询失败: " + error.message);
                    fail();
                }
            );
        });
    }

    update() {

    }
}

export {DB};