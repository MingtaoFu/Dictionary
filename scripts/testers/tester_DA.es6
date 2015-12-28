import * as DA from '../modules/DA.es6';
import * as PD from '../modules/PD.es6';

var word = new PD.Word('a', 2);
var word2 = new PD.Word('sxs', 2);
var word3 = new PD.Word('absolute', 2);
var word4 = new PD.Word('ahead', 2);
var word5 = new PD.Word('able', 2);
var wordaaa = new PD.Word('a', 2);
var str = JSON.stringify(word);
console.log(str);
var wordTree = new PD.WordTree();
var db = new DA.DB();
wordTree.importDB(db.outputDB());
console.log(wordTree);
console.log(wordTree.find('a'));
console.log(wordTree.find('sxs'));
console.log(wordTree.find('ab'));

wordTree.insert(word4, db);
//wordTree.insert(word5, db);
wordTree.del('able', db);
console.log(wordTree.find('a'));
