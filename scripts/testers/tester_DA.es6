import * as DA from '../modules/DA.es6';

//创建数据库
var dataBase = new DA.DB('x');
console.log(dataBase);

dataBase.find('xx',function(value) {
    console.log(value);
});

dataBase.insert('xx',function() {
    console.log(2);
});

dataBase.outputDB();
