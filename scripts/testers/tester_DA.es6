import * as DA from '../modules/DA.es6';
import * as PD from '../modules/PD.es6';


var word = new PD.Word('ss', 2);
var word2 = new PD.Word('sxs', 2);
var str = JSON.stringify(word);
console.log(str)
var wordTree = new PD.WordTree();
wordTree.importDB([word, word2]);
console.log(wordTree);
console.log(wordTree.find('ss'));
console.log(wordTree.find('sxs'));
console.log(wordTree.find('xs'));
