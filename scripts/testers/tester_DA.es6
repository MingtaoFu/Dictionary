import * as DA from '../modules/DA.es6';
import * as PD from '../modules/PD.es6';


var word = new PD.Word('a', 2);
var word2 = new PD.Word('sxs', 2);
var word3 = new PD.Word('absolute', 2);
var word4 = new PD.Word('ahead', 2);
var word5 = new PD.Word('able', 2);
var str = JSON.stringify(word);
console.log(str);
var wordTree = new PD.WordTree();
wordTree.importDB([word, word2, word3, word4, word5]);
console.log(wordTree);
console.log(wordTree.find('a'));
console.log(wordTree.find('sxs'));
