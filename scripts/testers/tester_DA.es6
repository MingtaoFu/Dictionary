import * as DA from '../modules/DA.es6';

//创建数据库
var dataBase = new DA.DB();
console.log(dataBase);

dataBase.insert('xx');
var result = dataBase.find('xx');
result.then(function(value){
    console.log(value);
});
